<template>
  <div class="columns is-mobile">
    <div class="column is-half is-offset-one-quarter">
      <form class="box" @submit.prevent="addNewTodo">
        <div class="field">
          <label class="label has-text-left" for="todo">New todo: </label>
          <div class="control">
            <input
              class="input is-primary"
              type="text"
              placeholder="Please input new todo"
              v-model="state.newTodo"
            />
          </div>
        </div>
        <button class="button is-primary is-rounded">Add new todo</button>
      </form>
      <div class="buttons is-right">
        <button class="button is-success" @click="markAllDone">
          Mark all done
        </button>
        <button class="button is-danger" @click="removeAllTodo">
          Remove all todo
        </button>
      </div>

      <div class="block" v-for="(todo, index) in state.todos" :key="todo.id">
        <span
          class="notification column is-full"
          :class="{ 'is-warning': !todo.done }"
          @click="markTaskDone(todo)"
        >
          {{ todo.content }}
          <span class="tag is-success" style="float: left" v-if="todo.done"
            >Done</span
          >
          <button class="delete is-small" @click="removeTodo(index)"></button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      newTodo: '',
      todos: [],
    });

    function addNewTodo() {
      state.todos.push({
        id: new Date(),
        done: false,
        content: state.newTodo,
      });
      state.newTodo = '';
    }
    function markTaskDone(todo) {
      todo.done = !todo.done;
    }
    function removeTodo(index) {
      state.todos.splice(index, 1);
    }
    function markAllDone() {
      state.todos.forEach(todo => (todo.done = true));
    }
    function removeAllTodo() {
      state.todos = [];
    }

    return {
      state,
      addNewTodo,
      markTaskDone,
      removeTodo,
      markAllDone,
      removeAllTodo,
    };
  },
};
</script>

<style scoped></style>
