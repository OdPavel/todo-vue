<script setup>
import { storeToRefs } from 'pinia';
import { useTodoStore } from '../store';
import TodoItem from './Todoitem.vue';

const store = useTodoStore();
const { todos } = storeToRefs(store);

const editTodo = (todo) => {
  store.EDIT_TODO(todo);
};
const removeTodo = (todo) => {
  store.REMOVE_TODO(todo);
};
</script>

<template>
  <div v-for="todo in todos" :key="todo.id" :class="`todo-item ${todo.done && 'done'}`">
    <TodoItem :todo="todo" @editTodo="editTodo(todo)" @removeTodo="removeTodo(todo)" />
  </div>
</template>
