import {
  findMaxOfNumbers,
  showMonthForNumber,
  canCircleFitIntoSquare,
} from "./module-2";

let originalConsoleLog;

describe("Homework #2", () => {
  beforeEach(() => {
    originalConsoleLog = console.log;
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = originalConsoleLog;
  });

  describe("Find max of two numbers", () => {
    it("Function return correct value if the first number is greater than second", () => {
      findMaxOfNumbers(1, -100);
      expect(console.log).toHaveBeenCalledWith("Наибольшее число: 1.");
    });

    it("Function return correct value if the second number is greater than first", () => {
      findMaxOfNumbers(1, 100);
      expect(console.log).toHaveBeenCalledWith("Наибольшее число: 100.");
    });

    it("Function return correct value if numbers are equal", () => {
      findMaxOfNumbers(-99, -99);
      expect(console.log).toHaveBeenCalledWith("Наибольшее число: -99.");
    });
  });

  describe("Show the name of the month by its number", () => {
    it("Function return name of the month for correct inputs", () => {
      const months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ];
      months.forEach((element, index) => {
        jest.spyOn(window, "prompt").mockReturnValue(String(index + 1));
        showMonthForNumber();
        expect(console.log).toHaveBeenCalledWith(element);
      });
    });

    it("Function return 'Invalid month number' for invalid inputs", () => {
      const invalidValues = [-1, "Faa", "Array", ""];
      invalidValues.forEach((element) => {
        jest.spyOn(window, "prompt").mockReturnValue(String(element));
        showMonthForNumber();
        expect(console.log).toHaveBeenCalledWith("Некорректный номер месяца.");
      });
    });
  });

  describe("Determine whether it`s possible to fit a circle into a square", () => {
    it("Function return true for a circle that can be fit into a square", () => {
      expect(canCircleFitIntoSquare(Math.PI * 10 ** 2, 20 ** 2)).toBeTruthy();
    });

    it("Function return false for a circle that can not be fit into a square", () => {
      expect(canCircleFitIntoSquare(Math.PI * 11 ** 2, 20 ** 2)).toBeFalsy();
    });
  });
});
