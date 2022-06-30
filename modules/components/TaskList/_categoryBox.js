import { setAttributes } from '../abstract.js';

export function catergoryBox() {
  //element
  const catergoryBox = document.createElement('div');
  //classes
  const twClasses = ['flex', 'flex-col'];
  catergoryBox.classList.add(...twClasses);

  return catergoryBox;
}
