module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "js"],
  roots: ["."],
  testEnvironment: "node",
  verbose: true,
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1"
  }
};
