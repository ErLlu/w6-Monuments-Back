/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "dist",
  resolver: "jest-ts-webcompat-resolver",
  testMatch: ["**/src/**/*.test.ts"],
};
