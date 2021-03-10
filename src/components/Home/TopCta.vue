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
      <div class="bg-indigo-200 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div class="lg:self-center">
            <img class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-0 lg:translate-y-0" src="@/assets/lickety-script.jpg" alt="Lickety Script logo">
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
