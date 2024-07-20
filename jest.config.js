module.exports = {
    preset: "ts-jest",
    setupFilesAfterEnv: ["@testing-library/jest-dom", "<rootDir>/setup-jest.js"],
    testEnvironment: "jest-environment-jsdom",
    globals: {
      "ts-jest": {
        tsconfig: "tsconfig.json",
        babelConfig: true,
      },
    },
    transform: { "^.+\\.(ts|tsx|js|jsx|mjs)$": "ts-jest" },
    moduleNameMapper: {
      "^.+\\.(css|less|scss)$": "babel-jest",
    },
  };