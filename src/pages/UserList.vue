<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      <h2>Name: {{user.name}}</h2>
      <h3>Email: {{user.email}}</h3>
      <h3>Phone: {{user.phone}}</h3>
      <h3>City:{{user.address.city}}</h3>
      <h3>Company: {{user.company.name}}</h3>
      <router-link :to="`/users/${user.id}`" class="button">
        Detail
      </router-link>
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
    display: block;
    background: #f8f8f8;
    margin-bottom: 20px;
    padding: 60px;
    border-radius: 6px;
    box-shadow: 3px 3px 3px #d0d0d0;
    border-bottom: 3px solid #e0e0e0;
  }

  ul li:first-child {
    margin-top: 20px;
  }

  h2 {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 10px;
  }

  .button {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    min-width: 100px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    color: #f0f0f0;
    background: blue;
    border-radius: 4px;
  }
</style>
