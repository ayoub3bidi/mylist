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
                        <input type="file" class="form-control-file" id="exampleFormControlFile1">
                    </div>
                    <div v-if="error" class="text-danger">{{ error }}</div>
                    <button type="button" class="btn btn-outline-dark">Create</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'

    export default {
        setup() {
            const title = ref('')
            const description = ref('')

            const handleSubmit = async () => {
                console.log(title.value, description.value)
            }

            return { title, description }
        }
    }
</script>

<style>
</style>