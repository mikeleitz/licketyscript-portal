<template>
  <div>
    <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Script Arguments</h3>
          <p class="mt-1 text-sm text-gray-500">All the arguments the script accepts with their validations.</p>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form class="space-y-6" action="#" method="POST">
            <fieldset>
              <div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Script args
                  </label>
                  <div class="mt-2 flex items-center space-x-5">

                    <select v-model="selectedBashOptionId"
                            class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                      <option disabled value="">Select option</option>
                      <option v-for="bashOption in bashOptions"
                              v-bind:value="bashOption.id"
                              :key="bashOption.id">
                        {{ bashOption.value }}
                      </option>
                    </select>

                    <span>Selected id: {{ selectedBashOptionId != '' ? selectedBashOptionId : 'N/A' }}</span>

                    <button type="button" @click="addScriptArg"
                            class="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Add
                    </button>
                    <button type="button" @click="removeScriptArg" :disabled="selectedBashOptionId === ''"
                            class="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    <div class="mt-10 sm:rounded-lg">
      <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6" style="height: 775px;">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Script Argument Detail</h3>
            <p class="mt-1 text-sm text-gray-500">The argument detail.</p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2" v-show="showArgDetail">
            <form class="space-y-6" action="#" method="POST">
              <fieldset>
                <div>
                  <div class="mt-6 grid grid-cols-12 gap-6">
                    <div class="col-span-12 sm:col-span-6">
                      <label for="long_name" class="block text-sm font-medium text-gray-700">Long name</label>
                      <input type="text"
                             name="long_name"
                             id="long_name"
                             class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                             v-model="longName">
                    </div>

                    <div class="col-span-3">
                      <label for="short_name" class="block text-sm font-medium text-gray-700">Short name</label>
                      <input type="text"
                             name="short_name"
                             id="short_name"
                             class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                             v-model="shortName">
                    </div>

                    <div class="col-span-12">
                      <label for="help_text" class="block text-sm font-medium text-gray-700">Help Text</label>
                      <input type="text"
                             name="help_text"
                             id="help_text"
                             class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                             v-model="helpText">
                    </div>
                  </div>

                  <div class="space-y-1.5 mt-4">
                    <label for="button_row" class=" mb-4 block text-sm font-medium text-gray-700">
                      Argument Type and Validations
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
                    <InputTypeString v-if="showString"/>
                    <InputTypeNumber v-if="showNumber"/>
                    <InputTypeSwitch v-if="showSwitch"/>
                    <InputTypeOther v-if="showOther"/>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>

          <div class="mt-5 md:mt-0 md:col-span-2" v-show="!showArgDetail">
            Add new bash option to edit detail
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScriptInputTypeMixin from './mixins/ScriptInputTypeMixin.js'
import {DomainFactory} from '../../domain/LicketyScriptDomainFactory'
import {store} from '../../store'
import InputTypeString from "@/components/App/InputTypeString";
import InputTypeNumber from "@/components/App/InputTypeNumber";
import InputTypeSwitch from "@/components/App/InputTypeSwitch";
import InputTypeOther from "@/components/App/InputTypeOther";

export default {
  name: "ScriptInput",
  components: {InputTypeOther, InputTypeSwitch, InputTypeNumber, InputTypeString},
  mixins: [ScriptInputTypeMixin],
  data() {
    return {
      showButton: true,
      id: -1,
      bashOptions: [],

      // Button on far left has rounded edges on left
      stringButtonSelectedClass: "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-light-blue-500 hover:bg-light-blue-600  text-white     rounded-l-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500",
      stringButtonNotSelectedClass: "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-white  rounded-l-md        hover:bg-gray-50         text-gray-700",

      // Button on far right has rounded edges on right
      otherButtonSelectedClass: "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-light-blue-500 hover:bg-light-blue-600  text-white    rounded-r-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500",
      otherButtonNotSelectedClass: "-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ",

      generalButtonSelectedClass: "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-light-blue-500 hover:bg-light-blue-600  text-white     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500",
      generalButtonNotSelectedClass: "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-white hover:bg-gray-50         text-gray-700",

      showString: true,
      showNumber: false,
      showSwitch: false,
      showOther: false,
      thisScriptInput: null,
      selectedBashOptionId: '',
      showArgDetail: false,
      longName: '',
      shortName: '',
      helpText: ''
    }
  },
  watch: {
    selectedBashOptionId: function (val, oldVal) {
      console.info('Selecting new bash option. old bash option id: ' + oldVal + '; new bash option id: ' + val)
      let bashOption = this.scriptInProgress.getOptionById(this.selectedBashOptionId)
      this.thisScriptInput = bashOption

      this.longName = bashOption.longName
      this.shortName = bashOption.shortName
      this.helpText = bashOption.helpText

      if (bashOption != null) {
        console.info('Showing arg detail')
        this.showArgDetail = true
      }
    },
    longName: function (val) {
      console.info('new longname ' + val)
      if (this.thisScriptInput != null) {
        this.thisScriptInput.longName = val
      }
    },
    shortName: function (val) {
      console.info('new shortname ' + val)
      if (this.thisScriptInput != null) {
        this.thisScriptInput.shortName = val
      }
    },
    helpText: function (val) {
      console.info('new help text ' + val)
      if (this.thisScriptInput != null) {
        this.thisScriptInput.helpText = val
      }
    },
    clickTypeButton: function (type) {
      this.showString = false
      this.showNumber = false
      this.showSwitch = false
      this.showOther = false

      if (type === 'string') {
        this.showString = true
        this.thisScriptInput.type = 'string'
      } else if (type === 'number') {
        this.thisScriptInput.type = 'number'
        this.showNumber = true
      } else if (type === 'switch') {
        this.showSwitch = true
        this.thisScriptInput.type = 'boolean'
      } else if (type === 'other') {
        this.showOther = true
        this.thisScriptInput.type = 'other'
      }
    }
  },
  methods: {
    addScriptArg: function () {
      let newOptionId = store.getNextOptionId()

      let newBashOption = DomainFactory.createBashOption(newOptionId, 'NEW OPTION ' + newOptionId, null)
      this.scriptInProgress.addOption(newBashOption)

      console.info('Created new option: ' + newBashOption + ' with id: ' + newBashOption.id)

      this.bashOptions.unshift({id: newBashOption.id, value: newBashOption.longName})
    },
    removeScriptArg: function () {
      if (this.selectedBashOptionId != null && this.selectedBashOptionId != '') {
        let id = this.selectedBashOptionId;
        console.info("hello from remove with id " + id)
        let optionIndex = this.bashOptions.findIndex(arrayOption => arrayOption.id === id)
        this.bashOptions.splice(optionIndex, 1)

        if (this.bashOptions.length > 0) {
          this.selectedBashOptionId = this.bashOptions[0].id
        } else {
          this.selectedBashOptionId = ''
        }
      }
    }
  }
}
</script>

<style scoped>
/*
.interaction {
  border: 10px solid lightgreen;
  display: flex;
  flex: 1 0 auto;
  max-height: 225px;
}

.default {
  width: 20px;
}

.bigger{
  width: 250px;
  height: 250px;
}
!*
.fade-enter-active, .fade-leave-active {
  transition-property: width, height;
  transition-duration: 5s, 5s;
}*!

.fade-leave-to {
  width: 200px;
  height: 200px;
}

*/

.base-section {
  width: 100px;
  height: 100px;
  transition: width .5s, height .5s;
}

.compact-section {

}

.expanded-section {
  width: 300px;
  height: 300px;
  transition: width .5s, height .51s;
}

</style>
