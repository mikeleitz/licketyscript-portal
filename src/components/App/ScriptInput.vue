<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <!-- TODO Add button row for add, delete, quick add verbose, quiet. -->
  <!-- TODO Expand the li box when clicked to expose detail/form. -->
  <fieldset>
    <legend id="radiogroup-label" class="sr-only">
      Script Inputs
    </legend>
    <ul class="space-y-4" role="radiogroup" aria-labelledby="radiogroup-label">
      <li>
        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
          <div class="interaction">
            <button @click="showButton=!showButton">
            <transition name="fade" mode="out-in">
              <div v-if="showButton" class="base-section"> B </div>
              <div v-else class="expanded-section">
                <input-div>asdasdasdasd</input-div>
              </div>
            </transition>
          </button>
        </div>
        </div>
      </li>

      <li id="radiogroup-option-0" tabindex="0" role="radio" aria-checked="true" class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500">
        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
          <div class="flex items-center">
            <div class="text-sm">
              <p class="font-medium text-gray-900">
                --first-name, -f
                <span class="hidden sm:inline sm:mx-1" aria-hidden="true">&middot;</span>
                The user's first name.
              </p>
              <div class="mt-2 text-gray-500">
                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                  Required
                </span>
                <span class="ml-3 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  String
                </span>
                <span class="ml-3 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  Alpha-numeric
                </span>
              </div>
            </div>
          </div>
          <div class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
            <div class="font-medium text-gray-900"></div>
            <div class="ml-1 text-gray-500 sm:ml-0"></div>
          </div>
        </div>
        <!-- On: "border-indigo-500", Off: "border-transparent" -->
        <div class="border-indigo-500 absolute inset-0 rounded-lg border-2 pointer-events-none" aria-hidden="true"></div>
      </li>

      <li id="radiogroup-option-1" tabindex="-1" role="radio" aria-checked="false" class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500">
        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
          <div class="flex items-center">
            <div class="text-sm">
              <p class="font-medium text-gray-900">
                --last-name, -l
                <span class="hidden sm:inline sm:mx-1" aria-hidden="true">&middot;</span>
                The user's last name.
              </p>
              <div class="mt-2 text-gray-500">
                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  Optional
                </span>
                <span class="ml-3 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  String
                </span>
                <span class="ml-3 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  Alpha-numeric
                </span>
              </div>
            </div>
          </div>
          <div class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
            <div class="font-medium text-gray-900"></div>
            <div class="ml-1 text-gray-500 sm:ml-0"></div>
          </div>
        </div>
        <!-- On: "border-indigo-500", Off: "border-transparent" -->
        <div class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none" aria-hidden="true"></div>
      </li>

      <li id="radiogroup-option-2" tabindex="-1" role="radio" aria-checked="false" class="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500">
        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
          <div class="flex items-center">
            <div class="text-sm">
              <p class="font-medium text-gray-900">
                --total, -t
                <span class="hidden sm:inline sm:mx-1" aria-hidden="true">&middot;</span>
                The total number of the things.
              </p>
              <div class="mt-2 text-gray-500">
                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  Optional
                </span>
                <span class="ml-3 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  Unsigned
                </span>
                <span class="ml-3 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  Less than 10
                </span>
                <span class="ml-3 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  Greater than 0
                </span>
              </div>
            </div>
          </div>
          <div class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
            <div class="font-medium text-gray-900"></div>
            <div class="ml-1 text-gray-500 sm:ml-0"></div>
          </div>
        </div>
        <!-- On: "border-indigo-500", Off: "border-transparent" -->
        <div class="border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none" aria-hidden="true"></div>
      </li>

    </ul>
  </fieldset>
</template>

<script>
export default {
  name: "ScriptInput",
  data() {
    return {
      showButton: true
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
