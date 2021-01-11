<template>
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

                  <select v-model="selected"
                          class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                    <option v-for="option in options"
                            v-bind:key="option.id"
                            v-bind:value="option.id">
                      {{ option.value }}
                    </option>
                  </select>
                  <span>Selected id: {{ selected }}</span>

                  <button type="button" @click="addScriptArg"
                          class="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Add
                  </button>
                  <button type="button" @click="removeScriptArg"
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

</template>

<script>
import ScriptInputTypeMixin from './mixins/ScriptInputTypeMixin.js'
import { DomainFactory } from '../../domain/LicketyScriptDomainFactory'
import { store } from '../../store'

export default {
  name: "ScriptInput",
  mixins: [ScriptInputTypeMixin],
  data() {
    return {
      showButton: true,
      id: -1,
      options: [
        { id: 1, value: 'A' },
        { id: 2, value: 'B' },
        { id: 3, value: 'C' }
      ]
    }
  },
  methods: {
    addScriptArg: function () {
      console.info("hello from add.")
      let newOptionId = store.getNextOptionId()

      let newBashOption = DomainFactory.createBashOption(newOptionId, 'NEW OPTION', null)
      this.scriptInProgress.addOption(newBashOption)

      console.info('Created new option: ' + newBashOption + ' with id: ' + newBashOption.id)

      this.options.unshift({ id: newBashOption.id, value: newBashOption.longName })
    },
    removeScriptArg: function () {
      let id = this.selected
      console.info("hello from remove with id " + id)
      let optionIndex = this.options.findIndex(arrayOption => arrayOption.id === id)
      this.options.splice(optionIndex, 1)
      this.selected = this.options[0].id
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
