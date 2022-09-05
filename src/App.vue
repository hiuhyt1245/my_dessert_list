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

    <JobList :jobs="jobs" :order="order" />
  </div>
</template>



<script lang="ts">
import { defineComponent, ref } from "vue";
import Job from "./types/Job";
import OrderTerm from "./types/OrderTerm";
import JobList from "./components/JobList.vue";
import img1 from "./assets/img/img1.jpg";
import img2 from "./assets/img/img2.jpg";
import img3 from "./assets/img/img3.jpg";
import img4 from "./assets/img/img4.jpg";
import img5 from "./assets/img/img5.jpg";

export default defineComponent({
  name: "App",
  components: { JobList },
  setup() {
    const jobs = ref<Job[]>([
      {
        title: "莉莉水果塔",
        location: "台南",
        price: 150,
        id: "1",
        img: img1,
      },
      {
        title: "拾伍馬卡龍",
        location: "台北",
        price: 300,
        id: "2",
        img: img2,
      },
      {
        title: "英式胡蘿蔔蛋糕",
        location: "高雄",
        price: 350,
        id: "3",
        img: img3,
      },
      { title: "莓美布朗尼",
        location: "苗栗",
        price: 250,
        id: "4",
        img: img4, 
      },
      {
        title: "好時光鬆餅",
        location: "新竹",
        price: 200,
        id: "5",
        img: img5,
      },
    ]);
    const order = ref<OrderTerm>("title");
    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };
    return { jobs, order, handleClick, img1, img2,img3,img4,img5 };
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
