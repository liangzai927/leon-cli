<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <router-view />
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue';
import usePages from '@/hooks/usePages';
// import { testStore } from '@/store/test';

// const test = testStore();
// console.log('store实例:', test.userInfo);
// test.setUserInfo({
//   a: 123
// });
// console.log(test.userInfo);

const { pages } = usePages();

const { proxy } = getCurrentInstance();
onMounted(async () => {
  const res = await proxy.$api.test.test1(pages);
  console.log(res);
});
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
