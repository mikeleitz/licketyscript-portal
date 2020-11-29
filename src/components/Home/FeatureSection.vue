<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-gray-50 overflow-hidden">
    <div class="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <svg
          class="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x="0" y="0" width="20" height="20"
                   patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"/>
      </svg>

      <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div class="lg:col-span-1">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to create Bash Scripts.
          </h2>
        </div>
        <dl class="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
          <div>
<!--            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              &lt;!&ndash; Heroicon name: globe-alt &ndash;&gt;
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
              </svg>
            </div>-->
            <div class="mt-5">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Easy script input
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Specify all inputs to your script in the easy to use interface. Lickety Script handles the parsing and hands the value to your script code.
              </dd>
            </div>
          </div>

          <div>
<!--            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              &lt;!&ndash; Heroicon name: scale &ndash;&gt;
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
              </svg>
            </div>-->
            <div class="mt-5">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Validates all input values
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Specify validations for each of your script's inputs. Does your input have to be a string, number, boolean switch, or conform to a custom regex? Lickety Script has you covered with a click of a button.
              </dd>
            </div>
          </div>

          <div>
<!--            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              &lt;!&ndash; Heroicon name: lightning-bolt &ndash;&gt;
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>-->
            <div class="mt-5">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Help text included
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Lickety Script let's you add help text to each input. Simple.
              </dd>
            </div>
          </div>

          <div>
<!--            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              &lt;!&ndash; Heroicon name: mail &ndash;&gt;
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>-->
            <div class="mt-5">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Verbose and Quiet
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Verbose and quiet options for your script is built it. Need to print more log messages via verbose? Easy! Use the built in logging feature. Don't want any output during a script run? Add the quiet option.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureSection"
}
</script>

<style scoped>

</style>
