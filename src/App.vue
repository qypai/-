<template>
  <div>
    <body>
      <div id="root">
        <div class="todo-container">
          <div class="todo-wrap">
            <MyHeader :addTodo="addTodo"></MyHeader>
            <MyList
              :todos="todos"
              :checkTodo="checkTodo"
              :deletetodo="deletetodo"
            ></MyList>
            <MyFooter
              :todos="todos"
              :checkAlltodo="checkAlltodo"
              :clearTodo="clearTodo"
            ></MyFooter>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter";

export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    // 取消勾选todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 删除todo
    deletetodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    // 全选
    checkAlltodo(done) {
      this.todos.forEach((todo) => {
        if (done === true) todo.done = true;
        else todo.done = false;
      });
    },
    // 清除已完成任务
    clearTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>