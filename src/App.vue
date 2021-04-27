<template>
  <Header />
  <div class="container">
    <h1>mfUserDetail</h1>
  </div>
  
  <Footer />
</template>

<script>
  import { defineAsyncComponent } from 'vue';
  const Header = defineAsyncComponent(() => import('mfUserList/Header'));
  const Footer = defineAsyncComponent(() => import('mfUserList/Footer'));

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  min-width: 1024px;
  padding: 20px;
}
</style>