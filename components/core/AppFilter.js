// Utilities
import {mapGetters, mapActions} from 'vuex'

export default {
  data: () => ({
    colors: [
      'primary',
      'info',
      'success',
      'warning',
      'danger'
    ],
    images: [
      'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-1.23832d31.jpg',
      'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg',
      'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-3.3a54f533.jpg',
      'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-4.3b7e38ed.jpg'
    ]
  }),

  computed: {
    ...mapGetters({
      image: 'app/getImage',
      color: 'app/getColor'
    })
  },

  methods: {
    ...mapActions({
      setImage: 'app/setImage',
      setColor: 'app/setColor'
    }),
  }
}

