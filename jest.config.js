module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  setupFiles: ['core-js'],
  roots: ['src'],
  testEnvironment: 'node',
};
