const removeTodoItem = (todos, index) => {
  todos.splice(index, 1);
  todos.forEach((todo, i) => {
    todo.index = i;
  });
  localStorage.setItem('todosData', JSON.stringify(todos));
};

module.exports = removeTodoItem;
