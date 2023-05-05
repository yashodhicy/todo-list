/* eslint-disable linebreak-style */
import './style.css';

const addTodoItem = require('./module/add.js');

const removeTodoItem = require('./module/remove.js');

const updateTodoStatus = require('./module/update.js');

const Clearcomplete = require('./module/clearcompleted.js');

const todoListContainer = document.querySelector('.todolistbody');

const todosData = JSON.parse(localStorage.getItem('todosData')) || [];

const loadTodos = () => {
  if (todosData.length > 0) {
    todosData.forEach((todo) => {
      const todoListItem = document.createElement('li');
      todoListItem.classList.add('todoListli');
      todoListItem.setAttribute('data-id', todo.index);
      todoListItem.setAttribute('data-completed', todo.completed);

      const label = document.createElement('label');
      label.setAttribute('for', todo.index);

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('id', todo.index);
      checkbox.setAttribute('value', todo.id);
      checkbox.setAttribute('class', 'checkboxinput');
      if (todo.completed) {
        checkbox.setAttribute('checked', '');
      }

      const textInput = document.createElement('input');
      textInput.setAttribute('class', 'listinput');
      textInput.setAttribute('type', 'text');
      textInput.setAttribute('value', todo.description);
      textInput.setAttribute('readonly', '');

      label.appendChild(checkbox);
      label.appendChild(textInput);

      const actionDiv = document.createElement('div');
      actionDiv.classList.add('action');

      const dot1 = document.createElement('span');
      dot1.classList.add('dot');

      const dot2 = document.createElement('span');
      dot2.classList.add('dot');

      const dot3 = document.createElement('span');
      dot3.classList.add('dot');

      actionDiv.appendChild(dot1);
      actionDiv.appendChild(dot2);
      actionDiv.appendChild(dot3);

      todoListItem.appendChild(label);
      todoListItem.appendChild(actionDiv);

      todoListContainer.querySelector('.todolist').appendChild(todoListItem);

      checkbox.addEventListener('change', () => {
        const isChecked = checkbox.checked;
        const itemId = checkbox.id;
        updateTodoStatus(todosData, itemId, isChecked);
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      });

      // add event listener to the action div
      actionDiv.addEventListener('click', (event) => {
        // add delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('delete');
        event.currentTarget.parentElement.appendChild(deleteButton);

        // add edit button
        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.classList.add('editbut');
        event.currentTarget.parentElement.appendChild(editButton);

        // remove the action div
        event.currentTarget.remove();

        editButton.addEventListener('click', () => {
          const li = editButton.closest('li');
          const textInput = li.querySelector('.listinput');
          if (textInput.hasAttribute('readonly')) {
            textInput.removeAttribute('readonly');
            editButton.innerHTML = 'Save';
          } else {
            const newValue = textInput.value;
            const todoIndex = todosData.findIndex((item) => item.index === todo.index);
            todosData[todoIndex].description = newValue;
            textInput.setAttribute('readonly', '');
            editButton.innerHTML = 'Edit';
            localStorage.setItem('todosData', JSON.stringify(todosData));
          }
        });
      });
    });
    const clear = document.createElement('button');
    clear.classList.add('clearCompleted');
    clear.innerText = 'Clear All Completed';
    todoListContainer.querySelector('.todolist').appendChild(clear);

    clear.addEventListener('click', () => {
      Clearcomplete(todosData);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    });
  }
};

// add a todo task
const newTaskInput = document.querySelector('#addlistitem');

newTaskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const newTask = newTaskInput.value.trim();
    if (newTask !== '') {
      addTodoItem(todosData, newTask, loadTodos);
      newTaskInput.value = '';
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
  }
});

// delete a todo task
todoListContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
    const itemId = event.target.dataset.id;
    const itemIndex = todosData.findIndex((item) => item.id === itemId);
    removeTodoItem(todosData, itemIndex);
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }
});

window.addEventListener('load', () => {
  const savedTodosData = JSON.parse(localStorage.getItem('todosData'));
  if (savedTodosData) {
    loadTodos();
  }
});
