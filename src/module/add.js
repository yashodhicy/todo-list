const addTodoItem = (todos, description) => {
  const newTodo = {
    index: todos.length,
    description,
    completed: false,
  };
  todos.push(newTodo);
  localStorage.setItem('todosData', JSON.stringify(todos));
};

module.exports = addTodoItem;