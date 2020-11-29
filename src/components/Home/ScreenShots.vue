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
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Screen Shots</h2>
        </div>
        <ul class="space-y-12 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-1 lg:gap-x-8">
          <li>
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1 underline">
                <h3>Add script inputs</h3>
              </div>
            </div>

            <div class="space-y-4 mt-10">
              <div>
                <img class="object-cover shadow-lg rounded-lg" src="@/assets/screenshots/lickety-script-primary.png" alt="">
              </div>
            </div>
          </li>
          <li>
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1 underline">
                <h3>Specify validation for input</h3>
              </div>
            </div>

            <div class="space-y-4 mt-10">
              <div>
                <img class="object-cover shadow-lg rounded-lg" src="@/assets/screenshots/lickety-script-option.png" alt="">
              </div>
            </div>
          </li>

          <li>
            <div class="space-y-2">
              <div class="text-lg leading-6 font-medium space-y-1 underline">
                <h3>Help text</h3>
              </div>
            </div>

            <div class="space-y-4 mt-10">
              <div>
                <img class="object-cover shadow-lg rounded-lg" src="@/assets/screenshots/lickety-script-help.png" alt="">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "ScreenShots"
}
</script>

<style scoped>

</style>
