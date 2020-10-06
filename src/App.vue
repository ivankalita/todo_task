<template>
  <div class="todo">
    <div class="todo-header">
      <div class="todo-header__logo">
        <img src="./assets/logo.png">
      </div>
      <div class="todo-header__actions">
        <input type="checkbox" id="allCompletTasks">
        <label for="allCompletTasks">Показать все выполненные задачи</label>
      </div>
    </div>
    <div class="todo-body">
      <div class="todo-body__fixed">
        <input type="text" placeholder="Придумай текст задачи">
        <button>Добавить</button>
      </div>
      <ul class="todo-body__list">
        <li class="task-item">
          <div class="task-item__text">Task 1</div>
          <button class="button button-success">Выполнена</button>
          <button class="button button--del">Удалить</button>
        </li>
        <li class="task-item">
          <div class="task-item__text">Task 2</div>
          <button class="button button-success">Выполнена</button>
          <button class="button button--del">Удалить</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="sass">
</style>
