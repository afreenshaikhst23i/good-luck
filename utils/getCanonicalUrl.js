export const getCanonicalUrl = (path) => {
  const baseUrl = "https://www.goodluckdps.com";
  const cleanPath = path.split("?")[0];
  return `${baseUrl}${cleanPath}`;
};
