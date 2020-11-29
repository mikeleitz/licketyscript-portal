<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="min-h-screen bg-white">
    <nav class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavBar/>
      </div>

      <!--
        Mobile menu, toggle classes based on menu state.

        Open: "block", closed: "hidden"
      -->
      <div class="hidden sm:hidden">
        <MobileNav/>
      </div>
    </nav>

    <div>
      <main>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 sm:px-0">
            <TopCta/>
          </div>
          <div class="px-4 sm:px-0">
            <FeatureSection/>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import TopCta from "@/components/Home/TopCta";
import NavBar from "@/components/NavBar";
import MobileNav from "@/components/MobileNav";
import FeatureSection from "@/components/Home/FeatureSection";
export default {
  name: 'Portal',
  components: {
    FeatureSection,
    MobileNav,
    NavBar,
    TopCta
  }
}
</script>
