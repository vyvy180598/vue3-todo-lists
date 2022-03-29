<template>
  <div>Hello From Vue 3</div>
  <button class="button is-primary is-rounded" @click="goToTodoList">
    Go to Todo List
  </button>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  name: 'Home',
  setup() {
    const router = useRouter();
    const goToTodoList = () => {
      router.push({ path: '/todo-list' });
    };
    return {
      goToTodoList,
    };
  },
};
</script>

<style></style>
