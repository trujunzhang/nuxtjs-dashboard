
  import helperOffset from '~/components/helper/AppOffset'

  export default {
    inheritAttrs: false,
    components: {
      helperOffset
    },
    props: {
      color: {
        type: String,
        default: 'secondary'
      },
      elevation: {
        type: [Number, String],
        default: 10
      },
      inline: {
        type: Boolean,
        default: false
      },
      fullWidth: {
        type: Boolean,
        default: false
      },
      offset: {
        type: [Number, String],
        default: 24
      },
      title: {
        type: String,
        default: undefined
      },
      text: {
        type: String,
        default: undefined
      }
    },
    computed: {
      hasOffset () {
        return this.$slots.header ||
          this.$slots.offset ||
          this.title ||
          this.text
      },
      styles () {
        if (!this.hasOffset) return null

        return {
          marginBottom: `${this.offset}px`,
          marginTop: `${this.offset * 2}px`
        }
      }
    }
  }