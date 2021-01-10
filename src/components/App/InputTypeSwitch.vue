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
            <button type="button" aria-pressed="true" aria-labelledby="privacy-option-label-1" aria-describedby="privacy-option-description-1" class="ml-4 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500">
              <span class="sr-only">Use setting</span>
              <!-- On: "translate-x-5", Off: "translate-x-0" -->
              <span aria-hidden="true" class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
            </button>
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
  name: "InputTypeSwitch"
}
</script>

<style scoped>

</style>
