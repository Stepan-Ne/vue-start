const App = {
data() {
  return {
    title: 'List',
    placeholderString: 'write here',
    inputValue: ""
  }
},
methods: {
  inputChangeHandler(e) {
    this.inputValue = e.target.value
  }
}
}

Vue.createApp(App).mount('#counter')