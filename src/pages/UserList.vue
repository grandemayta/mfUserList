<template>
  <ul>
    <li v-on:click="handleClick" v-for="user in users" :key="user.id">
      <a>
        <h2>Name: {{user.name}}</h2>
        <h3>Email: {{user.email}}</h3>
        <h3>Phone: {{user.phone}}</h3>
        <h3>City:{{user.address.city}}</h3>
        <h3>Company: {{user.company.name}}</h3>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      users: []
    }
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      this.users = await response.json();
    }
  }
}
</script>

<style scoped>
  ul {
    display: block;
    max-width: 600px;
    margin: 0 auto;
    list-style: none;
  }

  ul li {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f8f8;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 3px 3px 3px #d0d0d0;
    border-bottom: 3px solid #e0e0e0;
  }

  ul li:first-child {
    margin-top: 20px;
  }

  h2, h3 {
    margin-bottom: 14px;
  }
</style>
