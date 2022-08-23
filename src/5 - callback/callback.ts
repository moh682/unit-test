export const delayyer = async (callback: () => void, delay: number = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      callback();
      resolve(null);
    }, 1000);
  });
};
