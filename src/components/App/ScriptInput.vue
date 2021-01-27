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
                            @change="changedBashOptionId($event)"
                            class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                      <option disabled value="">Select option</option>
                      <option v-for="bashOption in bashOptions"
                              v-bind:value="bashOption.id"
                              :key="bashOption.id">
                        {{ bashOption.value }}
                      </option>
                    </select>

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
      <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6" :style="showArgDetail ? detailSectionExpandedHeight : detailSectionHeight">
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
                             autocomplete="off"
                             v-model="longName">
                    </div>

                    <div class="col-span-3">
                      <label for="short_name" class="block text-sm font-medium text-gray-700">Short name</label>
                      <input type="text"
                             name="short_name"
                             id="short_name"
                             class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                             autocomplete="off"
                             v-model="shortName">
                    </div>

                    <div class="col-span-12">
                      <label for="help_text" class="block text-sm font-medium text-gray-700">Help Text</label>
                      <input type="text"
                             name="help_text"
                             id="help_text"
                             class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                             autocomplete="off"
                             v-model="helpText">
                    </div>
                  </div>

                  <div class="space-y-1.5 mt-4">
                    <label for="button_row" class=" mb-4 block text-sm font-medium text-gray-700">
                      Argument Type
                    </label>
                    <!-- This example requires Tailwind CSS v2.0+ -->
                    <span id="button_row" class="relative z-0 inline-flex shadow-sm rounded-md">
                  <button type="button"
                          v-on:click="clickTypeButton('string')"
                          :class="isTypeString ? stringButtonSelectedClass : stringButtonNotSelectedClass">
                    String
                  </button>
                  <button type="button"
                          v-on:click="clickTypeButton('number')"
                          :class="isTypeNumber ? generalButtonSelectedClass : generalButtonNotSelectedClass">
                    Integer
                  </button>
                  <button type="button"
                          v-on:click="clickTypeButton('switch')"
                          :class="isTypeSwitch ? generalButtonSelectedClass : generalButtonNotSelectedClass">
                    Switch
                  </button>
                  <button type="button"
                          v-on:click="clickTypeButton('other')"
                          :class="isTypeOther ? otherButtonSelectedClass : otherButtonNotSelectedClass">
                    Other
                  </button>
                </span>
                  </div>
                  <div>

                    <div v-show="isTypeString">
                      <!-- String type -->
                      <div class="pt-6 divide-y divide-gray-200">
                        <fieldset>
                          <label class=" mb-4 block font-medium text-gray-700">
                            Validations
                          </label>
                          <ul class="mt-2 divide-y divide-gray-200">
                            <li class="py-4 flex items-center justify-between">
                              <div class="flex flex-col">
                                <p id="required-option-label-string" class="text-sm font-medium text-gray-900">
                                  Required
                                </p>
                                <p id="required-option-description-string" class="text-sm text-gray-500">
                                  Is this value a required input.
                                </p>
                              </div>
                              <!-- On: "bg-teal-500", Off: "bg-gray-200" -->
                              <button type="button" aria-pressed="true" aria-labelledby="required-option-label"
                                      aria-describedby="required-option-description"
                                      :class="isRequired ? buttonToggledClass : buttonNotToggledClass"
                                      @click="clickRequiredToggle()">
                                <span class="sr-only">Use setting</span>
                                <!-- On: "translate-x-5", Off: "translate-x-0" -->
                                <span aria-hidden="true"
                                      :class="isRequired ? spanToggledClass : spanNotToggledClass"></span>
                              </button>
                            </li>
                            <li class="py-4 flex items-center justify-between">
                              <div class="mt-1 bg-white rounded-md shadow-sm -space-y-px">
                                <!-- On: "bg-light-blue-50 border-light-blue-200 z-10", Off: "border-gray-200" -->
                                <div class="flex flex-col mb-6">
                                  <p id="string-restrictions-label" class="text-sm font-medium text-gray-900">
                                    This value
                                  </p>
                                </div>

                                <div id="string-restrictions"
                                    :class="isNoRestrictionsSelected ? radioSelectedTopClass : radioNotSelectedTopClass">

                                  <div class="flex items-center h-5">
                                    <input id="no-restrictions"
                                           value="-1"
                                           name="no_restrictions"
                                           type="radio"
                                           v-model="selectedStringValidation"
                                           @change="changedStringValidation($event)"
                                           class="h-4 w-4 text-light-blue-600 cursor-pointer focus:ring-light-blue-500 border-gray-300"
                                           checked>
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
                                <div
                                    :class="isAlphanumericSelected ? radioSelectedMiddleClass : radioNotSelectedMiddleClass">
                                  <div class="flex items-center h-5">
                                    <input id="alphanumeric"
                                           name="alphanumeric"
                                           value="21"
                                           type="radio"
                                           v-model="selectedStringValidation"
                                           @change="changedStringValidation($event)"
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
                                <div
                                    :class="isEmailAddressSelected ? radioSelectedMiddleClass : radioNotSelectedMiddleClass">
                                  <div class="flex items-center h-5">
                                    <input id="email-address"
                                           name="email_address"
                                           value="10"
                                           type="radio"
                                           v-model="selectedStringValidation"
                                           @change="changedStringValidation($event)"
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
                                           value="9"
                                           type="radio"
                                           v-model="selectedStringValidation"
                                           @change="changedStringValidation($event)"
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
                            </li>
                          </ul>
                        </fieldset>
                      </div>
                    </div>

                    <div v-show="isTypeNumber">
                      <!-- Numeric type -->
                      <div class="pt-6 divide-y divide-gray-200">
                        <fieldset>
                          <label class=" mb-4 block font-medium text-gray-700">
                            Validations
                          </label>
                          <ul class="mt-2 divide-y divide-gray-200">
                            <li class="py-4 flex items-center justify-between">
                              <div class="flex flex-col">
                                <p id="required-option-label-number" class="text-sm font-medium text-gray-900">
                                  Required
                                </p>
                                <p id="required-option-description-number" class="text-sm text-gray-500">
                                  Is this value a required input.
                                </p>
                              </div>
                              <!-- On: "bg-teal-500", Off: "bg-gray-200" -->
                              <button type="button" aria-pressed="true" aria-labelledby="required-option-label"
                                      aria-describedby="required-option-description"
                                      :class="isRequired ? buttonToggledClass : buttonNotToggledClass"
                                      @click="clickRequiredToggle()">
                                <span class="sr-only">Use setting</span>
                                <!-- On: "translate-x-5", Off: "translate-x-0" -->
                                <span aria-hidden="true"
                                      :class="isRequired ? spanToggledClass : spanNotToggledClass"></span>
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
                              <button type="button" aria-pressed="true" aria-labelledby="signed-option-label"
                                      aria-describedby="signed-option-description"
                                      :class="isSigned ? buttonToggledClass : buttonNotToggledClass"
                                      @click="clickSignedToggle()">
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
                              <input type="text"
                                     name="lower_bound_value"
                                     id="lower_bound_value"
                                     v-model="lowerBound"
                                     autocomplete="off"
                                     class="ml-4 relative inline-flex flex-shrink-0 h-6 w-20 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md">
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
                              <input type="text"
                                     name="upper_bound_value"
                                     id="upper_bound_value"
                                     v-model="upperBound"
                                     autocomplete="off"
                                     class="ml-4 relative inline-flex flex-shrink-0 h-6 w-20 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md">
                            </li>
                          </ul>
                        </fieldset>
                      </div>

                    </div>

                    <div v-show="isTypeSwitch">

                      <!-- Switch type -->
                      <div class="pt-6 divide-y divide-gray-200">
                        <fieldset>
                          <label class=" mb-4 block font-medium text-gray-700">
                            No additional validations for this type
                          </label>
                          <ul class="mt-2 divide-y divide-gray-200">
                          </ul>
                        </fieldset>
                      </div>

                    </div>

                    <div v-show="isTypeOther">
                      <!-- Other type -->
                      <div class="pt-6 divide-y divide-gray-200">
                        <fieldset>
                          <label class=" mb-4 block font-medium text-gray-700">
                            Validations
                          </label>
                          <ul class="mt-2 divide-y divide-gray-200">
                            <li class="py-4 flex items-center justify-between">
                              <div class="flex flex-col">
                                <p id="required-option-label-other" class="text-sm font-medium text-gray-900">
                                  Required
                                </p>
                                <p id="required-option-description-other" class="text-sm text-gray-500">
                                  Is this value a required input.
                                </p>
                              </div>
                              <!-- On: "bg-teal-500", Off: "bg-gray-200" -->
                              <button type="button" aria-pressed="true" aria-labelledby="required-option-label"
                                      aria-describedby="required-option-description"
                                      :class="isRequired ? buttonToggledClass : buttonNotToggledClass"
                                      @click="clickRequiredToggle()">
                                <span class="sr-only">Use setting</span>
                                <!-- On: "translate-x-5", Off: "translate-x-0" -->
                                <span aria-hidden="true"
                                      :class="isRequired ? spanToggledClass : spanNotToggledClass"></span>
                              </button>
                            </li>
                          </ul>
                        </fieldset>
                      </div>

                    </div>
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
      <div class="mt-10 mb-10  flex justify-end">
