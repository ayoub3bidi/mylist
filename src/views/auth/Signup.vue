<template>
  <div class="col-lg-6">
                <h2 class="display-4" style="color:#3662E8;">Let's share your passion with others !</h2>
                <br>
                <div class="card">
                    <div class="card-header">
                        <h3 class="display-4">Sign up!</h3>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="handleSubmit">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Display name" v-model="displayName">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="E-mail address" v-model="email">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password" v-model="password">
                            </div>
                            <div v-if="error" class="text-danger">{{ error }}</div>
                            <button v-if="!isPending" style="margin: 25px;" class="btn btn-primary">Sign up</button>
                            <button v-if="isPending" disabled style="margin: 25px;" class="btn btn-primary">Loading...</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <img class="img-fluid" src="https://i.ibb.co/rZ6LdFQ/undraw-Connected-re-lmq2.png" alt="connect">
                <h6 class="display-4 text-center">Create and share your lists about anything you like.</h6>
            </div>
</template>

<script>
import useSignup from '@/composables/useSignup'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const { error, signup, isPending } = useSignup()

        const email = ref('')
        const password = ref('')
        const displayName = ref('')
        const router = useRouter()

        const handleSubmit = async () => {
            const res = await signup(email.value, password.value, displayName.value)
            router.push({ name: 'Home' })
            if (!error.value) {
                console.log('user signed up')
            }
        }

        return { email, password, displayName, isPending, error, handleSubmit }
    }

}
</script>

<style>

</style>