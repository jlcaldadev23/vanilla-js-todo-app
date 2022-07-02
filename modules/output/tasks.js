import { setAttributes } from '../abstract.js';
import { outputEl } from '../../script.js';

export function populateItems(itemList, labelList) {
  const categoriesAllEl = labelList.map((label) => {
    const divEl = makeLabelBox();
    const labelEl = makeLabelHeader(label);
    const all = itemList.filter((item) => item.property.label === label);
    //ALL
    const allEl = makeStatusList(all, 'ALL');
    //PENDING
    const pending = all.filter((item) => item.property.isFinished === false);
    const pendingEl = makeStatusList(pending, 'PENDING');
    //FINISHED
    const finished = all.filter((item) => item.property.isFinished === true);
    const finishedEl = makeStatusList(finished, 'FINISHED');
    const divWrap = makeStatusBoxWrapper();
    divWrap.append(allEl, pendingEl, finishedEl);
    divEl.append(labelEl, divWrap);
    return divEl;
  });

  outputEl.replaceChildren();
  outputEl.append(...categoriesAllEl);
}

//LABEL BOX
function makeLabelBox() {
  //element
  const labelBox = document.createElement('div');
  //classes
  const containerClasses = ['flex', 'space-y-2'];
  const layoutClasses = [];
  const typographyClasses = [];
  const hoverClasses = [];
  const transitionClasses = [];
  const mediaClasses = [];
  const twClasses = [
    ...containerClasses,
    ...layoutClasses,
    ...typographyClasses,
    ...hoverClasses,
    ...transitionClasses,
    ...mediaClasses,
  ];
  labelBox.classList.add(...twClasses);
  //attributes
  const attributes = {};
  setAttributes(labelBox, attributes);
  //content
  //return
  return labelBox;
}

//LABEL HEADER
function makeLabelHeader(label) {
  //element
  const labelHeader = document.createElement('h2');
  //classes
  const containerClasses = [];
  const layoutClasses = ['border-b', 'text-right'];
  const typographyClasses = ['font-500', 'uppercase', 'text-2xl'];
  const hoverClasses = [];
  const transitionClasses = [];
  const mediaClasses = [];
  const twClasses = [
    ...containerClasses,
    ...layoutClasses,
    ...typographyClasses,
    ...hoverClasses,
    ...transitionClasses,
    ...mediaClasses,
  ];
  labelHeader.classList.add(...twClasses);
  //attributes
  const attributes = {};
  setAttributes(labelHeader, attributes);
  //content
  labelHeader.textContent = label;
  //return
  return labelHeader;
}

//WRAPPER
function makeStatusBoxWrapper() {
  //element
  const statusBoxWrapper = document.createElement('div');
  //classes
  const containerClasses = ['flex', 'space-x-2'];
  const layoutClasses = ['px-2'];
  const typographyClasses = [];
  const hoverClasses = [];
  const transitionClasses = [];
  const mediaClasses = [];
  const twClasses = [
    ...containerClasses,
    ...layoutClasses,
    ...typographyClasses,
    ...hoverClasses,
    ...transitionClasses,
    ...mediaClasses,
  ];
  statusBoxWrapper.classList.add(...twClasses);
  //attributes
  const attributes = {};
  setAttributes(statusBoxWrapper, attributes);
  //content
  //return
  return statusBoxWrapper;
}

function makeStatusList(itemList, label) {
  const statusBox = makeStatusBox();
  const statusHeader = makeStatusHeader(label);
  const statusList = document.createElement('ul');
  const taskList = itemList.map((item) => makeLiItem(item, itemList));
  statusList.append(...taskList);
  statusBox.append(statusHeader, statusList);
  return statusBox;
}

// function

// const containerClasses = [];
// const layoutClasses = [];
// const typographyClasses = [];
// const hoverClasses = [];
// const transitionClasses = [];
// const mediaClasses = [];
// const twClasses = [
//   ...containerClasses,
//   ...layoutClasses,
//   ...typographyClasses,
//   ...hoverClasses,
//   ...transitionClasses,
//   ...mediaClasses,
// ];

//CONTAINER OF EASH STATUS BOX
function makeStatusBox(label) {
  //
  //element
  const statusBox = document.createElement('div');
  //classes
  const containerClasses = ['flex', 'flex-col', 'gap-2', 'w-1/3'];
  const layoutClasses = [];
  const typographyClasses = [];
  const hoverClasses = [];
  const transitionClasses = [];
  const mediaClasses = [];
  const twClasses = [
    ...containerClasses,
    ...layoutClasses,
    ...typographyClasses,
    ...hoverClasses,
    ...transitionClasses,
    ...mediaClasses,
  ];
  statusBox.classList.add(...twClasses);
  //attributes
  const attributes = {};
  setAttributes(statusBox, attributes);
  //content
  //return
  return statusBox;
}

