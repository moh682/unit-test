export const delayyer = async (callback: () => void, delay: number = 1000) => {
  setTimeout(() => {
    callback();
    Promise.resolve();
  }, delay);
};
