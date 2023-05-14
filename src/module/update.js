const updateTodoStatus = (todosData, id, isChecked) => {
  if (isChecked) {
    todosData[id].completed = true;
    localStorage.setItem('todosData', JSON.stringify(todosData));
  }
};

module.exports = updateTodoStatus;
