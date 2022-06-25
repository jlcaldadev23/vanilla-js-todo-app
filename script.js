const addTodoForm = document.querySelector(`[name="todo--form"]`);
const todoList = document.querySelector('.todo--list');
const todos = [
  { text: 'test 1', finished: true },
  { text: 'test 2', finished: false },
];
const labels = [];

// function getLabel() {}

function initializeList(todos, todoList) {
  const todoItems = todos.map((item, i) => {
    newItem = makeTodoItem(item, i);
    return newItem;
  });

  todoList.append(...todoItems);
  return todoList;
}

function handleSubmit(e) {
  e.preventDefault();
  const text = this.querySelector(`[name="todo--input"]`).value;

  let todosTexts = todos.map((todo) => todo.text);

  console.log(todosTexts);
  const item = {
    text: text,
    finished: false,
  };

  console.log('todosTexts', todosTexts);

  if (text && !todosTexts.includes(text)) {
    todos.push(item);
    addTodoForm.reset();
    const newItem = makeTodoItem(item, todos.indexOf(item));
    todoList.append(newItem);
  } else if (!text || todosTexts.includes(text)) {
    alert('Input is duplicate or empty');
    return;
  }
}

//TODO ITEM

function makeOutput(item, i) {
  const newOutput = document.createElement('input');
  const attributes = {
    type: 'text',
    name: 'output',
    value: item.text,
  };

  const twClasses = [
    'text-md',
    `${item.finished ? 'line-through' : 'no-underline'}`,
  ];
  newOutput.classList.add(...twClasses);
  setAttributes(newOutput, attributes);
  newOutput.value = item.text;
  return newOutput;
}

function makeTodoItem(item, i) {
  const newLi = document.createElement('li');
  const attributes = {
    ['data-index']: `${i}`,
  };
  setAttributes(newLi, attributes);

  const twClasses = [`${item.finished ? 'line-through' : ''}`, 'p-2'];
  newLi.classList.add(twClasses);

  const checkBox = makeCheckbox(item, i);
  const newOutput = makeOutput(item, i);
  const removeBtn = makeRemoveBtn(item, i);
  //   newOutput.appendChild(todoTextNode);
  newLi.appendChild(checkBox);
  newLi.appendChild(newOutput);
  newLi.appendChild(removeBtn);
  return newLi;
}

function makeSpan() {}

//CHECKBOX
function handleCheck(i) {
  const itemIsFinished = !todos[i].finished;
  todos[i].finished = itemIsFinished;
  console.log(todos[i].finished);
  checkedLi = document.querySelector(`[data-index="${i}"] [type="text"]`);
  console.log(checkedLi);
  if (itemIsFinished) {
    checkedLi.classList.remove(`no-underline`);
    checkedLi.classList.add(`line-through`);
  } else {
    checkedLi.classList.remove(`line-through`);
  }
}

function makeCheckbox(item, i) {
  const checkbox = document.createElement('input');

  const attributes = {
    type: 'checkbox',
    name: 'checkbox',
    ['onchange']: `handleCheck(${i})`,
  };
  setAttributes(checkbox, attributes);

  const twClasses = ['p-2', 'bg-lime-200'];
  checkbox.classList.add(...twClasses);

  const isChecked = item.finished;
  checkbox.checked = isChecked;

  return checkbox;
}

//REMOVE BUTTON

function handleRemove(i) {
  todos.splice(i, 1);
  checkedLi = document.querySelector(`[data-index="${i}"]`);
  checkedLi.remove();
}

function makeRemoveBtn(item, i) {
  const removeBtn = document.createElement('button');

  const attributes = {
    name: 'button',
    ['onclick']: `handleRemove(${i})`,
  };
  setAttributes(removeBtn, attributes);

  const twClasses = ['p-4', 'bg-slate-300'];
  removeBtn.classList.add(...twClasses);

  removeBtn.textContent = 'X';
  //   removeBtn.addEventListener('click', handleRemove(i));
  return removeBtn;
}

addTodoForm.addEventListener('submit', handleSubmit);

//ABSTRACTIONS
//SETTING ATTRIBUTES FROM VIA OBJECT
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });
}

initializeList(todos, todoList);
