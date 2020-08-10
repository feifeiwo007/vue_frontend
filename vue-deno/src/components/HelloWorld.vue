<template>
  <div id="app">
    <router-link to="/register">Go to Foo</router-link>
    <br />
    <router-link to="/login">Go to login</router-link>
    <br />
    <button @click="$router.push('login')">Go to Foo</button>

  </div>
</template>

<script>
export default {
  computed: {
    routerInfo() {
      const { fullPath, path, name, params, query, meta } = this.$route;
      return {
        fullPath,
        path,
        name,
        params,
        query,
        meta,
      };
    },
  },
};
</script>