function makeStatusHeader(label) {
  //element
  const statusHeader = document.createElement('h2');
  //classes
  const containerClasses = [];
  const layoutClasses = ['py-2', 'pl-2', 'border-b', 'rounded'];
  const typographyClasses = ['text-md'];
  const hoverClasses = [];
  const transitionClasses = [];
  const mediaClasses = [];
  const twClasses = [
    ...containerClasses,
    ...layoutClasses,
    ...typographyClasses,
    ...hoverClasses,
    ...transitionClasses,
    ...mediaClasses,
  ];
  statusHeader.classList.add(...twClasses);
  //attributes
  const attributes = {};
  setAttributes(statusHeader, attributes);
  //content
  statusHeader.textContent = label;
  //return
  return statusHeader;
}

function makeLiItem(item, itemList) {
  const li = document.createElement('li');
  //attributes
  const attributes = {
    [`data-id`]: `${item.id}`,
  };
  setAttributes(li, attributes);

  const div = maketaskBox();
  const title = makeTitle(item);
  const checkbox = makeCheckBox(item);
  const text = makeTextArea(item);
  const button = makeButton(item, itemList);
  const container = makeContainer();
  container.append(checkbox, title, button);
  div.append(container, text);
  li.append(div);
  return li;
}

function makeContainer() {
  const divContainer = document.createElement('div');
  //classes
  const containerClasses = ['flex', 'justify-between'];
  const layoutClasses = [];
  const typographyClasses = [];
  const hoverClasses = [];
  const transitionClasses = [];
  const mediaClasses = [];
  const twClasses = [
    ...containerClasses,
    ...layoutClasses,
    ...typographyClasses,
    ...hoverClasses,
    ...transitionClasses,
    ...mediaClasses,
  ];
  divContainer.classList.add(...twClasses);
  //attributes
  const attributes = {};
  setAttributes(divContainer, attributes);
  //return
  return divContainer;
}

//WRAPPER OF EACH TASK
function maketaskBox() {
  //element
  const taskBox = document.createElement('div');
  //classes
  const containerClasses = [];
  const layoutClasses = ['bg-red-50', 'rounded'];
  const typographyClasses = [
    'border-b',
    'mb-2',
    'py-2',
    'align-center',
    'bg-red-50',
    'place-items-center',
  ];
  const mediaClasses = [];
  const twClasses = [
    ...typographyClasses,
    ...containerClasses,
    ...layoutClasses,
    ...mediaClasses,
  ];
  taskBox.classList.add(...twClasses);
  //attributes
  const attributes = {};
  setAttributes(taskBox, attributes);
  //return
  return taskBox;
}

//TITLE
function makeTitle(item) {
  //element
  const title = document.createElement('h3');
  //classes
  const typographyClasses = ['block', 'text-gray-700', 'text-sm'];
  const containerClasses = [];
  const layoutClasses = [];
  const mediaClasses = [];
  const twClasses = [
    ...typographyClasses,
    ...containerClasses,
    ...layoutClasses,
    ...mediaClasses,
  ];
  title.classList.add(...twClasses);
  //attributes
  const attributes = {};
  setAttributes(title, attributes);
  //content
  title.textContent = item.property.title;
  return title;
}

function makeCheckBox(item) {
  //element
  const checkbox = document.createElement('input');
  //classes
  //classes
  const containerClasses = ['block'];
  const layoutClasses = [];
  const typographyClasses = [];
  const hoverClasses = [];
  const transitionClasses = [];
  const mediaClasses = [];
  const twClasses = [
    ...containerClasses,
    ...layoutClasses,
    ...typographyClasses,
    ...hoverClasses,
    ...transitionClasses,
    ...mediaClasses,
  ];
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
  const textArea = document.createElement('textarea');
  //classes
  const containerClasses = ['flex-1', 'w-full'];
  const layoutClasses = ['bg-zinc-50', 'border-t', 'px-4'];
  const typographyClasses = [
    'text-gray-400',
    'text-sm',
    `${item.property.isFinished ? 'line-through' : 'no-underline'}`,
  ];
  const hoverClasses = ['focus:outline-none'];
  const transitionClasses = [];
  const mediaClasses = [];
  const twClasses = [
    ...containerClasses,
    ...layoutClasses,
    ...typographyClasses,
    ...hoverClasses,
    ...transitionClasses,
    ...mediaClasses,
  ];
  textArea.classList.add(...twClasses);
  //attributes
  const attributes = {};
  setAttributes(textArea, attributes);
  textArea.readOnly = true;
  //content
  textArea.textContent = item.property.text;
  return textArea;
}

function makeButton(item) {
  //element
  const removeButton = document.createElement('button');
  //classes
  const containerClasses = ['block'];
  const layoutClasses = [];
  const typographyClasses = [];
  const hoverClasses = [];
  const transitionClasses = [];
  const mediaClasses = [];
  const twClasses = [
    ...containerClasses,
    ...layoutClasses,
    ...typographyClasses,
    ...hoverClasses,
    ...transitionClasses,
    ...mediaClasses,
  ];
  removeButton.classList.add(...twClasses);
  //attributes
  const attributes = {
    type: 'button',
  };
  setAttributes(removeButton, attributes);
  removeButton.textContent = 'X';

  return removeButton;
}
