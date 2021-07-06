<template>
  <div></div>
</template>

<script>
import getUser from '@/composables/getUser'
import getCollection from '@/composables/getCollection'

export default {
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