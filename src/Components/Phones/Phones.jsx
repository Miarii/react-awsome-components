import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { Audio } from "react-loader-spinner";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to true before the API call
    setLoading(true);
    
    // Set a timeout to ensure loading stays true for at least 3 seconds
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        console.log(phonesWithFakeData);
        setPhones(phonesWithFakeData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        // Clear the timeout and set loading to false
        clearTimeout(loadingTimeout);
        setLoading(false);
      });

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(loadingTimeout);
  }, []); // Added dependency array to prevent infinite re-renders

  return (
    <div className="mt-10">
      <div className="flex justify-center items-center">
        {loading && (
          <Audio
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
          />
        )}
      </div>
      <h1 className="mx-auto text-center text-4xl">Phones: {phones.length}</h1>
      {!loading && (
        <BarChart className="mx-auto" width={1200} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </BarChart>
      )}
    </div>
  );
};

export default Phones;