module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/__tests__'],
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).js', '**/?(*.)+(spec|test).js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  collectCoverageFrom: [
    'js/**/*.js',
    '!js/**/*.min.js'
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.js'],
  testTimeout: 10000
};