<!--        <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500">
          Cancel
        </button>-->
        <button
            type="submit"
            @click="createScript"
            class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500">
          Create Script
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ScriptInputTypeMixin from './mixins/ScriptInputTypeMixin.js'
import {DomainFactory, ValidationTypes} from '../../domain/LicketyScriptDomainFactory'
import {store} from '../../store'
import axios from "axios";

export default {
  name: "ScriptInput",
  components: {},
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

      // Arg drop down selection
      selectedBashArg: null,
      selectedBashOptionId: '',
      showArgDetail: false,

      // Should we show the arg detail? Only if a valid arg is selected in drop down.
      longName: '',
      shortName: '',
      helpText: '',
      isRequired: false,

      detailSectionHeight: 'height: 100px;',
      detailSectionExpandedHeight: 'height: 800px;',

      // Type selections
      isTypeString: true,
      isTypeNumber: false,
      isTypeOther: false,
      isTypeSwitch: false,

      // String validations
      isNoRestrictionsSelected: true,
      isAlphanumericSelected: false,
      isEmailAddressSelected: false,
      isUrlSelected: false,
      selectedStringValidation: -1,

      // Numeric validations
      isInteger: true,    // always true for version 1. Real numbers in version 2.
      isSigned: false,
      lowerBound: '',
      upperBound: ''
    }
  },
  watch: {
    lowerBound: function(val) {
      console.info("Setting new lower bound: " + val)
      this.setNumericValidationsFromLocalVariables()
    },
    upperBound: function(val) {
      console.info("Setting new upper bound: " + val)
      this.setNumericValidationsFromLocalVariables()
    },
    longName: function (val) {
      if (this.selectedBashArg != null) {
        this.selectedBashArg.longName = val

        let selectedOptionInDropdown = this.bashOptions.findIndex(optionId => optionId.id === this.selectedBashOptionId)
        this.bashOptions[selectedOptionInDropdown].value = val
      }
    },
    shortName: function (val) {
      if (this.selectedBashArg != null) {
        this.selectedBashArg.shortName = val
      }
    },
    helpText: function (val) {
      if (this.selectedBashArg != null) {
        this.selectedBashArg.helpText = val
      }
    }
  },
  methods: {
    changedBashOptionId: function() {
      console.info('Selected new bash option id ' + this.selectedBashOptionId)

      let bashOption = this.scriptInProgress.getOptionById(this.selectedBashOptionId)
      this.selectedBashArg = bashOption

      if (bashOption != null) {
        this.showArgDetail = true
        this.reloadValuesForSelectedArg()
      }
    },
    createScript: function () {
      console.info('About to submit script!')

      console.info('Json for script')
      console.info(this.scriptInProgress.toJson())

      this.onSubmit()

      console.info('Completed submission')
    },
    onSubmit: function () {
      axios({
        url: 'https://api.licketyscript.app/scripts',
        // url: 'http://localhost:8080/scripts',
        method: 'POST',
        data: this.scriptInProgress,
        responseType: 'blob'
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', this.scriptInProgress.scriptName + '.zip')
        document.body.appendChild(link)
        link.click()
      }).catch(e => { this.errors.push(e) })
    },
    removeAllValidations: function () {
        this.selectedBashArg.removeAllValidations()

        this.isNoRestrictionsSelected = true
        this.isAlphanumericSelected = false
        this.isEmailAddressSelected = false
        this.isUrlSelected = false
        this.selectedStringValidation = -1

        this.isInteger = true
        this.isSigned = false

        if (this.isRequired) {
          // Add required back in, if it's selected.
          let requiredValidation = DomainFactory.createBashValidationFromType(ValidationTypes.VALUE_REQUIRED)
          this.selectedBashArg.addValidation(requiredValidation)
        }
    },
    reloadValuesForSelectedArg: function () {
      this.longName = this.selectedBashArg.longName
      this.shortName = this.selectedBashArg.shortName
      this.helpText = this.selectedBashArg.helpText

      this.isTypeString = false
      this.isTypeNumber = false
      this.isTypeSwitch = false
      this.isTypeOther = false

      if (this.selectedBashArg.hasValidation(DomainFactory.createBashValidationFromType(ValidationTypes.SIGNED_INTEGER)) ||
          this.selectedBashArg.hasValidation(DomainFactory.createBashValidationFromType(ValidationTypes.UNSIGNED_INTEGER))) {
        this.setNumericValidationsFromStoreVariable()
        this.isTypeNumber = true
      } else if (this.selectedBashArg.hasValidation(DomainFactory.createBashValidationFromType(ValidationTypes.STRING))) {
        this.setStringValidationsFromStoreVariable()
        this.isTypeString = true
      } else if (this.selectedBashArg.hasValidation(DomainFactory.createBashValidationFromType(ValidationTypes.BOOLEAN))) {
        this.setBooleanValidationsFromStoreVariable()
        this.isTypeSwitch = true
      } else {
        this.setOtherValidationsFromStoreVariable()
        this.isTypeOther = true
      }
    },
    addScriptArg: function () {
      let newOptionId = store.getNextOptionId()

      let newBashOption = DomainFactory.createBashOption(newOptionId, 'new-option-' + newOptionId, null)
      this.scriptInProgress.addOption(newBashOption)

      console.info('Created new option: ' + newBashOption + ' with id: ' + newBashOption.id)

      this.bashOptions.unshift({id: newBashOption.id, value: newBashOption.longName})

      this.selectedBashArg = newBashOption

      if (newBashOption != null) {
        this.selectedBashOptionId = newOptionId

        console.info('Showing arg detail')

        // Default all new args to string.
        this.selectedBashArg.addValidation(DomainFactory.createBashValidationFromType(ValidationTypes.STRING))

        this.reloadValuesForSelectedArg()

        this.showArgDetail = true
      }
    },
    removeScriptArg: function () {
      if (this.selectedBashOptionId != null && this.selectedBashOptionId != '') {
        let id = this.selectedBashOptionId;
        console.info("Remove option with id " + id)
        let optionIndex = this.bashOptions.findIndex(arrayOption => arrayOption.id === id)
        this.bashOptions.splice(optionIndex, 1)

        if (this.bashOptions.length > 0) {
          this.selectedBashOptionId = this.bashOptions[0].id
        } else {
          this.selectedBashOptionId = ''
          this.showArgDetail = false
        }
      }
    },
    clickTypeButton: function (type) {
      this.isTypeString = false
      this.isRequired = false

      if (type === 'string' && !this.isTypeString) {
        this.isTypeString = true
        this.isTypeNumber = false
        this.isTypeSwitch = false
        this.isTypeOther = false

        this.removeAllValidations()

        this.selectedBashArg.type = 'string'
      } else if (type === 'number' && !this.isTypeNumber) {
        this.isTypeString = false
        this.isTypeNumber = true
        this.isTypeSwitch = false
        this.isTypeOther = false

        this.removeAllValidations()

        this.selectedBashArg.type = 'number'

        this.selectedBashArg.addValidation(DomainFactory.createBashValidationFromType(ValidationTypes.SIGNED_INTEGER))
        // this.selectedBashArg.addValidation(DomainFactory.createBashValidationFromType(ValidationTypes.SIGNED_REAL))
      } else if (type === 'switch' && !this.isTypeSwitch) {
        this.isTypeString = false
        this.isTypeNumber = false
        this.isTypeSwitch = true
        this.isTypeOther = false

        this.removeAllValidations()

        this.selectedBashArg.type = 'switch'
        this.selectedBashArg.addValidation(DomainFactory.createBashValidationFromType(ValidationTypes.BOOLEAN))
      } else if (type === 'other' && !this.isTypeOther) {
        this.isTypeString = false
        this.isTypeNumber = false
        this.isTypeSwitch = false
        this.isTypeOther = true

        this.removeAllValidations()

        this.selectedBashArg.type = 'other'
      }
    },
    setStringValidationsFromLocalVariables: function() {
      this.selectedBashArg.removeAllValidations()

      this.selectedBashArg.addValidation(DomainFactory.createBashValidationFromType(ValidationTypes.STRING))

      if (this.isRequired) {
        this.selectedBashArg.addValidation(DomainFactory.createBashValidationFromType(ValidationTypes.VALUE_REQUIRED))
      }

      if (this.isNoRestrictionsSelected) {
        console.debug('No string restrictions selected.');
      } else if (this.isAlphanumericSelected) {
        this.selectedBashArg.addValidation(DomainFactory.createBashValidationFromType(ValidationTypes.ALPHA_NUMERIC));
      } else if (this.isEmailAddressSelected) {
        this.selectedBashArg.addValidation(DomainFactory.createBashValidationFromType(ValidationTypes.EMAIL));
      } else if (this.isUrlSelected) {
        this.selectedBashArg.addValidation(DomainFactory.createBashValidationFromType(ValidationTypes.URL));
      }
    },
    setStringValidationsFromStoreVariable: function() {
      this.isNoRestrictionsSelected = false
      this.isAlphanumericSelected = false
      this.isEmailAddressSelected = false
      this.isUrlSelected = false
      this.isRequired = false

      if (this.selectedBashArg.hasValidation(DomainFactory.createBashValidationFromType(ValidationTypes.VALUE_REQUIRED))) {
        this.isRequired = true
      }

      if (this.selectedBashArg.hasValidation(DomainFactory.createBashValidationFromType(ValidationTypes.ALPHA_NUMERIC))) {
        this.isAlphanumericSelected = true
        this.selectedStringValidation = '21'
      } else if (this.selectedBashArg.hasValidation(DomainFactory.createBashValidationFromType(ValidationTypes.EMAIL))) {
        this.isEmailAddressSelected = true
        this.selectedStringValidation = '10'
      } else if (this.selectedBashArg.hasValidation(DomainFactory.createBashValidationFromType(ValidationTypes.URL))) {
        this.isUrlSelected = true
        this.selectedStringValidation = '9'
      } else {
        this.isNoRestrictionsSelected = true
        this.selectedStringValidation = '-1'
      }
    },
    setNumericValidationsFromLocalVariables: function () {
      this.selectedBashArg.removeAllValidations()

      if (this.isRequired) {
        this.selectedBashArg.addValidation(DomainFactory.createBashValidationFromType(ValidationTypes.VALUE_REQUIRED))
      }

      if (this.isInteger) {
        if (this.isSigned) {
          this.selectedBashArg.addValidation(DomainFactory.createBashValidationFromType(ValidationTypes.SIGNED_INTEGER))
        } else {
          this.selectedBashArg.addValidation(DomainFactory.createBashValidationFromType(ValidationTypes.UNSIGNED_INTEGER))
        }
      } else {
        if (this.isSigned) {
          this.selectedBashArg.addValidation(DomainFactory.createBashValidationFromType(ValidationTypes.SIGNED_REAL))
        } else {
          this.selectedBashArg.addValidation(DomainFactory.createBashValidationFromType(ValidationTypes.UNSIGNED_REAL))
        }
      }

      if (this.lowerBound != '') {
        let validation = DomainFactory.createBashValidationFromType(ValidationTypes.GREATER_THAN_EQUAL)
        validation.addArgs('value', this.lowerBound)

        this.selectedBashArg.addValidation(validation)
      }

      if (this.upperBound != '') {
        let validation = DomainFactory.createBashValidationFromType(ValidationTypes.LESS_THAN_EQUAL)
        validation.addArgs('value', this.upperBound)

        this.selectedBashArg.addValidation(validation)
      }
    },
    setNumericValidationsFromStoreVariable: function() {

    },
    setBooleanValidationsFromStoreVariable: function() {

    },
    setOtherValidationsFromStoreVariable: function() {

    },
    clickIntegerToggle: function () {
      if (this.isInteger) {
        this.isInteger = false
      } else {
        this.isInteger = true
      }

      this.setNumericValidationsFromLocalVariables()
    },
    clickSignedToggle: function () {

      if (this.isSigned) {
        this.isSigned = false
      } else {
        this.isSigned = true
      }

      this.setNumericValidationsFromLocalVariables()
    },
    changedStringValidation: function(event) {
      let newValidation = event.target.value;
      console.info("changed string validation to " + newValidation)

      this.isNoRestrictionsSelected = false
      this.isAlphanumericSelected = false
      this.isEmailAddressSelected = false
      this.isUrlSelected = false

      console.info('selected new string validation: ' + newValidation)

      if (newValidation === '-1') {
        this.isNoRestrictionsSelected = true
      } else if (newValidation === '10') {
        this.isEmailAddressSelected = true
      } else if (newValidation === '21') {
        this.isAlphanumericSelected = true
      } else if (newValidation === '9') {
        this.isUrlSelected = true
      }

      this.setStringValidationsFromLocalVariables()
    },
    clickRequiredToggle: function () {
      let requiredValidation = DomainFactory.createBashValidationFromType(ValidationTypes.VALUE_REQUIRED)

      if (this.isRequired) {
        this.isRequired = false

        if (this.selectedBashArg.hasValidation(requiredValidation)) {
          this.selectedBashArg.removeValidation(requiredValidation)
        }
      } else {
        this.isRequired = true

        if (!this.selectedBashArg.hasValidation(requiredValidation)) {
          this.selectedBashArg.addValidation(requiredValidation)
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
