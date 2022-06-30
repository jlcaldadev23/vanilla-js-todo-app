import { setAttributes } from '../abstract.js';
import { outputEl } from '../../script.js';

export function populateItems(itemList, labelList) {
  const categoriesAllEl = labelList.map((label) => {
    const divHeaderEl = document.createElement('div');
    divHeaderEl.textContent = label;
    const divContEl = document.createElement('div');
    divContEl.classList.add('flex', 'gap-4', 'pt-4', 'px-2');

    const allItems = itemList.filter((item) => item.property.label === label);
    const allItemEl = generateTodoList(allItems, 'ALL');
    const pendingItems = allItems.filter(
      (item) => item.property.isFinished === false
    );
    const pendingItemEl = generateTodoList(pendingItems, 'PENDING');
    const finishedItems = allItems.filter(
      (item) => item.property.isFinished === true
    );
    const finishedItemEl = generateTodoList(finishedItems, 'FINISHED');
    divContEl.append(allItemEl, pendingItemEl, finishedItemEl);
    divHeaderEl.append(divContEl);
    return divHeaderEl;
  }, 1);

  outputEl.replaceChildren();
  outputEl.append(...categoriesAllEl);
}

function makeWrapper() {
  const wrapper = document.createElement('div');
}

function generateTodoList(itemList, label) {
  const divContEl = makeContainer(label);
  const ulEl = document.createElement('ul');
  const liEls = itemList.map((item) => makeLiItem(item, itemList));
  ulEl.append(...liEls);
  divContEl.append(ulEl);
  return divContEl;
}

function makeContainer(label) {
  const divContainer = document.createElement('div');
  divContainer.classList.add('flex', 'flex-col', 'gap-4', 'w-1/3');
  //HEADER
  const divHeader = document.createElement('h2');
  const divHeaderClasses = [
    'mb-4',
    'text-md',
    'font-bold',
    'text-center',
    'bg-amber-50',
    'py-2',
    'rounded',
  ];
  divHeader.classList.add(...divHeaderClasses);

  divHeader.textContent = label;
  divContainer.appendChild(divHeader);
  return divContainer;
}

function makeLiItem(item, itemList) {
  const li = document.createElement('li');
  //attributes
  const attributes = {
    [`data-id`]: `${item.id}`,
  };
  setAttributes(li, attributes);
  //

  const div = document.createElement('div');
  div.classList.add(
    'grid',
    'grid-cols-5',
    'grid-rows-2',
    'gap-2',
    'border-b',
    'mb-2',
    'py-2',
    'align-center',
    'bg-zinc-50',
    'justify-center',
    'content-center'
  );
  const title = makeTitle(item);
  const checkbox = makeCheckBox(item);
  const text = makeTextArea(item);
  const button = makeButton(item, itemList);
  div.append(title, checkbox, text, button);
  li.append(div);
  return li;
}

function makeTitle(item) {
  //element
  const title = document.createElement('h3');
  //classes
  const twClasses = [
    'font-bold',
    'text-gray-700',
    'mb-2',
    'col-start-2',
    'col-span-3',
    'flex',
    'justify-center',
    'content-center',
  ];
  title.classList.add(...twClasses);
  //attributes
  title.textContent = item.property.title;
  return title;
}

function makeCheckBox(item) {
  //element
  const checkbox = document.createElement('input');
  //classes
  const twClasses = ['row-start-1', 'p-2', 'w-1/3'];
  checkbox.classList.add(...twClasses);
  //attributes
  const attributes = {
    type: 'checkbox',
    name: 'output',
  };
  setAttributes(checkbox, attributes);
  checkbox.checked = item.property.isFinished;
  return checkbox;
}

function makeTextArea(item) {
  //element
  const textAreaOnLiEl = document.createElement('textarea');
  //classes
  const twClasses = [
    'bg-zinc-50',
    'focus:outline-none',
    'row-start-2',
    'col-span-5',
    'border-t',
    `${item.property.isFinished ? 'line-through' : 'no-underline'}`,
  ];
  textAreaOnLiEl.classList.add(...twClasses);
  //attributes
  const attributes = {};
  setAttributes(textAreaOnLiEl, attributes);
  textAreaOnLiEl.readOnly = true;
  textAreaOnLiEl.textContent = item.property.text;
  return textAreaOnLiEl;
}

function makeButton(item) {
  //element
  const buttonOnLiEl = document.createElement('button');
  //classes
  const twClasses = [
    'bg-rose-200',
    'p-1',
    'rounded',
    'hover:bg-rose-300',
    'row-start-1',
    'col-start-5',
    'flex-auto',
    'w-1/2',
  ];
  buttonOnLiEl.classList.add(...twClasses);
  //attributes
  const attributes = {
    type: 'button',
  };
  setAttributes(buttonOnLiEl, attributes);
  buttonOnLiEl.textContent = '❌';

  return buttonOnLiEl;
}
