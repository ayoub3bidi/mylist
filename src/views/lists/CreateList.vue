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
                    <button class="btn btn-outline-dark">Create</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'

    export default {
        setup() {
            const title = ref('')
            const description = ref('')
            const file = ref(null)
            const fileError = ref(null)

            const handleSubmit = () => {
                if (file.value) {
                    console.log(title.value, description.value, file.value)
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

            return { title, description, handleSubmit, handleChange, fileError }
        }
    }
</script>

<style>
</style>