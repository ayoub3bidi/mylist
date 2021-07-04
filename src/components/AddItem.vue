<template>
    <div>
        <button v-if="!showForm" class="btn btn-outline-dark" @click="showForm = true" >Add a new item</button>
        <div v-if="showForm"  class="card">
            <div class="card-header">
                <h3 class="display-4">Add a new item</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Item name" required v-model="itemName">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Author, Artist, Director..." required v-model="author">
                    </div>
                    <button class="btn btn-outline-dark">Add</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useDocument from '@/composables/useDocument'

    export default {
        props: ['List'],
        setup(props) {
            const itemName = ref('')
            const author = ref('')
            const showForm = ref(false)
            const { updateDoc } = useDocument('Lists', props.List.id)

            const handleSubmit = async () => {
                const newItem = {
                    itemName: itemName.value,
                    author: author.value,
                    id: Math.floor(Math.random() * 1000000)
                }
                await updateDoc({
                    items: [...props.List.items, newItem]
                })
                itemName.value = ''
                author.value = ''
            }

            return { itemName, author, showForm, handleSubmit }
        }

    }
</script>

<style>

</style>