const app = Vue.createApp({
  data() {
    return {
      infos: [
        {
          title: "Student",
          name: "Hla Hla",
          age: 23,
        },
        {
          title: "Programmer",
          name: "Ashein",
          age: 25,
        },
      ],
      show: true, //value for show div
    };
  },
  methods: {
    mouseoverHandler() {
      console.log("mouseover is overworking");
    },
    mouseleaveHandler() {
      console.log("mouse is leaving");
    },
    dblclickHandler() {
      console.log("double ckicked");
    },
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
    //click event method
    IncreasePrice() {
      this.price += 100; // +100
      //alert("price will increase");
    },
  },
});
profile.mount("#profile");
