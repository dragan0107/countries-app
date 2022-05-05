export const debounce = (fn, waitTime) => {
  let timer;
  return (val) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(val);
    }, waitTime);
  };
};
