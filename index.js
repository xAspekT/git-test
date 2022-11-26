const createApp = Vue.createApp;

const app = createApp({
  data() {
    return {
      count: 0
    }
  }
})

app.mount('#app')