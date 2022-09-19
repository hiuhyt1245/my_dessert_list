import { defineStore } from 'pinia'


export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    desserts: [
      {
        title: "莉莉水果塔",
        location: "台南",
        price: "150",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem omnis voluptatum eius doloremque optio iusto sequi dignissimos. Pariaturearum assumenda dolores possimus quidem quam, reprehenderit aliquid onsequuntur amet non facere."
      },
      {
        title: "拾伍馬卡龍",
        location: "台北",
        price: "300",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem omnis voluptatum eius doloremque optio iusto sequi dignissimos. Pariatur earum assumenda dolores possimus quidem quam, reprehenderit aliquid consequuntur amet non facere."
      },
      {
        title: "英式胡蘿蔔蛋糕",
        location: "高雄",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem omnis voluptatum eius doloremque optio iusto sequi dignissimos. Pariatur earum assumenda dolores possimus quidem quam, reprehenderit aliquid consequuntur amet non facere."
      },
      {
        title: "莓美布朗尼",
        location: "苗栗",
        price: "250",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem omnis voluptatum eius doloremque optio iusto sequi dignissimos. Pariatur earum assumenda dolores possimus quidem quam, reprehenderit aliquid consequuntur amet non facere."
      },
      {
        title: "好時光鬆餅",
        location: "新竹",
        price: "200",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem omnis voluptatum eius doloremque optio iusto sequi dignissimos. Pariatur earum assumenda dolores possimus quidem quam, reprehenderit aliquid consequuntur amet non facere."
      },
    ]
    


  }),
  actions: {
    handleSubmit (e) {
      const form = e.target;
      const formData = new FormData(form);
      let object = {};
      formData.forEach((value, key) => object[key] = value);
      this.desserts.push(object)
      console.log(this.desserts)
      localStorage.setItem("DessertList", JSON.stringify(this.desserts))
      
  },
},
  getters: {
    
  }

})