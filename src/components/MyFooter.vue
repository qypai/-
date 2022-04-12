<template>
  <div class="todo-footer" v-show="Total">
    <label>
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ Total }}
    </span>
    <button class="btn btn-danger" @click="clear">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "checkAlltodo", "clearTodo"],
  computed: {
    Total() {
      return this.todos.length;
    },
    //   勾选后已完成数
    doneTotal() {
      return this.todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0);
      }, 0);
    },
    // 全选与取消全选
    isAll: {
      get() {
        return this.Total === this.doneTotal && this.Total > 0;
      },
      set(value) {
        this.checkAlltodo(value);
      },
    },
  },
  methods: {
    //   清除已完成任务
    clear() {
      this.clearTodo();
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>