const App = {
data() {
  return {
    title: 'List',
    placeholderString: 'write here',
    inputValue: "",
    notes: ['Item 1', 'Item 2'],
    requireField: "The field is require",
    fieldFlag: false
  }
},
methods: {
  inputChangeHandler(e) {
    this.fieldFlag = false
    this.inputValue = e.target.value
  },
  addNote() {
    if (!this.inputValue.trim()) {
      this.fieldFlag = true
      return
    }
    this.notes.push(this.inputValue)
    this.inputValue = ''
  },
  removeNote(id) {
    this.notes.splice(id, 1)
  },
  upperCase(item) {
    return item.toUpperCase()
  }
}

}

Vue.createApp(App).mount('#counter')