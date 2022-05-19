export const debounce = (
  fn: (val: React.ChangeEvent<HTMLInputElement>) => void,
  waitTime: number
) => {
  let timer: ReturnType<typeof setTimeout>;
  return (val: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(val);
    }, waitTime);
  };
};
