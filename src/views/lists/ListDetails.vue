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
        <button @click="handleDelete" class="btn btn-outline-danger">Delete List</button>
      </div>
    </div>
  </div>
  <div v-if="List" class="col-lg-9">
    <br>
    <!-- List items -->
    <h5 v-if="!List.items.length" class="text-muted">No items have been added to this list yet.</h5>
    <div v-for="item in List.items" :key="item.id">
      <div class="card">
        <div class="card-body">
          <blockquote class="blockquote float-left">
            <p>{{ item.itemName }}</p>
            <footer class="blockquote-footer">{{ item.author }}</footer>
          </blockquote>
          <button v-if="ownership" @click="handleClick(item.id)" class="btn btn-outline-dark float-right">Delete</button>
        </div>
      </div>
      <br>
    </div>
    <AddItem v-if="ownership" :List="List" />
    <div v-if="error" class="text-danger">{{ error }}</div>
  </div>
  <div style="margin-top: 10px" class="col-lg-12">
    <div class="card">
      <div class="card-body">
        <div id="disqus_thread"></div>
        <noscript><a href="https://disqus.com/?ref_noscript"></a></noscript>
      </div>
    </div>
  </div>
</template>

<script>
  import AddItem from '@/components/AddItem.vue'
  import useStorage from '@/composables/useStorage'
  import useDocument from '@/composables/useDocument'
  import getDocument from '@/composables/getDocument'
  import getUser from '@/composables/getUser'
  import {
    computed
  } from '@vue/runtime-core'
  import {
    useRouter
  } from 'vue-router'

  export default {
    props: ['id'],
    components: { AddItem },
    setup(props) {
      const { error, document: List } = getDocument('Lists', props.id)
      const { user } = getUser()
      const { deleteDoc, updateDoc } = useDocument('Lists', props.id)
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

      const handleClick = async (id) => {
        const items = List.value.items.filter((item) => item.id != id)
        await updateDoc({ items }) 
      }
      
      (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://my-list.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
      })();

      return { error, List, ownership, handleDelete, handleClick }
    }
  }
</script>

<style>
</style>