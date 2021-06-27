<template>
  <div>
    <div v-if="error" class="text-danger">Could not fetch the data</div>
    <div v-if="documents">
      <div v-for="doc in documents" :key="doc.id">{{ doc.title }}</div>
    </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection'

export default {
  name: 'Home',
  setup() {
    const { error, documents } = getCollection('Lists')

    return { error, documents }
  }
}
</script>
