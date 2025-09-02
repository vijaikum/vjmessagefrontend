/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    collectCoverage: true,
    preset: "ts-jest",
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    // testMatch:["**/__TESTS__/**.+(test.ts|test.tsx)"],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    transform:{
        "^.+\\.(ts|tsx)$":"ts-jest"
    },
    moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/src/__mocks__/styleMock.js"
  }
}