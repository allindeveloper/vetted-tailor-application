const size = {
  laptop: "1024px",
  desktop: "2560px",
  mobileS: "600px",
  mobileL: "1700px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileL: `(max-width: ${size.mobileL})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};
