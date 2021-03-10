const App = {
data() {
  return {
    counter: 1,
    title: 'Count'
  }
}
}

Vue.createApp(App).mount('#counter')