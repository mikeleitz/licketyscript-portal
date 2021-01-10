<template>
  <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Script Argument Detail</h3>
        <p class="mt-1 text-sm text-gray-500">The argument detail.</p>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form class="space-y-6" action="#" method="POST">
          <fieldset>
            <div>
              <div class="space-y-1.5">
                <label for="button_row" class="block text-sm font-medium text-gray-700">
                  Argument Type
                </label>
                <!-- This example requires Tailwind CSS v2.0+ -->
                <span id="button_row" class="relative z-0 inline-flex shadow-sm rounded-md">
                  <button type="button"
                          @click="clickTypeButton('string')"
                          :class="showString ? stringButtonSelectedClass : stringButtonNotSelectedClass">
                    String
                  </button>
                  <button type="button"
                          @click="clickTypeButton('number')"
                          :class="showNumber ? generalButtonSelectedClass : generalButtonNotSelectedClass">
                    Number
                  </button>
                  <button type="button"
                          @click="clickTypeButton('switch')"
                          :class="showSwitch ? generalButtonSelectedClass : generalButtonNotSelectedClass">
                    Switch
                  </button>
                  <button type="button"
                          @click="clickTypeButton('other')"
                          :class="showOther ? otherButtonSelectedClass : otherButtonNotSelectedClass">
                    Other
                  </button>
                </span>
              </div>
              <div>
<!--                We show this: <my-comp></my-comp>-->
<!--                We don't show this: <my-comp test="0"></my-comp>-->

                <InputTypeString v-if="showString"/>
                <InputTypeNumber v-if="showNumber"/>
                <InputTypeSwitch v-if="showSwitch"/>
                <InputTypeOther v-if="showOther"/>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import InputTypeString from "@/components/App/InputTypeString";
import InputTypeNumber from "@/components/App/InputTypeNumber";
import InputTypeOther from "@/components/App/InputTypeOther";
import InputTypeSwitch from "@/components/App/InputTypeSwitch";

export default {
  name: "ArgumentDetail",
  components: {InputTypeSwitch, InputTypeOther, InputTypeNumber, InputTypeString},
  data() {
    return {
      // Button on far left has rounded edges on left
      stringButtonSelectedClass: "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-light-blue-500 hover:bg-light-blue-600  text-white     rounded-l-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500",
      stringButtonNotSelectedClass: "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-white  rounded-l-md        hover:bg-gray-50         text-gray-700",

      // Button on far right has rounded edges on right
      otherButtonSelectedClass: "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-light-blue-500 hover:bg-light-blue-600  text-white    rounded-r-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500",
      otherButtonNotSelectedClass: "-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ",

      generalButtonSelectedClass: "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-light-blue-500 hover:bg-light-blue-600  text-white     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500",
      generalButtonNotSelectedClass: "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-white hover:bg-gray-50         text-gray-700",

      showString: false,
      showNumber: false,
      showSwitch: false,
      showOther: false,
    }
  },
  methods: {
    clickTypeButton: function (type) {
      this.showString = false
      this.showNumber = false
      this.showSwitch = false
      this.showOther = false

      if (type === 'string') {
        this.showString = true
      } else if (type === 'number') {
        this.showNumber = true
      } else if (type === 'switch') {
        this.showSwitch = true
      } else if (type === 'other') {
        this.showOther = true
      }

    }
  }
}
</script>

<style scoped>
.button-selected {
  text-align: left;
}
</style>
