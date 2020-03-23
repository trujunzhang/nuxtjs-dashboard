// Utilities
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      logo: '/vuetifylogo.png',
      links: [
        {
          to: '/dashboard',
          icon: 'mdi-view-dashboard',
          text: 'Dashboard'
        },
        {
          to: '/user-profile',
          icon: 'mdi-account',
          text: 'User Profile'
        },
        {
          to: '/table-list',
          icon: 'mdi-clipboard-outline',
          text: 'Table List'
        },
        {
          to: '/typography',
          icon: 'mdi-format-font',
          text: 'Typography'
        },
        {
          to: '/icons',
          icon: 'mdi-chart-bubble',
          text: 'Icons'
        },
        {
          to: '/maps',
          icon: 'mdi-map-marker',
          text: 'Maps'
        },
        {
          to: '/notifications',
          icon: 'mdi-bell',
          text: 'Notifications'
        }
      ],
      responsive: true
    }
  },
  computed: {
    ...mapGetters({
      image: 'app/getImage',
      color: 'app/getColor',
      drawer: 'app/getDrawer'
    }),


    inputValue: {
      get() {
        return this.drawer
      },
      set(val) {
        this.setDrawer(val)
      }
    }
  },
  mounted() {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapActions({
      setDrawer: 'app/setDrawer'
    }),

    onResponsiveInverted() {
      this.responsive = window.innerWidth < 991;
    }
  }
}

