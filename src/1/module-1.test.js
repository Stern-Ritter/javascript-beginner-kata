import {
  sumAndMultiplicationOfTwoNumbers,
  countNumberOfCharInStrings,
  sumDigitsOfNumber,
} from "./module-1";

let originalConsoleLog;

describe("Homework #1", () => {
  beforeEach(() => {
    originalConsoleLog = console.log;
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = originalConsoleLog;
  });

  describe("Sum and multiplication of two numbers", () => {
    it("Function return correct value", () => {
      sumAndMultiplicationOfTwoNumbers(1, 2);
      expect(console.log).toHaveBeenCalledWith("Сумма: 3, произведение: 2.");
    });
  });

  describe("Count number of characters in strings", () => {
    it("Function return correct value", () => {
      countNumberOfCharInStrings("123", "12345");
      expect(console.log).toHaveBeenCalledWith("Количество символов: 8.");
    });
  });

  describe("Sum digits of number", () => {
    it("Function return correct value", () => {
      sumDigitsOfNumber(1234567);
      expect(console.log).toHaveBeenCalledWith("Сумма цифр числа: 28.");
    });
  });
});
