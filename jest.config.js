module.exports = {
    "transform": {
        "\\.[jt]sx?$": "ts-jest"
    },
    "moduleNameMapper": {
        "\\.s[ac]ss$": "<rootDir>/__mocks__/styleMock.js",
        "hooks\*": "<rootDir>/__mocks__/mediaMock.js"
    },
    "testEnvironment": "jsdom",
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js"
    ]
      
}