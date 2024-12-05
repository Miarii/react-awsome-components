import PropTypes from "prop-types";
import Features from "../Feature/Features";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;

  return (
    <div className="bg-indigo-500 rounded-md p-4 flex flex-col text-white">
      <h2 className="text-center">
        <span className="text-7xl font-extrabold">Price: {price}</span>
        <span className="text-2xl"> /month</span>
      </h2>
      <h4 className="text-3xl text-center my-8">{name}</h4>
      <div className="pl-6 flex-grow">
        {features.map((feature, idx) => (
          <Features key={idx} feature={feature}></Features>
        ))}
      </div>
      <button className="mt-12 bg-green-400 hover:bg-green-600 text-white w-full p-2 font-bold rounded-lg">Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object.isRequired,
};

export default PriceOption;
