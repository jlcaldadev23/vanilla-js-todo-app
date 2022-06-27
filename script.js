import { handleDate } from './modules/date.js';
import {
  handleRemoveLabel,
  removeLabelFormEl,
} from './modules/input/remove-label.js';
import { handleAddLabel, addLabelFormEl } from './modules/input/add-label.js';

//DATE
handleDate();

const labelList = [];
const labelSelectEl = document.querySelector(`[data-id="data-select-labels"]`);
export { labelSelectEl };

//ADD LABEL
addLabelFormEl.addEventListener('submit', (e) => handleAddLabel(e, labelList));
//REMOVE LABEL
removeLabelFormEl.addEventListener('submit', (e) =>
  handleRemoveLabel(e, labelList)
);
// console.log(removeLabelFormEl);
