import {
  sumArrElements,
  doubleArrElements,
  findMinAndMaxArrElements,
} from "./module-5";

let originalConsoleLog;

describe("Homework #5", () => {
  describe("Sum array elements", () => {
    it("Function return correct value", () => {
      const testArr = [1, 2, 3, 4, 5];
      expect(sumArrElements(testArr)).toBe(15);
    });
  });

  describe("Make copy of array with doubled values", () => {
    it("Function return correct value", () => {
      const testArr = [0, 1, 2, 3, 5, -10];
      expect(doubleArrElements(testArr)).toEqual([0, 2, 4, 6, 10, -20]);
    });
  });

  describe("Find the larges and smallest elements in the array", () => {
    beforeEach(() => {
      originalConsoleLog = console.log;
      console.log = jest.fn();
    });

    afterEach(() => {
      console.log = originalConsoleLog;
    });

    it("Function return correct value", () => {
      const arr = [-10, 1, 77, 1001, -101, 10001, 99];
      findMinAndMaxArrElements(arr);
      expect(console.log).toBeCalledWith("Минимум: -101, максимум: 10001.");
    });
  });
});
