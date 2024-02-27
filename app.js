const app = Vue.createApp({
  data() {
    return {
      title: "Student",
      name: "Hla Hla",
      age: 23,
      show: true,
    };
  },
});
app.mount("#app");
const profile = Vue.createApp({
  data() {
    return {
      name: "Mar Mee",
      category: "spicy",
      price: 1200,
    };
  },
  methods: {
    IncreasePrice() {
      this.price += 100;
      alert("price will increase");
    },
  },
});
profile.mount("#profile");
