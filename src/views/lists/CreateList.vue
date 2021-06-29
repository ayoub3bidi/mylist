<template>
    <div class="offset-lg-3 col-lg-6">
        <br>
        <div class="card">
            <div class="card-header">
                <h3 class="display-4">Create a new list</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <input type="text" required class="form-control" placeholder="List title..." v-model="title">
                    </div>
                    <div class="form-group">
                        <textarea required class="form-control" placeholder="List description..." rows="3"
                            v-model="description"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Upload list cover image</label>
                        <input type="file" class="form-control-file" @change="handleChange" >
                        <div class="text-danger">{{ fileError }}</div>
                    </div>
                    <div class="text-danger"></div>
                    <button v-if="!isPending" class="btn btn-outline-dark">Create</button>
                    <button v-else disabled class="btn btn-outline-dark">Saving...</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import useStorage from '@/composables/useStorage'
import useCollection from '@/composables/useCollection'
import getUser from '@/composables/getUser'
import { timestamp } from '@/firebase/config'
import { useRouter } from 'vue-router'

    export default {
        setup() {
            const { filePath, url, uploadImage } = useStorage()
            const { error, addDoc } = useCollection('Lists')
            const { user } = getUser()

            const title = ref('')
            const description = ref('')
            const file = ref(null)
            const fileError = ref(null)
            const isPending = ref(false)
            const router = useRouter()

            const handleSubmit = async () => {
                if (file.value) {
                    isPending.value = true
                    await uploadImage(file.value)
                    const res = await addDoc({
                        title: title.value,
                        description: description.value,
                        userId: user.value.uid,
                        userName: user.value.displayName,
                        coverUrl: url.value,
                        filePath: filePath.value,
                        items: [],
                        createdAt: timestamp() 
                    })
                    isPending.value = false
                    if (!error.value) {
                        router.push({ name: 'ListDetails', params: { id: res.id } })
                    }
                }
            }

            // allowed file types
            const types = ['image/png', 'image/jpeg']

            const handleChange = (e) => {
                const selected = e.target.files[0]
                console.log(selected)

                if (selected && types.includes(selected.type)) {
                    file.value = selected
                    fileError.value = null
                } else {
                    file.value = null
                    fileError.value = 'Please select an image file (png or jpg)'
                }
            }

            return { title, description, handleSubmit, handleChange, fileError, isPending }
        }
    }
</script>

<style>
</style>