<template>
    <ul class="todo-body__list">
        <slot name="default">
            <li class="task-item" v-for="(item, index) in list" :key="index" :class="{ 'task-item--done': item.isDone }">
                <div class="task-item__counter">{{ index + 1}}.</div>
                <div class="task-item__text">{{ item.text }}</div>
                <div class="button button--success" @click="$emit('item-complete', index)">Выполнена</div>
                <div class="button button--del" @click="$emit('item-remove', index)">Удалить</div>
            </li>
        </slot>
      </ul>
</template>

<script>
export default {
    props: {
        list: Array
    }
}
</script>