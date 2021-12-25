import {
  sumInRange,
  printMultiplicationTableFor,
  calcAverageOfOddNumbersInRange,
} from "./module-3";

let originalConsoleLog;

describe("Homework #3", () => {
  beforeEach(() => {
    originalConsoleLog = console.log;
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = originalConsoleLog;
  });

  describe("Sum of integers in the range", () => {
    it("Function return correct value", () => {
      sumInRange(50, 100);
      expect(console.log).toHaveBeenCalledWith(3825);
    });
  });

  describe("Print the multiplication table for seven", () => {
    it("Function return correct value", () => {
      const expectResult = [
        "7 x 1 = 7",
        "7 x 2 = 14",
        "7 x 3 = 21",
        "7 x 4 = 28",
        "7 x 5 = 35",
        "7 x 6 = 42",
        "7 x 7 = 49",
        "7 x 8 = 56",
        "7 x 9 = 63",
      ];
      printMultiplicationTableFor(7);
      expectResult.forEach((element, index) => {
        expect(console.log.mock.calls[index][0]).toBe(element);
      });
    });
  });

  describe("Sum of odd numbers in the range from 1 to n", () => {
    it("Function return correct value for 0", () => {
      jest.spyOn(window, "prompt").mockReturnValue("0");
      calcAverageOfOddNumbersInRange();
      expect(console.log).toHaveBeenLastCalledWith(
        "Сумма нечетных чисел от 1 до 0: 0."
      );
    });

    it("Function return correct value for 1", () => {
      jest.spyOn(window, "prompt").mockReturnValue("1");
      calcAverageOfOddNumbersInRange();
      expect(console.log).toHaveBeenLastCalledWith(
        "Сумма нечетных чисел от 1 до 1: 1."
      );
    });

    it("Function return correct value for number greater than 1", () => {
      jest.spyOn(window, "prompt").mockReturnValue("11");
      calcAverageOfOddNumbersInRange();
      expect(console.log).toHaveBeenLastCalledWith(
        "Сумма нечетных чисел от 1 до 11: 36."
      );
    });
  });
});
