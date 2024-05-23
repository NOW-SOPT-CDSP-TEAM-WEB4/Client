/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

type ThrottledFunction<T extends (...args: any[]) => any> = {
  (...args: Parameters<T>): void;
  cancel: () => void;
};

export const throttle = <T extends (...args: any[]) => any>(func: T, delay: number): ThrottledFunction<T> => {
  let lastCallTime = 0;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const throttled = (...args: Parameters<T>): void => {
    const nowTime = Date.now();

    if (nowTime - lastCallTime < delay) {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(
        () => {
          lastCallTime = nowTime;
          func(...args);
        },
        delay - (nowTime - lastCallTime)
      );
    } else {
      lastCallTime = nowTime;
      func(...args);
    }
  };

  throttled.cancel = () => {
    if (timeoutId) clearTimeout(timeoutId);
  };

  return throttled;
};
