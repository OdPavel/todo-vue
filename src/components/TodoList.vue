<script setup>
const emit = defineEmits(['removeTask', 'editTask']);

const props = defineProps({
  todosASC: {
    type: Array,
    required: true,
  },
});

const removeTask = (todo) => {
  emit('removeTask', todo);
};

const editTask = (todo) => {
  emit('editTask', todo);
};
</script>

<template>
  <div v-for="todo in todosASC" :key="todo.id" :class="`todo-item ${todo.done && 'done'}`">
    <label>
      <input type="checkbox" v-model="todo.done" />
      <span :class="`bubble ${todo.category}`"></span>
    </label>
    <div class="todo-content">
      <input type="text" v-model="todo.content" :disabled="todo.disabled" />
    </div>
    <div class="actions">
      <button class="correct" @click="editTask(todo)">
        {{ todo.disabled ? 'Корректировать' : 'Сохранить' }}
      </button>
      <button class="delete" @click="removeTask(todo)">Удалить</button>
    </div>
  </div>
</template>
