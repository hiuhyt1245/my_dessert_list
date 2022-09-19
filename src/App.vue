<template>
  <nav>
    <router-link to="/">My List</router-link> |
    <router-link to="/add">Add </router-link>
  </nav>
  <router-view/>
</template>


<style lang="scss" scoped>
nav{
  margin: 20px;
  text-align: end;
}
</style>