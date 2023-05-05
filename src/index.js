/* eslint-disable linebreak-style */
import _ from 'lodash';
import './style.css';

const addTodoItem = require('add');

const removeTodoItem = require('remove');

const todoListContainer = document.querySelector('.todolistbody');

const todosData = [
];
const loadTodos = () => {
  if (todosData.length > 0) {
    todosData.forEach((todo) => {
      const todoListItem = `<li class="todoListli"data-id="${todo.index}" data-completed="${todo.completed}">
        <label for="${todo.index}">
          <input type="checkbox" id="${todo.index}" value="${todo.id}"
          ${todo.completed === true ? 'checked' : ''} />
          <input class="listinput" type="text" value="${todo.description}" readonly />
        </label>
        <div class="action">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </li>`;
      todoListContainer.querySelector('.todolist').innerHTML += todoListItem;
    });
    const clear = document.createElement('li');
    clear.classList.add('clearCompleted');
    clear.innerText = 'Clear All Completed';
    todoListContainer.querySelector('.todolist').appendChild(clear);
  }
};

loadTodos();
