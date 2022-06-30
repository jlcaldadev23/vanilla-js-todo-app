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
