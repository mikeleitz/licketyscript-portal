<template>

  <!-- Mobile menu button -->

  <button @click="isOpen = !isOpen"
          class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    <span class="sr-only">Open main menu</span>
    <!--
      Heroicon name: menu

      Menu open: "hidden", Menu closed: "block"
    -->
    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
         aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
    <!--
      Heroicon name: x

      Menu open: "block", Menu closed: "hidden"
    -->
    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
         aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
    </svg>

    <transition
        enter-active-class="transition ease-out duration-100 transform"
        enter-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75 transform"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95">
      <div v-show="isOpen" class="origin-top-right absolute right-0 mt-5 w-56 rounded-md shadow-lg">
        <div class="rounded-md bg-white shadow-xs">
          <div
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
              role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            <div class="py-1">
              <router-link class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/">Home</router-link>
              <router-link class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/about">About</router-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </button>
</template>

<script>
export default {
  name: "MobileNav",
  data: () => ({
    isOpen: false,
  })
}
</script>

<style scoped>

</style>
