export const delayyer = (callback: () => void, delay: number = 1000) => {
  setTimeout(() => {
    callback();
  }, delay);
};
