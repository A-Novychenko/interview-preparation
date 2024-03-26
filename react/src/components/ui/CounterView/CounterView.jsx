import PropTypes from "prop-types";

export const CounterView = ({count}) => {
  return <p>{count}</p>;
};

CounterView.propTypes = {
  count: PropTypes.number,
};
