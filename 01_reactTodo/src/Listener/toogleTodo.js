const toogleTodo = (e) => {
  let node = ''
  if (e.target === e.currentTarget) {
    node = e.target
  } else {
    node = e.target.parentElement
  }
  const label = node.querySelector('label');
  const input = node.querySelector('input');

  
  label.classList.toggle('hidden')
  input.classList.toggle('hidden')
  input.focus()

}

export { toogleTodo} 