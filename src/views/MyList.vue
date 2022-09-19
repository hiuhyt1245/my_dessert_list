<template>
  <div class="app">
    <header>
      <div class="title">
        <h1>My List of Desserts</h1>
      </div>
      <div class="order">
        <button @click="handleClick('title')">Order by title</button>
        <button @click="handleClick('price')">Order by price</button>
        <button @click="handleClick('location')">Order by location</button>
      </div>
    </header>

    <DessertList  :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {useCounterStore} from '../stores/counter';
import OrderTerm from "../types/OrderTerm";
import DessertList from "../components/DessertList.vue";

export default defineComponent({
  name: "App",
  components: { DessertList },
  setup() {
    const storeCounter = useCounterStore()

    const order = ref<OrderTerm>("title");
    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };
    return { storeCounter, order, handleClick };
  },
});
</script>

<style lang="scss" scoped>
header {
  text-align: center;
  .title {
    display: flex;
    justify-content: center;
    h1 {
      font-size: 3em;
    }
  }
  .order {
    margin-top: 20px;
  }
  button {
    margin: 0 10px;
    color: #1195c9;
    border: 3px solid #1195c9;
    background: #d5f0ff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
}
</style>
