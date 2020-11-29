<template>
  <!--
    This example requires Tailwind CSS v2.0+

    This example requires some changes to your config:

    ```
    // tailwind.config.js
    module.exports = {
      // ...
      plugins: [
        // ...
        require('@tailwindcss/aspect-ratio'),
      ]
    }
    ```
  -->
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div class="lg:self-center">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
              <span class="block">Ready for easier Bash Scripts?</span>
            </h2>
            <p class="mt-4 text-lg leading-6 text-indigo-200">Use Lickety Script to bootstrap your Bash scripts in 3 easy steps.</p>
            <ol class="list-decimal mt-4 ml-10">
              <li class="text-lg leading-6 text-indigo-200">Specify input options</li>
              <li class="text-lg leading-6 text-indigo-200">Declare input validations</li>
              <li class="text-lg leading-6 text-indigo-200">Download and implement logic</li>
            </ol>
<!--            <a href="#" class="mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50">Start scripting with ease</a>-->
          </div>
        </div>
        <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <img class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="@/assets/screenshots/full-app-shot.png" alt="Lickety Script screenshot">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopCta"
}
</script>

<style scoped>

</style>
