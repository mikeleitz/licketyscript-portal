<template>
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
        <!--        <MobileNav/>-->
      </div>
    </nav>

    <div>
      <main>
        <div class="relative py-16 bg-white overflow-hidden">
          <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
              <svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none"
                   viewBox="0 0 404 384">
                <defs>
                  <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20"
                           patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"/>
              </svg>
              <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404"
                   height="384" fill="none" viewBox="0 0 404 384">
                <defs>
                  <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20"
                           patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"/>
              </svg>
              <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none"
                   viewBox="0 0 404 384">
                <defs>
                  <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20"
                           patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"/>
              </svg>
            </div>
          </div>
          <div class="relative px-4 sm:px-6 lg:px-8">
            <div class="text-lg max-w-prose mx-auto">
              <h1>
                <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">Introducing</span>
                <span
                    class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Lickety Script</span>
              </h1>
            </div>
            <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
              <p>Lickety Script is a web-based tool designed for developers to expedite the creation of Bash
                scripts.</p>
              <ul>
                <li>How do I specify inputs?</li>
                <li>How do I parse inputs?</li>
                <li>How do I validate inputs?</li>
                <li>How do I create help text?</li>
              </ul>
              <p>These are basic features and it's a struggle to implement them for even the most basic of scripts.</p>
              <h2>Enter Lickety Script</h2>
              <p>It's a framework that allows you to get right to work on the custom part of your script. All input
                handling is taken care of. All help text is created for you.</p>
              <p>Just write the part of the script that matters to you. When the script's execution gets to your code,
                all inputs will be parsed, validated, and ready to go.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

import NavBar from "@/components/NavBar";

export default {
  name: 'Portal',
  components: {
    NavBar,
  }
}
</script>
