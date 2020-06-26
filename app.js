"use strict";
const storageKey = "toDoList";
const data = localStorage.getItem(storageKey);
let toDoList = data ? JSON.parse(data) : [];
const list = document.querySelector(".js-todo-list");
const form = document.getElementById("js-form");

render(toDoList);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("js-todo-input");
  const text = input.value.trim();
  if (text !== "") {
    addToDo(text);
    input.value = "";
    input.focus();
  }
  render(toDoList);
});

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("js-tick")) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
  if (event.target.classList.contains("js-delete-todo")) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteItem(itemKey);
  }
});

function addToDo(text) {
  const toDo = {
    id: Date.now(),
    text: text,
    check: false,
  };
  toDoList.push(toDo);
  localStorage.setItem(storageKey, JSON.stringify(toDoList));  //chuyển qua dạng string
}

function render(arr) {
  const newList = toDoList.map((toDo) => {
    return `<li class="todo-item ${toDo.check ? "done" : ""}" data-key="${
      toDo.id
    }">
        <input id="${toDo.id}" type="checkbox"/>
        <label for="${toDo.id}" class="tick js-tick"></label>
        <span>${toDo.text}</span>
        <button class="delete-todo js-delete-todo">
          <svg><use href="#delete-icon"></use></svg>
        </button>
        </li>`;
  });
  list.innerHTML = newList.join("");
}

function toggleDone(key) {
  const index = toDoList.findIndex((item) => item.id === Number(key));
  toDoList[index].check = !toDoList[index].check;
  localStorage.setItem(storageKey, JSON.stringify(toDoList));
  const item = document.querySelector(`[data-key='${key}']`);
  if (toDoList[index].check) {
    item.classList.add("done");
  } else {
    item.classList.remove("done");
  }
}

function deleteItem(key) {
  toDoList = toDoList.filter((item) => item.id !== Number(key));
  localStorage.setItem(storageKey, JSON.stringify(toDoList));
  const item = document.querySelector(`[data-key='${key}']`);
  item.remove();
}