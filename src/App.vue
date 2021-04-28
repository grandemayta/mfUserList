<template>
  <Header />
  <UserList />
  <Footer />
</template>

<script>
  import { defineAsyncComponent } from 'vue';
  import UserList from './pages/UserList';

  export default {
    name: 'App',
    components: {
      Header: defineAsyncComponent(() => import('mfVueShell/Header')),
      Footer: defineAsyncComponent(() => import('mfVueShell/Footer')),
      UserList
    }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>