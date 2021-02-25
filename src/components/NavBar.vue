<template>
  <div class="flex justify-between h-16">
    <div class="flex">
      <div class="flex-shrink-0 flex items-center">
        <!-- TODO PUT APPLICATION ICON HERE -->
        <h1 class="text-lg font-bold">Lickety Script</h1>
      </div>
      <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
        <router-link class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900" to="/">Home</router-link>
        <router-link class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900" to="/howTo">How To</router-link>
        <router-link class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900" to="/licketyScriptApp">Application</router-link>
        <router-link class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900" to="/about">About</router-link>
      </div>

      <div class="flex-shrink-0 flex items-center ml-20">
        <!-- TODO PUT APPLICATION ICON HERE -->
        <h1 class="text-lg text-blue-600">-- Now in BETA! --</h1>
      </div>
    </div>

    <div class="-mr-2 flex items-center sm:hidden">
      <div class="-mr-2 flex md:hidden">
        <MobileNav/>
      </div>
    </div>

      <!--  This is the alerts button.    -->

<!--      <button class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <span class="sr-only">View notifications</span>
        &lt;!&ndash; Heroicon name: bell &ndash;&gt;
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </button>-->

      <!-- Profile dropdown -->
      <!--    <div class="ml-3 relative">
          <div>
                <button class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                </button>
              </div>-->
        <!--
          Profile dropdown panel, show/hide based on dropdown state.

          Entering: "transition ease-out duration-200"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
          Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
        -->
        <!--          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    Your Profile
                  </a>

                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    Settings
                  </a>

                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    Sign out
                  </a>
        </div>

      </div>-->
  </div>
</template>

<script>
import MobileNav from "@/components/MobileNav";
export default {
  name: "NavBar",
  components: {
    MobileNav
  }
}
</script>

<style scoped>
.router-link-exact-active {
border-bottom-width: 2px;
--tw-border-opacity: 1;
border-color: rgba(99, 102, 241, var(--tw-border-opacity));
}

</style>
