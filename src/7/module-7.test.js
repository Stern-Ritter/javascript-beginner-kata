import { createNotepad } from "./module-7";

let container;
const maxNoteListLength = 5;

describe("Homework #7", () => {
  beforeEach(() => {
    container = document.createElement("div");
  });

  it("By default, the button is hidden", () => {
    createNotepad(container);
    const button = container.querySelector(".notepad__add-btn");
    expect(button.classList.contains("button_show")).toBeFalsy();
  });

  it("If value is entered in the input field, the button is displayed", () => {
    createNotepad(container);
    const input = container.querySelector(".notepad__text-input");
    const button = container.querySelector(".notepad__add-btn");
    input.value = "Введено значение";
    const event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });
    input.dispatchEvent(event);
    expect(button.classList.contains("button_show")).toBeTruthy();
  });

  it("If empty value is entered in the input field, the button is hidden", () => {
    createNotepad(container);
    const input = container.querySelector(".notepad__text-input");
    const button = container.querySelector(".notepad__add-btn");
    input.value = "";
    const event = new Event("input", {
      bubbles: true,
      cancelable: true,
    });
    input.dispatchEvent(event);
    expect(button.classList.contains("button_show")).toBeFalsy();
  });

  it("On button click, a new paragraph is added to the list", () => {
    createNotepad(container);
    const input = container.querySelector(".notepad__text-input");
    const listItems = container.querySelectorAll(".notepad__list__item");
    const button = container.querySelector(".notepad__add-btn");
    const text = "Текст нового абзаца";
    input.value = text;
    button.click();
    const listItemsAfterAdd = container.querySelectorAll(
      ".notepad__list__item"
    );
    const initialLength = listItems.length;
    const finalLength = listItemsAfterAdd.length;
    expect(finalLength).toBe(initialLength + 1);
  });

  it("The text of the new paragraph is equal to the text entered in the field", () => {
    createNotepad(container);
    const input = container.querySelector(".notepad__text-input");
    const button = container.querySelector(".notepad__add-btn");
    const text = "Текст нового абзаца";
    input.value = text;
    button.click();
    const listItemsAfterAdd = container.querySelectorAll(
      ".notepad__list__item"
    );
    const finalLength = listItemsAfterAdd.length;
    expect(listItemsAfterAdd[finalLength - 1].textContent).toBe(text);
  });

  it("The number of paragraphs cannot be more than the set value", () => {
    createNotepad(container);
    const input = container.querySelector(".notepad__text-input");
    const button = container.querySelector(".notepad__add-btn");
    const inputArray = [
      "Текст нового абзаца #1",
      "Текст нового абзаца #2",
      "Текст нового абзаца #3",
      "Текст нового абзаца #4",
      "Текст нового абзаца #5",
      "Текст нового абзаца #6",
      "Текст нового абзаца #7",
    ];
    inputArray.forEach((element) => {
      input.value = element;
      button.click();
    });

    const listItemsAfterAdd = container.querySelectorAll(
      ".notepad__list__item"
    );
    expect(listItemsAfterAdd.length).toBe(maxNoteListLength);
  });

  it("При добавлении новых параграфов остаются только последние", () => {
    createNotepad(container);
    const input = container.querySelector(".notepad__text-input");
    const button = container.querySelector(".notepad__add-btn");
    const inputArray = [
      "Текст нового абзаца #1",
      "Текст нового абзаца #2",
      "Текст нового абзаца #3",
      "Текст нового абзаца #4",
      "Текст нового абзаца #5",
      "Текст нового абзаца #6",
      "Текст нового абзаца #7",
    ];
    inputArray.forEach((element) => {
      input.value = element;
      button.click();
    });

    const listItemsAfterAdd = container.querySelectorAll(
      ".notepad__list__item"
    );
    const start = inputArray.length - maxNoteListLength;
    for (let i = start; i < inputArray.length; i += 1) {
      expect(listItemsAfterAdd[i - start].textContent).toBe(inputArray[i]);
    }
  });

  it(
    "On button click whith empty input field, the new paragraph is not added:" +
      "the count of paragraphs hasn`t been changed",
    () => {
      createNotepad(container);
      const input = container.querySelector(".notepad__text-input");
      const listItems = container.querySelectorAll(".notepad__list__item");
      const button = container.querySelector(".notepad__add-btn");
      input.value = "";
      button.click();
      const listItemsAfterAdd = container.querySelectorAll(
        ".notepad__list__item"
      );
      const initialLength = listItems.length;
      const finalLength = listItemsAfterAdd.length;
      expect(initialLength).toBe(finalLength);
    }
  );

  it(
    "On button click whith empty input field, the new paragraph is not added:" +
      "the text of the last paragraph hasn`t been changed",
    () => {
      createNotepad(container);
      const input = container.querySelector(".notepad__text-input");
      const listItems = container.querySelectorAll(".notepad__list__item");
      const button = container.querySelector(".notepad__add-btn");
      input.value = "";
      button.click();
      const listItemsAfterAdd = container.querySelectorAll(
        ".notepad__list__item"
      );
      const lastItemValueBeforeAdd =
        listItems[listItems.length - 1].textContent;
      const lastItemValueAfterAdd =
        listItemsAfterAdd[listItemsAfterAdd.length - 1].textContent;
      expect(lastItemValueBeforeAdd).toBe(lastItemValueAfterAdd);
    }
  );
});
