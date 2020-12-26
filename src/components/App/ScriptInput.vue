<template>
  <div class="mt-10 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Script Inputs</h3>
        <p class="mt-1 text-sm text-gray-500">Specify all the inputs your script accepts. Mark each input with its
          appropriate validation, help text, long name, and optionally a short name.</p>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        Script input section
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "ScriptInput",
  data() {
    return {
      showButton: true
    }
  }
}
</script>

<style scoped>
/*
.interaction {
  border: 10px solid lightgreen;
  display: flex;
  flex: 1 0 auto;
  max-height: 225px;
}

.default {
  width: 20px;
}

.bigger{
  width: 250px;
  height: 250px;
}
!*
.fade-enter-active, .fade-leave-active {
  transition-property: width, height;
  transition-duration: 5s, 5s;
}*!

.fade-leave-to {
  width: 200px;
  height: 200px;
}

*/

.base-section {
  width: 100px;
  height: 100px;
  transition: width .5s, height .5s;
}

.compact-section {

}

.expanded-section {
  width: 300px;
  height: 300px;
  transition: width .5s, height .51s;
}

</style>
