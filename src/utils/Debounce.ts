export const debounce = (fn: (val: string) => void, waitTime: number) => {
  let timer: ReturnType<typeof setTimeout>;
  return (val: string) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(val);
    }, waitTime);
  };
};
