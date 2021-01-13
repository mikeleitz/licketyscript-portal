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
        <div class="mt-10 max-w-7xl mx-auto sm:px-6 lg:px-8 mb-10" >
          <CreateScript/>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import ScriptInput from "@/components/App/ScriptInput";
import ScriptInformation from "@/components/App/ScriptInformation";
import CreateScript from "@/components/App/CreateScript";
import ScriptInputTypeMixin from '../components/App/mixins/ScriptInputTypeMixin'

// import { store } from '../store.js'

export default {
  name: "LicketyScriptApp",
  components: {CreateScript, ScriptInformation, ScriptInput, NavBar},
  mixins: [ScriptInputTypeMixin],
  data() {
    return {
      loginType: 'username'
    }
  }
}
</script>

<style scoped>

</style>
