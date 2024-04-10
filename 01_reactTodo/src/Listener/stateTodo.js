const stateTodo = (e) => {
  let node = ''
  if (e.target === e.currentTarget) {
    node = e.target
  } else {
    node = e.target.parentElement
  }
  const label = node.querySelector('label');
  const input = node.querySelector('input');

  label.classList.remove('hidden')
  input.classList.add('hidden')
}

export { stateTodo} 