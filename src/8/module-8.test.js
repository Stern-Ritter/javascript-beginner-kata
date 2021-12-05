import { showDayOfWeek, countMinutes, findYoungerUser } from "./module-8";

let originalConsolelog;

describe("Homework #8", () => {
  beforeEach(() => {
    originalConsolelog = console.log;
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = originalConsolelog;
  });

  describe("Show day of the week for date", () => {
    it("Function return correct value for correct inputs", () => {
      const testDates = [
        ["02.08.2021", "Понедельник"],
        ["03.08.2021", "Вторник"],
        ["04.08.2021", "Среда"],
        ["05.08.2021", "Четверг"],
        ["06.08.2021", "Пятница"],
        ["07.08.2021", "Суббота"],
        ["08.08.2021", "Воскресенье"],
      ];
      testDates.forEach((date) => {
        jest.spyOn(window, "prompt").mockReturnValue(String(date[0]));
        showDayOfWeek();
        expect(console.log).toBeCalledWith(date[1]);
      });
    });

    it("Function return correct value for invalid inputs", () => {
      const invalidDates = [
        "12-10-2019",
        "09/03/2011",
        "invalid",
        "ffx00",
        "-1",
      ];
      invalidDates.forEach((date) => {
        jest.spyOn(window, "prompt").mockReturnValue(String(date));
        showDayOfWeek();
        expect(console.log).toBeCalledWith("Некорректное значение");
      });
    });
  });

  describe("Count minutes since beginning of current day", () => {
    beforeEach(() => {
      jest.useFakeTimers("modern");
      jest.setSystemTime(new Date(2021, 8, 10, 14, 57));
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it("Function return correct value", () => {
      countMinutes();
      expect(console.log).toBeCalledWith("Прошло 897 минут.");
    });
  });

  describe("Identify a younger user", () => {
    it("Function return correct value if first user is younger then second", () => {
      findYoungerUser("27.04.1992", "26.04.1992");
      expect(console.log).toBeCalledWith("Первый моложе второго.");
    });

    it("Function return correct value if second user is younger then first", () => {
      findYoungerUser("13.10.1991", "12.01.1992");
      expect(console.log).toBeCalledWith("Второй моложе первого.");
    });

    it("Function return correct value if users are of the same age", () => {
      findYoungerUser("12.12.1995", "12.12.1995");
      expect(console.log).toBeCalledWith("Первый и второй одного возраста.");
    });
  });
});
