const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: '',
      tasks: [],
      toggleDisplay: true,
    };
  },

  computed: {
    toggleText() {
      return this.toggleDisplay ? 'Show List' : 'Hide';
    },
  },

  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
      this.enteredTaskValue = '';
    },

    toggle() {
      this.toggleDisplay = !this.toggleDisplay;
    },
  },
});

app.mount('#assignment');
