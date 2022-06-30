import { labelSelectEl } from '../../script.js';
import { generateLabelSelection } from './label.js';

const removeLabelFormEl = document.querySelector(
  `[data-id="data-remove-label-form"]`
);

function handleRemoveLabel(e, labelList) {
  e.preventDefault();

  const removeLabelInputEl = document.querySelector(
    `[data-id="data-remove-label"]`
  ).value;

  if (
    removeLabelInputEl &&
    labelList.includes(removeLabelInputEl) &&
    removeLabelInputEl !== ''
  ) {
    labelList.splice(labelList.indexOf(removeLabelInputEl), 1);
    removeLabelFormEl.reset();
    generateLabelSelection(labelList);
  } else {
    alert('Label is not present');
    removeLabelFormEl.reset();
  }
}

export { handleRemoveLabel, removeLabelFormEl };
// (removeLabelInputEl && !labelList.includes(removeLabelInputEl))
