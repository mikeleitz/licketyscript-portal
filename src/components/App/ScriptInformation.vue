<template>
  <!-- Information Section -->
  <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Information</h3>
        <p class="mt-1 text-sm text-gray-500">This is the general information about your script. The name and what shell
          it runs in.</p>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form class="space-y-6" action="#" method="POST">
          <div class="grid grid-cols-3 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label for="ls-script-name" class="block text-sm font-medium text-gray-700">Script name</label>
              <input type="text" name="ls_script_name" id="ls-script-name"
                     class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
            </div>
          </div>
          <fieldset>
            <div>
              <legend class="text-base font-medium text-gray-900">Shell</legend>
            </div>

            <div class="mt-4 space-y-4">
              <div class="flex items-center">
                <input id="ls-script-shell" name="ls_script_shell" type="radio"
                       class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" checked>
                <label for="ls-script-shell" class="ml-3 block text-sm font-medium text-gray-700">Bash</label>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScriptInformation"
}
</script>

<style scoped>

</style>
