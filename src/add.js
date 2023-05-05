
const addTodoItem = (todos, description, loadTodos) => {
  let newTodo = {
    index: todos.length,
    description,
    completed: false,
  };
  todos.push(newTodo);
  console.log(todos);
  localStorage.setItem('todosData', JSON.stringify(todos));
  
};

module.exports = addTodoItem; 