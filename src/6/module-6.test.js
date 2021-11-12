import { diff, isWord, pow } from "./module-6";

describe("Homework #6", () => {
  describe("Find difference between the largest and the smallest number", () => {
    it("Function return correct value if firts number is greater than second", () => {
      const result = diff(10, -1);
      expect(result).toBe(11);
    });

    it("Function return correct value if second number is greater than first", () => {
      const result = diff(-2, 20);
      expect(result).toBe(22);
    });
  });

  describe("Determine whether a string consists of a single word", () => {
    it("Function return false if string contains more than one word", () => {
      const result = isWord("Два слова");
      expect(result).toBeFalsy();
    });

    it("Function return true if string contains only one word", () => {
      const result = isWord("Одно");
      expect(result).toBeTruthy();
    });
  });

  describe("Calculate degree of the number", () => {
    it("Function return correct value for zero power of a positive number", () => {
      const result = pow(2, 0);
      expect(result).toBe(1);
    });

    it(
      "Function return correct value" +
        "for positive power of a positive number",
      () => {
        const result = pow(2, 1);
        expect(result).toBe(2);
      }
    );

    it(
      "Function return correct value for" +
        "positive power(more than 1) of a positive number",
      () => {
        const result = pow(2, 3);
        expect(result).toBe(8);
      }
    );

    it(
      "Function return correct value for" +
        "positive power of a negative number",
      () => {
        const result = pow(-1, 1);
        expect(result).toBe(-1);
      }
    );

    it(
      "Function return correct value for" +
        "positive power(odd, more than 1) of a negative number",
      () => {
        const result = pow(-2, 3);
        expect(result).toBe(-8);
      }
    );

    it(
      "Function return correct value for" +
        "positive power(even, more than 1) of a negative number",
      () => {
        const result = pow(-2, 4);
        expect(result).toBe(16);
      }
    );

    it(
      "Function return correct value for" +
        "negative power of a positive number",
      () => {
        const result = pow(4, -1);
        expect(result).toBe(0.25);
      }
    );

    it(
      "Function return correct value for" +
        "negative power(more than 1) of a positive number",
      () => {
        const result = pow(4, -2);
        expect(result).toBe(0.0625);
      }
    );
  });
});
