<template>
  <div>
    <div v-if="error" class="text-danger">Could not fetch the data</div>
    <div v-if="documents">
      <ListView :Lists="documents" />
    </div>
  </div>
</template>

<script>
import ListView from '../components/ListView.vue'
import getCollection from '../composables/getCollection'

export default {
  name: 'Home',
  components: { ListView },
  setup() {
    const { error, documents } = getCollection('Lists')

    return { error, documents }
  }
}
</script>