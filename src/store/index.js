import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: [],
  }),
  getters: {},
  actions: {
    GET_TODOS() {
      const todos = JSON.parse(localStorage.getItem('todos')) || [];
      this.todos = todos;
    },
    ADD_TODO(todo) {
      this.todos.push(todo);
      this.updateStorage();
    },
    REMOVE_TODO(todo) {
      this.todos = this.todos.filter((t) => t !== todo);
      this.updateStorage();
    },
    EDIT_TODO(todo) {
      this.todos.find((task) => {
        if (task === todo && task.done === false) {
          task.disabled = !task.disabled;
        }
      });

      this.updateStorage();
    },

    updateStorage() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
  },
});
