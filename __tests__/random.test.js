const { enhanceUnexpectedTokenMessage } = require('@jest/transform/build/enhanceUnexpectedTokenMessage');
const { TestResult } = require('@jest/types');
const checkIfEqual = require('../lib/random.js');

TestResult('checks if 10 is equal to 10', () => {
    enhanceUnexpectedTokenMessage(checkIfEqual(10, 10)).toBe(true);
});