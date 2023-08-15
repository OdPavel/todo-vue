<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import CreateForm from './components/CreateForm.vue';
import TodoList from './components/TodoList.vue';
import { storeToRefs } from 'pinia';
import { useTodoStore } from './store';

const todosStore = useTodoStore();

// const { todos } = storeToRefs(todosStore);

// const addTodo = (todo) => {
//   todos.value.push(todo);
// };

// const removeTask = (todo) => {
//   todos.value = todos.value.filter((t) => t !== todo);
// };

// const editTask = (todo) => {
//   todos.value.find((task) => {
//     if (task === todo && task.done === false) {
//       task.disabled = !task.disabled;
//     }
//   });
// };

// watch(
//   todos,
//   (newVal) => {
//     localStorage.setItem('todos', JSON.stringify(newVal));
//   },
//   { deep: true },
// );

onMounted(() => {
  todosStore.GET_TODOS();
});
</script>

<template>
  <main class="app">
    <section class="create-todo">
      <h3>TODO LIST</h3>
      <CreateForm />
    </section>

    <section class="todo-list">
      <h3>Список задач</h3>
      <TodoList />
    </section>
  </main>
</template>
