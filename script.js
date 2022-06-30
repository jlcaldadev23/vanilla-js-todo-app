import { handleDate } from './modules/date.js';
import {
  handleRemoveLabel,
  removeLabelFormEl,
} from './modules/input/remove-label.js';
import { handleAddLabel, addLabelFormEl } from './modules/input/add-label.js';
import { handleInputForm, handleClickItem } from './modules/input/input.js';
import { populateItems } from './modules/output/tasks.js';

//DATE
handleDate();

//LABELS
export const labelList = ['general'];
export const labelSelectEl = document.querySelector(
  `[data-id="data-select-labels"]`
);
//ADD LABEL
addLabelFormEl.addEventListener('submit', (e) => handleAddLabel(e, labelList));
//REMOVE LABEL
removeLabelFormEl.addEventListener('submit', (e) =>
  handleRemoveLabel(e, labelList)
);
//ITEMS

export const archivedList = [];
export const itemList = [
  {
    id: 1,
    property: {
      title: 'test1',
      text: 'text1',
      label: 'general',
      isFinished: true,
      isArchived: false,
    },
  },
  {
    id: 2,
    property: {
      title: 'test2',
      text: 'text2',
      label: 'general',
      isFinished: false,
      isArchived: false,
    },
  },
];

export const inputFormEl = document.querySelector(
  `[data-id="data-input-form"]`
);

export const outputEl = document.querySelector(
  `[data-id="data-output-container"]`
);

inputFormEl.addEventListener('submit', (e) =>
  handleInputForm(e, itemList, labelList)
);

outputEl.addEventListener('click', (e) =>
  handleClickItem(e, itemList, labelList, archivedList)
);

populateItems(itemList, labelList);
