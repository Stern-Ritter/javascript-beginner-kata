function addNote(noteList, noteText) {
  const item = document.createElement("li");
  const paragraph = document.createElement("p");
  paragraph.textContent = noteText;
  paragraph.classList.add("notepad__list__item");
  item.appendChild(paragraph);
  noteList.appendChild(item);
}

function clearInput(input) {
  const editedInput = input;
  editedInput.value = "";
}

export function createNotepad(div) {
  const list = document.createElement("ul");
  const input = document.createElement("input");
  const button = document.createElement("button");

  for (let i = 0; i < 3; i += 1) {
    addNote(list, `Параграф #${i + 1}.`);
  }

  list.classList.add("notepad__list");
  input.classList.add("notepad__text-input");
  button.classList.add("button", "notepad__add-btn");

  input.type = "text";
  input.placeholder = "Введите текст заметки.";
  button.type = "button";
  button.textContent = "Добавить";

  input.addEventListener("input", (event) => {
    if (event.target.value) {
      button.classList.add("button_show");
    } else {
      button.classList.remove("button_show");
    }
  });

  button.addEventListener("click", () => {
    const text = input.value;
    if (text) {
      const noteList = list.querySelectorAll(".notepad__list__item");
      if (noteList.length >= 5) {
        noteList[0].remove();
      }
      addNote(list, text);
      clearInput(input);
    }
  });

  div.appendChild(list);
  div.appendChild(input);
  div.appendChild(button);
}
