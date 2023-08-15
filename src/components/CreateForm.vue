<script setup>
const FORM_DEFAULT_VALUE = {
  inputContent: '',
  inputCategory: null,
};
import { computed, ref } from 'vue';
import { useTodoStore } from '../store';

const todosStore = useTodoStore();

const inputContent = ref(FORM_DEFAULT_VALUE.inputContent);
const inputCategory = ref(FORM_DEFAULT_VALUE.inputCategory);

const disabledButon = computed(() => {
  return !!inputContent.value && !!inputCategory.value;
});

const resetForm = () => {
  inputContent.value = FORM_DEFAULT_VALUE.inputContent;
  inputCategory.value = FORM_DEFAULT_VALUE.inputCategory;
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
  todosStore.ADD_TODO(todo);
  resetForm();
};
</script>

<template>
  <form @submit.prevent="addTodo">
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
