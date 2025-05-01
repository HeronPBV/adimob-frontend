<template>
  <header class="header">
    <div class="logo">
      <h1>Dashboard</h1>
    </div>
    <nav class="nav">
      <ul>
        <li><ThemeToggle /></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: #ecf0f1;
}

.logo h1 {
  margin: 0;
  font-size: 1.5rem;
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.nav a {
  text-decoration: none;
  color: #ecf0f1;
  font-weight: bold;
}

.nav a:hover {
  color: #3498db;
}
</style>
