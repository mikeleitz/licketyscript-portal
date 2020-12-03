<template>
  <div class="min-h-screen bg-white">
    <nav class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- <NavBar/> Includes mobile hamburger nav -->
        <NavBar/>
      </div>
    </nav>

    <div>
      <main>
        <div class="mt-10 max-w-7xl mx-auto sm:px-6 lg:px-8">
          <!-- Information Section -->
          <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Information</h3>
                <p class="mt-1 text-sm text-gray-500">This is the general information about your script. The name and what shell it runs in.</p>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">
                <form class="space-y-6" action="#" method="POST">
                  <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="first_name" class="block text-sm font-medium text-gray-700">Script name</label>
                      <input type="text" name="ls_script_name" id="ls-script-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                    </div>
                  </div>
                  <fieldset>
                    <div>
                      <legend class="text-base font-medium text-gray-900">Shell</legend>
                    </div>

                    <div class="mt-4 space-y-4">
                      <div class="flex items-center">
                        <input id="ls-script-shell" name="ls_script_shell" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" checked>
                        <label for="ls-script-shell" class="ml-3 block text-sm font-medium text-gray-700">Bash</label>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>

          <!-- Script Inputs Section -->
          <!-- TODO Make this section not scroll so far down with multiple inputs. Have dual pane master/detail. -->
          <div class="mt-10 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Script Inputs</h3>
                <p class="mt-1 text-sm text-gray-500">Specify all the inputs your script accepts. Mark each input with its appropriate validation, help text, long name, and optionally a short name.</p>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">
                <ScriptInput/>
              </div>
            </div>
          </div>

          <div class="mt-10 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                <p class="mt-1 text-sm text-gray-500">
                  Decide which communications you'd like to receive and how.
                </p>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">
                <form class="space-y-6" action="#" method="POST">
                  <fieldset>
                    <legend class="text-base font-medium text-gray-900">By Email</legend>
                    <div class="mt-4 space-y-4">
                      <div class="flex items-start">
                        <div class="h-5 flex items-center">
                          <input id="comments" name="comments" type="checkbox"
                                 class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="comments" class="font-medium text-gray-700">Comments</label>
                          <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                        </div>
                      </div>
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input id="candidates" name="candidates" type="checkbox"
                                 class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                          <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                        </div>
                      </div>
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input id="offers" name="offers" type="checkbox"
                                 class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="offers" class="font-medium text-gray-700">Offers</label>
                          <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <div>
                      <legend class="text-base font-medium text-gray-900">Push Notifications</legend>
                      <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                    </div>
                    <div class="mt-4 space-y-4">
                      <div class="flex items-center">
                        <input id="push_everything" name="push_notifications" type="radio"
                               class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                        <label for="push_everything" class="ml-3 block text-sm font-medium text-gray-700">
                          Everything
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input id="push_email" name="push_notifications" type="radio"
                               class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                        <label for="push_email" class="ml-3 block text-sm font-medium text-gray-700">
                          Same as email
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input id="push_nothing" name="push_notifications" type="radio"
                               class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                        <label for="push_nothing" class="ml-3 block text-sm font-medium text-gray-700">
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>


          <div>
            <div class="flex justify-end">
              <button type="button"
                      class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Cancel
              </button>
              <button type="submit"
                      class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import ScriptInput from "@/components/App/ScriptInput";

export default {
  name: "LicketyScriptApp",
  components: {ScriptInput, NavBar}
}
</script>

<style scoped>

</style>
