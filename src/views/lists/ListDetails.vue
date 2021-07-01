<template>
  <div v-if="List" class="List-details col-lg-3">
    <br>
    <!-- List information -->
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">{{ List.title }}</h4>
        <img class="img-fluid rounded" :src="List.coverUrl">
      </div>
      <p class="text-center">Created by {{ List.userName }}</p>
      <p class="text-center">{{ List.description }}</p>
      <div class="card-footer text-center">
        <button v-if="ownership" @click="handleDelete" class="btn btn-outline-dark">Delete List</button>
      </div>
    </div>
  </div>
  <div v-if="List" class="col-lg-9">
    <br>
    <!-- List items -->
    <div class="card">
      <p>qdsfqsdf</p>
    </div>
    <div v-if="error" class="text-danger">{{ error }}</div>
  </div>
</template>

<script>
import useDocument from '@/composables/useDocument'
import getDocument from '@/composables/getDocument'
import getUser from '@/composables/getUser'
import { computed } from '@vue/runtime-core'

export default {
    props: ['id'],
    setup(props) {
      const { error, document: List } = getDocument('Lists', props.id)
      const { user } = getUser()
      const { deleteDoc } = useDocument('Lists', props.id)

      const ownership = computed(() => {
        return List.value && user.value && user.value.uid == List.value.userId
      })

      const handleDelete = async () => {
        await deleteDoc()
      }

      return { error, List, ownership, handleDelete }
    }
}
</script>

<style>
</style>