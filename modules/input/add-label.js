import { labelSelectEl } from '../../script.js';
import { generateLabelSelection } from './label.js';

const addLabelFormEl = document.querySelector(
  `[data-id="data-add-label-form"]`
);

function handleAddLabel(e, labelList) {
  e.preventDefault();
  const addLabelInputEl = document.querySelector(
    `[data-id="data-add-label"]`
  ).value;

  if (
    addLabelInputEl &&
    !labelList.includes(addLabelInputEl) &&
    addLabelInputEl !== ''
  ) {
    labelList.push(addLabelInputEl);
    addLabelFormEl.reset();
    generateLabelSelection(labelList);
  } else {
    alert('Label is already present or input is empty');
    removeLabelFormEl.reset();
  }
}

export { addLabelFormEl, handleAddLabel };
// addLabelInputEl && labelList.includes(addLabelInputEl);
