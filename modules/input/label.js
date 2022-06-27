import { labelSelectEl } from '../../script.js';

function generateLabelSelection(labelList) {
  const labelOptionEls = labelList.map((label) => makeOption(label));
  clearOptions();
  labelSelectEl.append(...labelOptionEls);
}

function makeOption(label) {
  const labelOptionEl = document.createElement('option');
  labelOptionEl.textContent = label;
  return labelOptionEl;
}

function clearOptions() {
  while (labelSelectEl.childNodes.length > 2) {
    labelSelectEl.removeChild(labelSelectEl.lastChild);
  }
}
export { generateLabelSelection };
