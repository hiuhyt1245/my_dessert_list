<template>
  <div class="dessert-list">
    <p class="order">Ordered by {{ order }}</p>
    <transition-group name="list" tag="ul">
      <li v-for="dessert in orderedDesserts" :key="dessert.title">
        <button @click.stop.prevent="deleteDessert(dessert.title)">
        <div class="button">
          X
        </div> 
      </button>
        <h2>{{ dessert.title }} in {{ dessert.location }}</h2>
        <div class="price">
          <p>平均 NT${{ dessert.price }} / 人</p>
        </div>
        <div class="description">
          <p>
            {{ dessert.description }}
          </p>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import Dessert from "../types/Dessert";
import OrderTerm from "../types/OrderTerm";
import { useCounterStore } from "../stores/counter";

export default defineComponent({
  props: {
    order: {
      type: String as PropType<OrderTerm>,
      required: true,
    },
  },
  setup(props) {
    const storeCounter = useCounterStore();
    const orderedDesserts = computed(() => {
      return [...storeCounter.desserts].sort((a: Dessert, b: Dessert) => {
        return a[props.order] > b[props.order] ? 1 : -1;
      });
    });

    const deleteDessert = (dessertId:string) =>{
      const dessertIndex = storeCounter.desserts.findIndex(
        (dessert) => dessert.title === dessertId
      );
      if (dessertIndex === -1) return;
      storeCounter.desserts.splice(dessertIndex, 1)
  localStorage.setItem('DessertList', JSON.stringify(storeCounter.desserts))
    }
    return { orderedDesserts, deleteDessert };
  },
});
</script>

<style lang="scss" scoped>
.dessert-list {
  max-width: 700px;
  margin: 40px auto;
  position: relative;
  .order {
    width: 160px;
    margin: 0 10px;
    text-align: center;
    color: #c5be59;
    background: #f3f2ed;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
  }
  ul {
    padding: 0;
  }
  li {
    list-style-type: none;
    background: white;
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
    h2 {
      margin: 0 0 10px;
      text-transform: capitalize;
    }
  }
  button {
    border: 2px rgb(197, 149, 149) solid;
    border-radius:30%;
    display:flex;
    margin: 0 0 auto auto;
    .button{
      color: rgb(197, 149, 149) ;
      font-weight: 700;
      line-height: 20px;
    }
  }
  button:hover{
    border: 2px rgb(192, 82, 82) solid;
    .button{
      color: rgb(192, 82, 82) ;
    }
  }
  .price {
    display: flex;
    p {
      color: #17bf66;
      font-weight: bold;
      margin: 10px 4px;
    }
  }
  .description {
    p {
      padding: 1rem 0;
    }
  }
  .list-move {
    transition: all 1s;
  }
}
</style>
