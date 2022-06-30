import { labelSelectEl } from '../../script.js';
import { clearOptionsExceptFirst } from '../abstract.js';

function generateLabelSelection(labelList) {
  const labelOptionEls = labelList.map((label) => makeOption(label));
  clearOptionsExceptFirst(labelSelectEl);
  labelOptionEls.splice(0, 1);
  labelSelectEl.append(...labelOptionEls);
  console.log(labelList);
}

function makeOption(label) {
  const labelOptionEl = document.createElement('option');
  labelOptionEl.textContent = label;
  return labelOptionEl;
}

export { generateLabelSelection };
