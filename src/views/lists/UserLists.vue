<template>
  <div v-if="Lists">
    <h5 class="display-4">My lists</h5>
    <ListView :Lists="Lists" />
    <br>
    <router-link to="/lists/create"><button type="button" class="btn btn-outline-primary">Create List</button></router-link>
  </div>
  <div v-else>
    <h5 class="display-4 text-muted">You didn't create any list for now</h5>
    <router-link to="/lists/create"><button type="button" class="btn btn-outline-primary">Create List</button></router-link>
  </div>
</template>

<script>
import getUser from '@/composables/getUser'
import getCollection from '@/composables/getCollection'
import ListView from '@/components/ListView'

export default {
  components: { ListView },
  setup() {
    const { user } = getUser()
    const { documents: Lists } = getCollection(
      'Lists',
      ['userId', '==', user.value.uid]
    )

    console.log(Lists)

    return { Lists }
  }
}
</script>

<style>

</style>