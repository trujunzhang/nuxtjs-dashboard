import {mapActions, mapGetters} from 'vuex'

export default {
  data: () => ({
    notifications: [
      'Mike, John responded to your email',
      'You have 5 new tasks',
      'You\'re now a friend with Andrew',
      'Another Notification',
      'Another One'
    ],
    title: 'Dashboard',
    responsive: true,
    responsiveInput: true
  }),
  watch: {
    '$route'(val) {
      this.title = val.name
    }
  },
  computed: {
    ...mapGetters({
      drawer: 'app/getDrawer'
    })
  },
  methods: {
    ...mapActions({
      setUsername: 'user/setUsername',
      setDrawer: 'app/setDrawer'
    }),

    onClickBtn() {
      this.setDrawer(!this.drawer)
    },
    onClick() {
      // Do something
    },
    onResponsiveInverted() {
      if (window.innerWidth < 991) {
        this.responsive = true
        this.responsiveInput = false
      } else {
        this.responsive = false
        this.responsiveInput = true
      }
    },
    async logout() {
      await this.setUsername(null);
      this.$router.push({path: '/'});
    }
  },
  mounted() {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResponsiveInverted)
  }
}

