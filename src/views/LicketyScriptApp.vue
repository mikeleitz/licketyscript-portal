<template>
  <div class="min-h-screen bg-white">
    <nav class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- <NavBar/> Includes mobile hamburger nav -->
        <NavBar/>
      </div>
    </nav>

    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="generatorStatus !== 'Ready'" class="error">
      The generator is not ready. Can not generate scripts. Status : {{ generatorStatus }}
    </div>

    <div>
      <main v-if="generatorStatus === 'Ready'" role="main">
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

import axios from 'axios'

export default {
  name: "LicketyScriptApp",
  components: {CreateScript, ScriptInformation, ScriptInput, NavBar},
  mixins: [ScriptInputTypeMixin],
  data() {
    return {
      generatorStatus: 'Not Ready',
      loading: false
    }
  },
  created () {
    this.getStatus()
  },
  watch: {
    // call the status method again if the route changes
    '$route': 'getStatus'
  },
  methods: {
    getStatus: function () {
      this.loading = true
      axios({
        url: 'https://api.licketyscript.app/status',
        method: 'GET'
      }).then(result => {
        this.generatorStatus = result.data.status
        this.loading = false
      }, error => {
        console.error(error)
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>

</style>
