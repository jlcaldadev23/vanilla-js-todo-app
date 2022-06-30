export function clearOptionsExceptFirst(parentEl) {
  while (parentEl.childNodes.length > 2) {
    parentEl.removeChild(parentEl.lastChild);
  }
}
export function clearOptions(parentEl) {
  while (parentEl.childNodes.length > 0) {
    parentEl.removeChild(parentEl.lastChild);
  }
}

export function setAttributes(element, attributes) {
  Object.keys(attributes).forEach((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });
}
