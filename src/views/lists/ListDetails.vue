<template>
  <div v-if="List" class="List-details col-lg-3">
    <br>
    <!-- List information -->
    <div class="card">
      <div class="card-header">
        <h4 class="text-center">{{ List.title }}</h4>
        <img class="img-fluid rounded" :src="List.coverUrl">
        <p style="margin: 10px" class="text-center">Created by {{ List.userName }}</p>
      </div>
      <p style="margin: 10px" class="text-center">{{ List.description }}</p>
      <div v-if="ownership" class="card-footer text-center">
        <button @click="handleDelete" class="btn btn-outline-dark">Delete List</button>
      </div>
    </div>
  </div>
  <div v-if="List" class="col-lg-9">
    <br>
    <!-- List items -->
    <AddItem v-if="ownership" :List="List" />
    <div v-if="error" class="text-danger">{{ error }}</div>
  </div>
</template>

<script>
import AddItem from '@/components/AddItem.vue'
import useStorage from '@/composables/useStorage'
import useDocument from '@/composables/useDocument'
import getDocument from '@/composables/getDocument'
import getUser from '@/composables/getUser'
import { computed } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

export default {
    props: ['id'],
    components: { AddItem },
    setup(props) {
      const { error, document: List } = getDocument('Lists', props.id)
      const { user } = getUser()
      const { deleteDoc } = useDocument('Lists', props.id)
      const { deleteImage } = useStorage()
      const router = useRouter()

      const ownership = computed(() => {
        return List.value && user.value && user.value.uid == List.value.userId
      })

      const handleDelete = async () => {
        await deleteImage(List.value.filePath)
        await deleteDoc()
        router.push({ name: 'Home' })
      }

      return { error, List, ownership, handleDelete }
    }
}
</script>

<style>
</style>