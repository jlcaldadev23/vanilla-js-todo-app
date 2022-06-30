function makeButton(item) {
  //element
  const buttonOnLiEl = document.createElement('button');
  //classes
  const twClasses = [
    'bg-rose-200',
    'p-1',
    'rounded',
    'hover:bg-rose-300',
    'row-start-1',
    'col-start-5',
    'flex-auto',
    'w-1/2',
  ];
  buttonOnLiEl.classList.add(...twClasses);
  //attributes
  const attributes = {
    type: 'button',
  };
  setAttributes(buttonOnLiEl, attributes);
  buttonOnLiEl.textContent = '❌';

  return buttonOnLiEl;
}
