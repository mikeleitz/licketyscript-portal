<template>
  <div>
    <div>
    </div>
  </div>

  <!--
    On: "bg-teal-500", Off: "bg-gray-200"
    On: "translate-x-5", Off: "translate-x-0"
  -->
</template>

<script>
export default {
  name: "InputTypeString",
  data() {
    return {
      buttonToggledClass: "ml-4 bg-purple-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500",
      buttonNotToggledClass: "ml-4 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500",
      spanToggledClass: "translate-x-5 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
      spanNotToggledClass: "translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",

      isRequired: false,
    }
  },
  props: {
    // Script input id for this type component.
    id: {
      required: false,
      type: Number,
      default: -1
    },
    bashOption: {
      required: false,
      type: Object
    }
  },
  created () {
    this.thisScriptInput = this.bashOption
  },
  methods: {
    clickRequiredButton: function () {
      if (this.isRequired) {
        this.isRequired = false
      } else {
        this.isRequired = true
      }
    }
  },
  watch: {
  }
}
</script>

<style scoped>

</style>
