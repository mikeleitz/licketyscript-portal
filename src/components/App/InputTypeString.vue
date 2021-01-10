<template>
  <div>
    <div>
      <div class="pt-6 divide-y divide-gray-200">
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
            <button type="button" aria-pressed="true" aria-labelledby="required-option-label" aria-describedby="required-option-description" class="ml-4 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500">
              <span class="sr-only">Use setting</span>
              <!-- On: "translate-x-5", Off: "translate-x-0" -->
              <span aria-hidden="true" class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
            </button>
          </li>

          <li class="py-4 flex items-center justify-between">

            <fieldset>
              <legend class="text-sm font-medium text-gray-900">
                String
              </legend>

              <div class="mt-1 bg-white rounded-md shadow-sm -space-y-px">
                <!-- On: "bg-light-blue-50 border-light-blue-200 z-10", Off: "border-gray-200" -->
                <div class="relative border rounded-tl-md rounded-tr-md p-4 flex">
                  <div class="flex items-center h-5">
                    <input id="settings-option-0" name="privacy_setting" type="radio" class="h-4 w-4 text-light-blue-600 cursor-pointer focus:ring-light-blue-500 border-gray-300" checked>
                  </div>
                  <label for="settings-option-0" class="ml-3 flex flex-col cursor-pointer">
                    <!-- On: "text-light-blue-900", Off: "text-gray-900" -->
                    <span class="block text-sm font-medium">
                      has no restrictions
                    </span>
                    <!-- On: "text-light-blue-700", Off: "text-gray-500" -->
                    <span class="block text-sm">
                      This value can be any string
                    </span>
                  </label>
                </div>

                <!-- On: "bg-light-blue-50 border-light-blue-200 z-10", Off: "border-gray-200" -->
                <div class="relative border border-gray-200 p-4 flex">
                  <div class="flex items-center h-5">
                    <input id="settings-option-1" name="privacy_setting" type="radio" class="h-4 w-4 text-light-blue-600 cursor-pointer focus:ring-light-blue-500 border-gray-300">
                  </div>
                  <label for="settings-option-1" class="ml-3 flex flex-col cursor-pointer">
                    <!-- On: "text-light-blue-900", Off: "text-gray-900" -->
                    <span class="block text-sm font-medium">
                      is an alpha-numeric
                    </span>
                    <!-- On: "text-light-blue-700", Off: "text-gray-500" -->
                    <span class="block text-sm">
                      This value must be made up of numbers or letters
                    </span>
                  </label>
                </div>

                <!-- On: "bg-light-blue-50 border-light-blue-200 z-10", Off: "border-gray-200" -->
                <div class="relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex">
                  <div class="flex items-center h-5">
                    <input id="settings-option-2" name="privacy_setting" type="radio" class="h-4 w-4 text-light-blue-600 cursor-pointer focus:ring-light-blue-500 border-gray-300">
                  </div>
                  <label for="settings-option-2" class="ml-3 flex flex-col cursor-pointer">
                    <!-- On: "text-light-blue-900", Off: "text-gray-900" -->
                    <span class="block text-sm font-medium">
                      is an email address
                    </span>
                    <!-- On: "text-light-blue-700", Off: "text-gray-500" -->
                    <span class="block text-sm">
                      This value must be a valid email address
                    </span>
                  </label>
                </div>

                <!-- On: "bg-light-blue-50 border-light-blue-200 z-10", Off: "border-gray-200" -->
                <div class="relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex">
                  <div class="flex items-center h-5">
                    <input id="settings-option-3" name="privacy_setting" type="radio" class="h-4 w-4 text-light-blue-600 cursor-pointer focus:ring-light-blue-500 border-gray-300">
                  </div>
                  <label for="settings-option-3" class="ml-3 flex flex-col cursor-pointer">
                    <!-- On: "text-light-blue-900", Off: "text-gray-900" -->
                    <span class="block text-sm font-medium">
                      is a url
                    </span>
                    <!-- On: "text-light-blue-700", Off: "text-gray-500" -->
                    <span class="block text-sm">
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
  name: "InputTypeString"
}
</script>

<style scoped>

</style>
