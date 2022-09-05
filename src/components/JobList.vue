<template>
  <div class="job-list">
    <p class="order">Ordered by {{ order }}</p>
    <transition-group name="list" tag="ul">
      <li v-for="job in orderedJobs" :key="job.id">
        <h2>{{ job.title }} in {{ job.location }}</h2>
        <div class="salary">
          <p>平均 NT${{ job.price }}  / 人</p>
        </div>
        <div class="description">
          <img :src="job.img" alt="">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem omnis
            voluptatum eius doloremque optio iusto sequi dignissimos. Pariatur
            earum assumenda dolores possimus quidem quam, reprehenderit aliquid
            consequuntur amet non facere.
          </p>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import Job from "../types/Job";
import OrderTerm from "../types/OrderTerm";


export default defineComponent({
  props: {
    jobs: {
      type: Array as PropType<Job[]>,
      required: true,
    },
    order: {
      type: String as PropType<OrderTerm>,
      required: true,
    },
  },
  setup(props) {
    const orderedJobs = computed(() => {
      return [...props.jobs].sort((a: Job, b: Job) => {
        return a[props.order] > b[props.order] ? 1 : -1;
      });
    });
    return { orderedJobs };
  },
});
</script>

<style lang="scss" scoped>
.job-list {
  max-width: 960px;
  margin: 40px auto;
  .order{
    width:160px;
    margin: 0 10px;
    text-align: center;
    color: #c5be59;;
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
  .salary {
    display: flex;
    p {
      color: #17bf66;
      font-weight: bold;
      margin: 10px 4px;
    }
  }
  .description{
    display: flex;
    img{
      margin:auto;
      width:300px;
      height:200px;
      padding:1rem;
      object-fit: cover;
    }
    p{
      width:50%;
    }
  }
  .list-move {
    transition: all 1s;
  }
}
</style>