const app = Vue.createApp({
  data() {
    return {
      title: "Student",
      name: "Hla Hla",
      age: 23,
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
});
profile.mount("#profile");
