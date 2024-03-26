import PropTypes from "prop-types";

export const CounterButton = ({action, children}) => {
  return <button onClick={action}>{children}</button>;
};

CounterButton.propTypes = {
  action: PropTypes.func,
  children: PropTypes.node.isRequired,
};
