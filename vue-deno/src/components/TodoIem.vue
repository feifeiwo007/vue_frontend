<template>
  <li>
    <slot name="preico" :avalue="testvalue"></slot>
    <span v-if="!del">{{title}}</span>
    <span v-else style="text-decoration: line-through">{{title}}</span>
    <slot name="endico"></slot>
    <button v-show="!del" @click="handleClick">delete</button>
  </li>
</template>
<script>
export default {
  props: {
    title: String,
    del: {
      type: Boolean,
      defalt: false,
    },
  },
  data: function () {
    return {
        testvalue: Math.random()
    };
  },
  methods: {
    /*handlClick 方法 在template 里面点击的时候就会调用*/
    handleClick() {
      console.log("click delete button")
      this.$emit("delete",this.title) /*抛出delete 事件 并且传递了一个title 的参数*/
    },
  },
}
</script>>