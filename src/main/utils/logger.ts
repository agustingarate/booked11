export const debug = (message: string, ...args: unknown[]) => {
  if (__DEV__) {
    console.debug(message, ...args);
  }
};
