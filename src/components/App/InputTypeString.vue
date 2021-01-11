<template>
  <div>
    <div>
      <div class="pt-6 divide-y divide-gray-200">
        <ul class="mt-2 divide-y divide-gray-200">
          <ul class="mt-2 divide-y divide-gray-200">
            <li class="py-4 flex items-center justify-between">
              <div class="flex flex-col">
                <p id="required-option-label" class="text-sm font-medium text-gray-900">
                  Required
                </p>
                <p id="required-option-description" class="text-sm text-gray-500">
                  Is this value a required input.
                </p>
              </div>
              <!-- On: "bg-teal-500", Off: "bg-gray-200" -->
              <button type="button" aria-pressed="true" aria-labelledby="required-option-label" aria-describedby="required-option-description"
                      :class="isRequired ? buttonToggledClass : buttonNotToggledClass"
                      @click="clickRequiredButton()">
                <span class="sr-only">Use setting</span>
                <!-- On: "translate-x-5", Off: "translate-x-0" -->
                <span aria-hidden="true"
                      :class="isRequired ? spanToggledClass : spanNotToggledClass"></span>
              </button>
            </li>
          </ul>

          <li class="py-4 flex items-center justify-between">

            <fieldset>
              <legend class="text-sm font-medium text-gray-900">
                String
              </legend>

              <div class="mt-1 bg-white rounded-md shadow-sm -space-y-px">
                <!-- On: "bg-light-blue-50 border-light-blue-200 z-10", Off: "border-gray-200" -->
                <div
                    :class="isNoRestrictionsSelected ? radioSelectedTopClass : radioNotSelectedTopClass">
                  <div class="flex items-center h-5">
                    <input id="no-restrictions"
                           value="no_restrictions"
                           name="no_restrictions"
                           type="radio"
                           v-model="selectedValidation"
                           class="h-4 w-4 text-light-blue-600 cursor-pointer focus:ring-light-blue-500 border-gray-300" checked>
                  </div>
                  <label for="no-restrictions" class="ml-3 flex flex-col cursor-pointer">
                    <!-- On: "text-light-blue-900", Off: "text-gray-900" -->
                    <span
                        :class="isNoRestrictionsSelected ? radioSpan1SelectedClass : radioSpan1NotSelectedClass">
                      has no restrictions
                    </span>
                    <!-- On: "text-light-blue-700", Off: "text-gray-500" -->
                    <span
                        :class="isNoRestrictionsSelected ? radioSpan2SelectedClass : radioSpan2NotSelectedClass">
                      This value can be any string
                    </span>
                  </label>
                </div>

                <!-- On: "bg-light-blue-50 border-light-blue-200 z-10", Off: "border-gray-200" -->
                <div :class="isAlphanumericSelected ? radioSelectedMiddleClass : radioNotSelectedMiddleClass">
                  <div class="flex items-center h-5">
                    <input id="alphanumeric"
                           name="alphanumeric"
                           value="alphanumeric"
                           type="radio"
                           v-model="selectedValidation"
                           class="h-4 w-4 text-light-blue-600 cursor-pointer focus:ring-light-blue-500 border-gray-300">
                  </div>
                  <label for="alphanumeric" class="ml-3 flex flex-col cursor-pointer">
                    <!-- On: "text-light-blue-900", Off: "text-gray-900" -->
                    <span
                        :class="isAlphanumericSelected ? radioSpan1SelectedClass : radioSpan1NotSelectedClass">
                      is an alpha-numeric
                    </span>
                    <!-- On: "text-light-blue-700", Off: "text-gray-500" -->
                    <span
                        :class="isAlphanumericSelected ? radioSpan2SelectedClass : radioSpan2NotSelectedClass">
                      This value must be made up of numbers or letters
                    </span>
                  </label>
                </div>

                <!-- On: "bg-light-blue-50 border-light-blue-200 z-10", Off: "border-gray-200" -->
                <div :class="isEmailAddressSelected ? radioSelectedMiddleClass : radioNotSelectedMiddleClass">
                  <div class="flex items-center h-5">
                    <input id="email-address"
                           name="email_address"
                           value="email_address"
                           type="radio"
                           v-model="selectedValidation"
                           class="h-4 w-4 text-light-blue-600 cursor-pointer focus:ring-light-blue-500 border-gray-300">
                  </div>
                  <label for="email-address" class="ml-3 flex flex-col cursor-pointer">
                    <!-- On: "text-light-blue-900", Off: "text-gray-900" -->
                    <span
                        :class="isEmailAddressSelected ? radioSpan1SelectedClass : radioSpan1NotSelectedClass">
                      is an email address
                    </span>
                    <!-- On: "text-light-blue-700", Off: "text-gray-500" -->
                    <span
                        :class="isEmailAddressSelected ? radioSpan2SelectedClass : radioSpan2NotSelectedClass">
                      This value must be a valid email address
                    </span>
                  </label>
                </div>

                <!-- On: "bg-light-blue-50 border-light-blue-200 z-10", Off: "border-gray-200" -->
                <div :class="isUrlSelected ? radioSelectedBottomClass : radioNotSelectedBottomClass">
                  <div class="flex items-center h-5">
                    <input id="url"
                           name="url"
                           value="url"
                           type="radio"
                           v-model="selectedValidation"
                           class="h-4 w-4 text-light-blue-600 cursor-pointer focus:ring-light-blue-500 border-gray-300">
                  </div>
                  <label for="url" class="ml-3 flex flex-col cursor-pointer">
                    <!-- On: "text-light-blue-900", Off: "text-gray-900" -->
                    <span
                        :class="isUrlSelected ? radioSpan1SelectedClass : radioSpan1NotSelectedClass">
                      is a url
                    </span>
                    <!-- On: "text-light-blue-700", Off: "text-gray-500" -->
                    <span
                        :class="isUrlSelected ? radioSpan2SelectedClass : radioSpan2NotSelectedClass">
                      This value must be a valid url
                    </span>
                  </label>
                </div>
              </div>
            </fieldset>
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
  name: "InputTypeString",
  data() {
    return {
      buttonToggledClass: "ml-4 bg-purple-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500",
      buttonNotToggledClass: "ml-4 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500",
      spanToggledClass: "translate-x-5 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
      spanNotToggledClass: "translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
      radioSelectedTopClass: "relative border rounded-tl-md rounded-tr-md p-4 flex bg-light-blue-50 border-light-blue-200 z-10",
      radioSelectedMiddleClass: "relative border p-4 flex bg-light-blue-50 border-light-blue-200 z-10",
      radioSelectedBottomClass: "relative border rounded-bl-md rounded-br-md p-4 flex bg-light-blue-50 border-light-blue-200 z-10",
      radioNotSelectedTopClass: "relative border rounded-tl-md rounded-tr-md p-4 flex border-gray-200",
      radioNotSelectedMiddleClass: "relative border p-4 flex border-gray-200",
      radioNotSelectedBottomClass: "relative border rounded-bl-md rounded-br-md p-4 flex border-gray-200",
      radioSpan1SelectedClass: "block text-sm font-medium text-light-blue-900",
      radioSpan1NotSelectedClass: "block text-sm font-medium text-gray-900",
      radioSpan2SelectedClass: "block text-sm text-light-blue-700",
      radioSpan2NotSelectedClass: "block text-sm text-gray-500",
      isRequired: false,
      isNoRestrictionsSelected: true,
      isAlphanumericSelected: false,
      isEmailAddressSelected: false,
      isUrlSelected: false,
      selectedValidation: "no_restrictions"
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
    selectedValidation: function (newValidation) {
      this.isNoRestrictionsSelected = false
      this.isAlphanumericSelected = false
      this.isEmailAddressSelected = false
      this.isUrlSelected = false

      if (newValidation === 'no_restrictions') {
        this.isNoRestrictionsSelected = true
      } else if (newValidation === 'email_address') {
        this.isEmailAddressSelected = true
      } else if (newValidation === 'alphanumeric') {
        this.isAlphanumericSelected = true
      } else if (newValidation === 'url') {
        this.isUrlSelected = true
      }
    }
  }
}
</script>

<style scoped>

</style>
