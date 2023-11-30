function setLocaleStorage(updatedTasks) {
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

export default setLocaleStorage;
