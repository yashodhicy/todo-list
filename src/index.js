import './style.css';

const todoListContainer = document.querySelector('.todolistbody');

const todosData = [
  {
    index: 1,
    description: 'Go shopping and buy new things',
    completed: true,
  },
  {
    index: 2,
    description: 'Read a book',
    completed: false,
  },
  {
    index: 3,
    description: 'Start a new job',
    completed: true,
  },
  {
    index: 4,
    description: 'Read news quickly',
    completed: false,
  },
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
