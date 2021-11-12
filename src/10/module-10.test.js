import { isStringDate, isStringEmail, isStringPhoneNumber } from "./module-10";

describe("Homework #10", () => {
  describe("Check the entered date", () => {
    it("Function return true if the string is a valid date", () => {
      const testDates = ["22.11.2010", "11/12/1991", "12-01-2021"];
      testDates.forEach((element) => {
        expect(isStringDate(element)).toBeTruthy();
      });
    });

    it("Function return false if the string is a invalid date", () => {
      const invalidTestDates = [
        "2220.11.20",
        "1110/12/19",
        "12-01-21",
        "z102019",
        "11-11-11",
        "44.11.2010",
        "100/12/1991",
        "99-01-2021",
        "22.13.2010",
        "11/99/1991",
        "12-17-2021",
        "22.11.-2010",
        "11/12/-1991",
        "12-01--2021",
        "22.11-2010",
        "11.12/1991",
        "12-01.2021",
      ];
      invalidTestDates.forEach((element) => {
        expect(isStringDate(element)).toBeFalsy();
      });
    });
  });

  describe("Check the entered email", () => {
    it("Function return true if the string is a valid email", () => {
      const testEmails = [
        "rmarwan-rca-1993g@silnmy.com",
        "ftobi@vicceo.com",
        "oahmadt@noisemails.com",
        "ymohamed.altya@mobitivaisao.com",
        "ymohamed.altya@mobitivaisao.com",
        "dusmh@ombitao.com",
      ];
      testEmails.forEach((element) => {
        expect(isStringEmail(element)).toBeTruthy();
      });
    });

    it("Function return false if the string is a invalid email", () => {
      const invalidTestEmails = [
        "rmarwan-rca-1993g@silnmy.obitivaisao",
        "ftobi.@vicceo.com",
        "oahmadt-@noisemails.com",
        "ymohamed-.altya@mobitivaisao.com",
        "ymohamed.altya@?mobitivaisao.com",
        "dusmh@ombitao!.com",
      ];
      invalidTestEmails.forEach((element) => {
        expect(isStringEmail(element)).toBeFalsy();
      });
    });
  });

  describe("Check the entered phone number", () => {
    it("Function return true if the string is a valid phone number", () => {
      const testPhoneNumbers = [
        "555(136)067-92-14",
        "3(0240)981-32-22",
        "885(981)970-90-23",
        "6(28)374-18-73",
        "0(98)487-62-64",
        "5(597)000-53-79",
        "67(7727)014-78-64",
        "9(75)560-57-59",
        "54(22)045-65-60",
        "5(6766)169-86-55",
      ];
      testPhoneNumbers.forEach((element) => {
        expect(isStringPhoneNumber(element)).toBeTruthy();
      });
    });

    it("Function return false if the string is a invalid phone number", () => {
      const inValidTestPhoneNumbers = [
        "!555(136)067-92-14",
        "33333(0240)981-32-22",
        "885(98155)970-90-23",
        "6(28)3744-18-73",
        "0(98)487-623-64",
        "5(597)000-5-79",
        "67(7727)014-78-643",
        "9(75)560-57-1",
        "54(22)045-65f-60",
        "5(6766a)169-86-55",
      ];
      inValidTestPhoneNumbers.forEach((element) => {
        expect(isStringPhoneNumber(element)).toBeFalsy();
      });
    });
  });
});
