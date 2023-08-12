<script setup>
import { computed, ref } from 'vue';

const emit = defineEmits(['addTodo']);

const inputContent = ref('');
const inputCategory = ref(null);

const disabledButon = computed(() => {
  let done = false;
  done = inputContent && inputCategory;
  return done;
});

const resetForm = () => {
  inputContent.value = '';
  inputCategory.value = null;
};

const addTodo = () => {
  if (inputContent.value.trim() === '' || inputCategory.value === null) {
    return;
  }

  const todo = {
    content: inputContent.value,
    category: inputCategory.value,
    done: false,
    disabled: true,
    id: new Date().getTime(),
  };

  emit('addTodo', todo);

  resetForm();
};
</script>

<template>
  <form @submit.prevent="addTodo">
    <h4></h4>
    <input type="text" placeholder="Введите вашу задачу" v-model="inputContent" />
    <h4>Выберите категорию</h4>
    <div class="options">
      <label>
        <input type="radio" name="category" value="business" v-model="inputCategory" />
        <span class="bubble business"></span>
        <div>По работе</div>
      </label>
      <label>
        <input type="radio" name="category" value="personal" v-model="inputCategory" />
        <span class="bubble personal"></span>
        <div>Личная</div>
      </label>
    </div>
    <input type="submit" value="Добавить Задачу" :disabled="!disabledButon" />
  </form>
</template>
