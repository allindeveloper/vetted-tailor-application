module.exports = {
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "\\.tsx?$": "ts-jest",
    "\\.jsx?$": "babel-jest", // if you have jsx tests too
  },
  globals: {
    "ts-jest": {
      tsConfig: "./tsconfig.json",
    },
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\](?!lodash-es/).+\\.js$"],
};
