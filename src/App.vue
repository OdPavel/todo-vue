<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import CreateForm from './components/CreateForm.vue';
import TodoList from './components/TodoList.vue';

const todos = ref([]);

const todosASC = computed(() =>
  todos.value.sort((a, b) => {
    return b.createdAt - a.createdAt;
  }),
);

const addTodo = (todo) => {
  todos.value.push(todo);
};

const removeTask = (todo) => {
  todos.value = todos.value.filter((t) => t !== todo);
};

const editTask = (todo) => {
  todos.value.find((task) => {
    if (task === todo && task.done === false) {
      task.disabled = !task.disabled;
    }
  });
};

watch(
  todos,
  (newVal) => {
    localStorage.setItem('todos', JSON.stringify(newVal));
  },
  { deep: true },
);

onMounted(() => {
  todos.value = JSON.parse(localStorage.getItem('todos')) || [];
});
</script>

<template>
  <main class="app">
    <section class="create-todo">
      <h3>TODO LIST</h3>
      <CreateForm @addTodo="addTodo" />
    </section>

    <section class="todo-list">
      <h3>Список задач</h3>
      <TodoList :todosASC="todosASC" @removeTask="removeTask" @editTask="editTask" />
    </section>
  </main>
</template>
