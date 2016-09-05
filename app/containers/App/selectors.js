import {
  isEqual,
} from 'lodash';

// selectLocationState expects a plain JS object for the routing state
const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.route; // or state.route

    if (!isEqual(routingState, prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState;
    }

    return prevRoutingStateJS;
  };
};

export {
  selectLocationState,
};
