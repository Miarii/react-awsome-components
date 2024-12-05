import PropTypes from "prop-types";
import { FaCircleCheck } from "react-icons/fa6";
const Features = ({ feature }) => {
  return (
    <div>
      <p className="flex text-center items-center">
        <FaCircleCheck className="text-green-400 mr-2 text-2xl" />
        {feature}
      </p>
    </div>
  );
};

Features.propTypes = {
  feature: PropTypes.string.isRequired,
};

export default Features;
