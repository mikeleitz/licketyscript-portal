<template>
  <div>
    <div>
      <div class="pt-6 divide-y divide-gray-200">
        <ul class="mt-2 divide-y divide-gray-200">
          <li class="py-4 flex items-center justify-between">
            <div class="flex flex-col">
              <p id="integer-option-label" class="text-sm font-medium text-gray-900">
                Is Integer
              </p>
              <p id="integer-option-description" class="text-sm text-gray-500">
                Is this value an integer.
              </p>
            </div>
            <!-- On: "bg-teal-500", Off: "bg-gray-200" -->
            <button type="button" aria-pressed="true" aria-labelledby="integer-option-label" aria-describedby="integer-option-description"
                    :class="isInteger ? buttonToggledClass : buttonNotToggledClass"
                    @click="clickIntegerButton()">
              <span class="sr-only">Use setting</span>
              <!-- On: "translate-x-5", Off: "translate-x-0" -->
              <span aria-hidden="true"
                    :class="isInteger ? spanToggledClass : spanNotToggledClass"></span>
            </button>
          </li>

          <li class="py-4 flex items-center justify-between">
            <div class="flex flex-col">
              <p id="signed-option-label" class="text-sm font-medium text-gray-900">
                Is Signed
              </p>
              <p id="signed-option-description" class="text-sm text-gray-500">
                Can the value be negative.
              </p>
            </div>
            <!-- On: "bg-teal-500", Off: "bg-gray-200" -->
            <button type="button" aria-pressed="true" aria-labelledby="signed-option-label" aria-describedby="signed-option-description"
                    :class="isSigned ? buttonToggledClass : buttonNotToggledClass"
                    @click="clickSignedButton()">
              <span class="sr-only">Use setting</span>
              <!-- On: "translate-x-5", Off: "translate-x-0" -->
              <span aria-hidden="true"
                    :class="isSigned ? spanToggledClass : spanNotToggledClass"></span>
            </button>
          </li>

          <li class="py-4 flex items-center justify-between">
            <div class="flex flex-col">
              <p id="lower-bound-option-label" class="text-sm font-medium text-gray-900">
                Lower Bound
              </p>
              <p id="lower-bound-option-description" class="text-sm text-gray-500">
                The lowest possible value for this argument.
              </p>
            </div>
            <input type="text" name="lower_bound_value" id="lower_bound_value" class="ml-4 relative inline-flex flex-shrink-0 h-6 w-20 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md">
          </li>

          <li class="py-4 flex items-center justify-between">
            <div class="flex flex-col">
              <p id="upper-bound-option-label" class="text-sm font-medium text-gray-900">
                Upper Bound
              </p>
              <p id="upper-bound-option-description" class="text-sm text-gray-500">
                The highest possible value for this argument.
              </p>
            </div>
            <input type="text" name="upper_bound_value" id="upper_bound_value" class="ml-4 relative inline-flex flex-shrink-0 h-6 w-20 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md">
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!--
    On: "bg-teal-500", Off: "bg-gray-200"
    On: "translate-x-5", Off: "translate-x-0"
  -->
</template>

<script>
export default {
  name: "InputTypeNumber",
  data() {
    return {
      buttonToggledClass: "ml-4 bg-purple-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500",
      buttonNotToggledClass: "ml-4 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500",
      spanToggledClass: "translate-x-5 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
      spanNotToggledClass: "translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
      isRequired: false,
      isInteger: false,
      isSigned: false
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
    },
    clickIntegerButton: function () {

      if (this.isInteger) {
        this.isInteger = false
      } else {
        this.isInteger = true
      }
    },
    clickSignedButton: function () {

      if (this.isSigned) {
        this.isSigned = false
      } else {
        this.isSigned = true
      }
    },
  }
}
</script>

<style scoped>

</style>
