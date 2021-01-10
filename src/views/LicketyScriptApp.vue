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
          <ScriptInformation/>
        </div>
        <div class="mt-10 max-w-7xl mx-auto sm:px-6 lg:px-8">
          <ScriptInput/>
        </div>
        <div class="mt-10 max-w-7xl mx-auto sm:px-6 lg:px-8">
          <ArgumentDetail/>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import ScriptInput from "@/components/App/ScriptInput";
import ScriptInformation from "@/components/App/ScriptInformation";
import ArgumentDetail from "@/components/App/ArgumentDetail";

export default {
  name: "LicketyScriptApp",
  components: {ArgumentDetail, ScriptInformation, ScriptInput, NavBar}
}
</script>

<style scoped>

</style>
