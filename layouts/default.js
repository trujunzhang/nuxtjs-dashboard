 export default {
    data() {
      return {
        isLoading: true
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.isLoading = false
      })
    }
  }