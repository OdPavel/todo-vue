<script setup>
defineEmits(['removeTodo', 'editTodo']);
const porops = defineProps({
  todo: {
    type: Object,
    requared: true,
  },
});
</script>

<template>
  <label>
    <input type="checkbox" v-model="todo.done" />
    <span :class="`bubble ${todo.category}`"></span>
  </label>
  <div class="todo-content">
    <input type="text" v-model="todo.content" :disabled="todo.disabled" />
  </div>
  <div class="actions">
    <button class="correct" @click="$emit('editTodo', todo)">
      {{ todo.disabled ? 'Корректировать' : 'Сохранить' }}
    </button>
    <button class="delete" @click="$emit('removeTodo', todo)">Удалить</button>
  </div>
</template>
