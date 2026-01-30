module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  testMatch: ["**/?(*.)+(spec|test).(ts|tsx)"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],

  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }]
  },

  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png|jpg|jpeg|webp)$": "<rootDir>/__mocks__/fileMock.js"
  },

  // ignore nested repos / duplicated package.json
  modulePathIgnorePatterns: [
    "<rootDir>/Source-Code/",
    "<rootDir>/NTI_Graduation_project/",
    "<rootDir>/Application-Code-old-1769720813/"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/Source-Code/",
    "<rootDir>/NTI_Graduation_project/",
    "<rootDir>/Application-Code-old-1769720813/"
  ],

  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/main.tsx",
    "!src/vite-env.d.ts"
  ]
};
