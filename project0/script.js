const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const node = document.createElement('li')

  const checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  checkbox.onclick = function() {
    if (this.checked) {
      incrementCheckedTodo()
    } else {
      decrementCheckedTodo()
    }
  }
  node.appendChild(checkbox)

  const textnode = document.createTextNode('New todo ' + new Date())
  node.appendChild(textnode)

  const button = document.createElement('button')
  button.innerHTML = 'Delete'
  button.onclick = function() {
    if (this.previousSibling.previousSibling.checked) {
      decrementCheckedTodo()
    }
    itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) - 1
    this.parentNode.parentNode.removeChild(this.parentNode)
  }
  node.appendChild(button)

  list.appendChild(node)
  itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) + 1  
}

function incrementCheckedTodo() {
  uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) + 1
}

function decrementCheckedTodo() {
  uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) - 1
}