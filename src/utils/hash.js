export const compactHash = (hash , number = 2) => {
  return hash.slice(0, number) + "..." + hash.slice(-number);
};
