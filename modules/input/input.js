import { inputFormEl, outputEl } from '../../script.js';
import { clearOptions } from '../abstract.js';
import { populateItems } from '../output/tasks.js';

export function handleInputForm(e, itemList, labelList) {
  e.preventDefault();
  const titleInput = document.querySelector(`[data-id="data-title"]`).value;
  const textInput = document.querySelector(`[data-id="data-text"]`).value;
  const labelInput = document.querySelector(
    `[data-id="data-select-labels"]`
  ).value;
  const logID = Date.now().toLocaleString();

  const titleList = itemList.map((item) => item.property.title);
  const textList = itemList.map((item) => item.property.text);
  const LabelList = itemList.map((item) => item.property.label);

  if (
    titleList.includes(titleInput) &&
    textList.includes(textInput) &&
    LabelList.includes(labelInput)
  ) {
    alert('Duplicate entry');
  } else if (!titleInput || !textInput) {
    alert('Empty entry');
  } else {
    const item = {
      id: logID,
      property: {
        title: titleInput,
        text: textInput,
        label: labelInput,
        isFinished: false,
        isArchived: false,
      },
    };
    itemList.push(item);
    console.log(itemList);
    populateItems(itemList, labelList);
    inputFormEl.reset();
  }
}

export function handleClickItem(e, itemList, labelList, archivedList) {
  if (e.target.matches('button')) {
    let itemId = e.target.closest('li').dataset.id;
    let itemIndex = itemList.findIndex((item) => item.id == itemId);
    const archivedItem = itemList.splice(itemIndex, 1);
    archivedItem[0].property.isArchived = true;
    archivedList.push(archivedItem);
    populateItems(itemList, labelList);
    console.log(archivedList);
  } else if (e.target.matches('input[type="checkbox"]')) {
    let itemId = e.target.closest('li').dataset.id;
    let itemIndex = itemList.findIndex((item) => item.id == itemId);
    itemList[itemIndex].property.isFinished = e.target.checked;
    populateItems(itemList, labelList);
  }

  return;
}
