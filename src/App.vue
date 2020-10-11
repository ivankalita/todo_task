<template>
    <div class="todo">
        <div class="todo-header">
        <img src="./assets/logo.png" class="todo-header__logo">
        <div class="todo-header__actions">
            <input type="checkbox" id="allCompletTasks" v-model="isShowAllDone">
            <label class="lbl" for="allCompletTasks">Показать все выполненные задачи</label>
        </div>
        </div>
        <div class="todo-body">
        <div class="todo-body__fixed">
            <input class="inp" type="text" placeholder="Придумай текст задачи" v-model="textNewItem" @keyup.enter="addNewItem">
            <div class="button button--add" @click="addNewItem">Добавить</div>
        </div>
        <ToDoList
            :list="isShowAllDone ? completedList : defaultList"
            @item-complete="itemComplete"
            @item-remove="itemRemove">
            <!-- Сюда можно передать своё видение на представление элемента списка дел.
                Если что у тебя есть ссылка на контекстное содержание элемента - toDoItem
                <template v-slot:default="toDoItem">
                    <li>
                        {{ toDoItem.text }}
                    </li>
                </template>
            -->
        </ToDoList>
        </div>
    </div>
</template>

<script>

import ToDoList from './components/ToDoList';

export default {
    name: 'App',
    data: () => ({
        isShowAllDone: false,
        textNewItem: '',
        defaultList: [
            {
                isDone: false,
                text: 'Стандартная задача для примера ради :)'
            }
        ],
        completedList: []
    }),
    components: {
        ToDoList
    },
    mounted() {
        if (window.localStorage.getItem('list')) {
            this.defaultList = JSON.parse(window.localStorage.getItem('list'))
            this.completedList = JSON.parse(window.localStorage.getItem('listCompleted'))
        }
    },
    methods: {
        addNewItem() {
            this.defaultList.push({
                isDone: false,
                text: this.textNewItem
            })

            window.localStorage.setItem('list', JSON.stringify(this.defaultList))

            this.textNewItem = '';
        },
        itemComplete(id) {
            this.defaultList[id].isDone = true;
            window.localStorage.setItem('list', JSON.stringify(this.defaultList))
            this.completedList.push(this.defaultList[id]);
            window.localStorage.setItem('listCompleted', JSON.stringify(this.completedList))
        },
        itemRemove(id) {
            this.defaultList = this.defaultList.filter((item, index) => index === id ? false : true)
            this.completedList = this.completedList.filter((item, index) => index === id ? false : true)
            window.localStorage.setItem('list', JSON.stringify(this.defaultList))
            window.localStorage.setItem('listCompleted', JSON.stringify(this.completedList))
        }
    }
}
</script>

<style lang="sass">
</style>
