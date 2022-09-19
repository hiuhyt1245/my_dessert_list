<template>
  <form @submit.stop.prevent="storeCounter.handleSubmit">

    <div class="form-group">
      <label for="name">名稱</label>
      <input
        id="name"
        v-model="dessert.title"
        type="text"
        class="form-control"
        name="title"
        placeholder="Enter name"
        required
      />
    </div>

    <div class="form-group">
      <label for="location">地點</label>
      <input
        id="location"
        v-model="dessert.location"
        type="text"
        class="form-control"
        name="location"
        placeholder="台北"
      />
    </div>

    <div class="form-group">
      <label for="price">價格</label>
      <input
        id="price"
        v-model="dessert.price"
        type="text"
        class="form-control"
        placeholder="請輸入價格"
        name="price"
      />
    </div>

    <div class="form-group">
      <label for="description">評價</label>
      <textarea
        id="description"
        v-model="dessert.description"
        class="scrollbar"
        rows="8"
        name="description"
      />
    </div>

    

    <button @click="addDessert" type="submit" class="btn btn-primary" :disabled="isProcessing">
      <div class="button">{{ isProcessing ? "處理中..." : "送出" }}</div>
    </button>
  </form>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent, ref } from "vue";
import {useCounterStore} from '../stores/counter';
import Dessert from "../types/Dessert";
import { Toast } from "../utils/helper";

export default defineComponent({
  setup() {
    const dessert = ref<Dessert>({
      title: "",
      location: "",
      price: "",
      description: "",
    });

    const isProcessing = false;
    const storeCounter = useCounterStore()
    const addDessert = ()=>{
      Toast.fire({
        icon: "success",
        title: "添加成功",
      });
      // router.push({ name: "my-list" });
    }
    return { storeCounter, dessert, isProcessing, addDessert };
  },
});
</script>

<style lang="scss" scoped>
form{
  background: #f7f4ec;
  border-radius: 30px;
  margin: 5rem auto;
   padding: 1rem;
 width:80%;
 text-align: center;
  .form-group{
    width:70%;
    margin: 2rem auto;
   
    display: flex;
    flex-direction: column;
    
    label{
    font-size: 1.5rem;
    margin-bottom: .5rem;
    display: flex;
    color: #917f4e;
    
  }
  input{
    height: 50px;
   ::placeholder {
          color: #b6b4ae;
          font-size: 1.5rem;
   }
  }
  .scrollbar {
        resize: none;
        overflow-y: scroll;
        &::-webkit-scrollbar {
          width: 6px;
        }
        // bar的樣式
        &::-webkit-scrollbar-thumb {
          border-radius: 3px;
          background-color: rgba(0, 0, 0, 0.1);
        }
  }
  }
  button {
    width: 50%;
    margin: 2rem auto;
    text-align: center;
    
    .button {
      border: 2px #917f4e solid;
      border-radius: 40px;
      padding: 0.9rem;
      color: #fff;
      background: #917f4e;
      font-size: 16px;
      &:hover {
        background: #fff;
        color: #917f4e;
      }
    }
  }
}
</style>
