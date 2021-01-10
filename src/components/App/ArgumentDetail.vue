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
                          class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                    String
                  </button>
                  <button type="button"
                          class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                    Number
                  </button>
                  <button type="button"
                          class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                    Switch
                  </button>
                  <button type="button"
                          class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                    Other
                  </button>
                </span>
              </div>
              <div>
                <InputTypeString/>
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
export default {
  name: "ArgumentDetail",
  components: {InputTypeString}
}
</script>

<style scoped>

</style>
