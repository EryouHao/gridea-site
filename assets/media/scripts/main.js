new Vue({
  el: '#app',
  data() {
    return {
      isOpen: false,
    } 
  },
  methods: {
    oepnUrl(url) {
      window.open(url, '_blank')
    },
  },
})