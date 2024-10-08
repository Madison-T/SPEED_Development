module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',  // Use ts-jest to transform TypeScript files
    },
    transformIgnorePatterns: [
      '/node_modules/',         // Ignore transformation of node_modules
    ],
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',  // Ensure Jest uses the same TypeScript config
      },
    },
  };
  