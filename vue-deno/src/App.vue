<template>
  <div id="app">
    <input v-model="message" />
    <!--v-model 语法糖 用来做双向绑定 即两边同时变化 本质上还是单向数据流-->
    <!--非简写形式 如下，v-model就是value 和input 结合起来的简写形式-->
    <input :value="message" @input="handlechange" />
    {{message}} {{message+ message}}
    <div v-bind:id="message"></div>
    <todo-list>
      <template v-slot>
        <!--这边默认是一个slot 的插槽 没有名字-->
        <todo-item
          @delete="handleDelete"
          v-for="item in list"
          :key="item.title"
          :title="item.title"
          :del="item.del"
        >
          <!-- 老版本2.5-->
          <!--<span slot="preico"> preico</span>
          <span slot="endico"> endico</span>-->
          <!-- 新版本 需要定义一个template 具名插槽-->
          <template v-slot:preico="{avalue}">
            <!-- 这边是一个作用域插槽 可以理解成返回组件的函数 返回的就是 testvalue-->
            <span>preico {{avalue}}</span>
          </template>
          <template v-slot:endico>
            <!--如果把这块删掉的话 就会使用默认插槽的内容-->
            <span>endico</span>
          </template>
        </todo-item>
      </template>
    </todo-list>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoItem from "./components/Todoitem.vue";

export default {
  name: "App",
  components: {
    /* 在app.vue 里面注册 todoitem 和 todolist ，不再是一个全局的需要唯一的 只在当前作用域里面生效*/
    TodoList,
    TodoItem,
  },
  data() {
    /* 这边的data 就是一个函数，不是一个对象*/
    return {
      message: "hello world",
      list: [
        {
          title: "class1",
          del: false,
        },
        {
          title: "class2",
          del: true,
        },
      ],
    };
  },
  methods: {
    handlechange(e) {
      this.message = e.target.value;
    },
    handleDelete(val) {
      console.log("handledelete", val);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
