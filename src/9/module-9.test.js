import {
  isTriangleRectangular,
  getCircumferenceAndArea,
  findEquationRoots,
} from "./module-9";

let originalConsolelog;

describe("Homework #9", () => {
  beforeEach(() => {
    originalConsolelog = console.log;
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = originalConsolelog;
  });

  describe("Determine whether triangle is rectangular", () => {
    it(
      "Function return true for rectangular triangle," +
        "hypotenuse is the first argument",
      () => {
        expect(isTriangleRectangular(17, 15, 8)).toBeTruthy();
      }
    );

    it(
      "Function return true for rectangular triangle," +
        "hypotenuse is the second argument",
      () => {
        expect(isTriangleRectangular(8, 10, 6)).toBeTruthy();
      }
    );

    it(
      "Function return true for rectangular triangle," +
        "hypotenuse is the third argument",
      () => {
        expect(isTriangleRectangular(8, 6, 10)).toBeTruthy();
      }
    );

    it("Function return false for a non-right triangle", () => {
      expect(isTriangleRectangular(4, 6, 8)).toBeFalsy();
    });
  });

  describe("Find circumference and area of the triangle", () => {
    it("Function return correct value", () => {
      getCircumferenceAndArea(10);
      expect(console.log).toBeCalledWith(
        "Периметр окружности: 63, площадь окружности: 314"
      );
    });
  });

  describe("Determine the roots of the quadratic equation", () => {
    it("Function does not return roots for the negative discriminant", () => {
      findEquationRoots(1, -5, 9);
      expect(console.log).toBeCalledWith("Корней нет.");
    });

    it("Function returns one root for the discriminant equal to zero", () => {
      findEquationRoots(1, -4, 4);
      expect(console.log).toBeCalledWith("Один корень: 2.");
    });

    it("Function returns two roots for a discriminant greater than zero", () => {
      findEquationRoots(1, 3, -4);
      expect(console.log).toBeCalledWith("Два корня: 1,  -4.");
    });
  });
});
