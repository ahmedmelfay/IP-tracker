export const loading = (loader) => {
  return {
    type: "LOADED",
    payload: loader,
  };
};
