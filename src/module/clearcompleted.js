const clearCompleted = (todosData) => {
  const newTodosData = todosData.filter((todo) => !todo.completed);
  localStorage.setItem('todosData', JSON.stringify(newTodosData));
};

module.exports = clearCompleted;