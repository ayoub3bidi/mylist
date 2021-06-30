<template>
<div v-if="error" class="text-danger">{{ error }}</div>
  <div v-if="List" class="List-details col-lg-3">
    <br>
    <!-- List information -->
    <div class="card">
      <div class="card-header">
        <img class="img-fluid rounded" :src="List.coverUrl">
      </div>
      <h4 class="text-center">{{ List.title }}</h4>
      <p class="text-center">Created by {{ List.userName }}</p>
      <div class="card-footer">
        <p class="text-center">{{ List.description }}</p>
      </div>
    </div>
  </div>
  <div v-if="List" class="col-lg-9">
    <br>
    <!-- List items -->
    <div class="card">
      <p>qdsfqsdf</p>
    </div>
  </div>
</template>

<script>
import getDocument from '@/composables/getDocument'

export default {
    props: ['id'],
    setup(props) {
      const { error, document: List } = getDocument('Lists', props.id)

      return { error, List }
    }
}
</script>

<style>
</style>