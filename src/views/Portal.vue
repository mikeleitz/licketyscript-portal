<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="min-h-screen bg-white">
    <nav class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- <NavBar/> Includes mobile hamburger nav -->
        <NavBar/>
      </div>
    </nav>

    <div>
      <main>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <!-- Replace main portal content -->
          <div class="px-4 sm:px-0">
            <TopCta/>
          </div>
          <div class="px-4 sm:px-0">
            <FeatureSection/>
          </div>
          <div class="px-4 sm:px-0">
            <ScreenShots/>
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
import FeatureSection from "@/components/Home/FeatureSection";
import ScreenShots from "@/components/Home/ScreenShots";

export default {
  name: 'Portal',
  components: {
    ScreenShots,
    FeatureSection,
    NavBar,
    TopCta
  },
  metaInfo() {
    return {
      title: "Lickety Script - Homepage",
      meta: [
        {
          name: 'description',
          content: 'Lickety Script is a framework for creating Bash scripts. You: Write your specific script logic. Lickety Script: Handles the rest: parsing input, validating input, displaying help.'
        },
        {property: 'og:title', content: "Lickety Script - The web application for creating Bash scripts easily!"},
        {property: 'og:site_name', content: 'Lickety Script'},
        {property: 'og:type', content: 'website'},
        {name: 'robots', content: 'index,follow'}
      ]
    }
  }
}
</script>
