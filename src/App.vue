<template>
  <Api/>
</template>
<script>
import { defineComponent } from 'vue'
import Api from './components/Api.vue';
export default defineComponent({
    name: "App",
    components: { Api }
})
</script>
