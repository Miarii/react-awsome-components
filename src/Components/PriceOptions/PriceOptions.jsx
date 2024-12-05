import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      "id": 1,
      "name": "Basic Plan",
      "price": "$30",
      "features": [
        "Access to gym equipment",
        "Locker facility",
        "One group class per week",
        "Complimentary water station",
        "Flexible hours access (6 AM - 9 PM)"
      ]
    },
    {
      "id": 2,
      "name": "Standard Plan",
      "price": "$50",
      "features": [
        "Access to gym equipment",
        "Locker facility",
        "Unlimited group classes",
        "Free fitness assessment",
        "Complimentary water station",
        "Flexible hours access (5 AM - 11 PM)",
        "Access to nutrition and meal plans"
      ]
    },
    {
      "id": 3,
      "name": "Premium Plan",
      "price": "$75",
      "features": [
        "Access to gym equipment",
        "Locker facility",
        "Unlimited group classes",
        "Free fitness assessment",
        "Personal trainer (4 sessions/month)",
        "Access to sauna and steam room",
        "Priority access to fitness events",
        "Customized workout plans",
        "Monthly progress tracking with trainer",
        "Access to premium lounge area"
      ]
    }
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl text-center mb-6">Best Prices</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;