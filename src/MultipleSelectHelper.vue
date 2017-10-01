<template>
  <div class="c-multiple-select-helper">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'multiple-select-helper',

    props: {
      data: {
        type: Array,
        required: true
      },
      initialSelection: {
        required: true
      },
      multiple: {
        type: Boolean,
        default: true
      },
      selectionKey: {
        type: String,
        default: 'id'
      },
      value: {
        type: Object,
        required: true
      }
    },

    data () {
      return {
        multipleSelection: [],
        singleSelection: {}
      }
    },

    watch: {
      value (val) {
        if (val[this.selectionKey] !== undefined) {
          if (this.multiple) {
            let index = this.multipleSelection.findIndex((item) => item[this.selectionKey] === val[this.selectionKey])
            index !== -1 ? this.multipleSelection.splice(index, 1) : this.multipleSelection.push(val)
            this.$emit('selection-change', this.multipleSelection, val)
          } else {
            this.singleSelection = this.singleSelection[this.selectionKey] === val[this.selectionKey] ? {} : Object.assign({}, this.singleSelection, val)
            this.$emit('selection-change', this.singleSelection, val)
          }
          this.$emit('input', {})
        }
      }
    },

    created () {
      if (this.multiple && this.initialSelection.length) {
        this.multipleSelection.push(...this.initialSelection)
        this.$emit('selection-change', this.multipleSelection, [...this.initialSelection].pop())
      } else if (Object.getOwnPropertyNames(this.singleSelection).length >= 0) {
        this.singleSelection = Object.assign({}, this.singleSelection, this.initialSelection)
        this.$emit('selection-change', this.singleSelection, this.singleSelection)
      }
    }
  }
</script>
