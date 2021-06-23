<template>
    <div class="col-lg-6">
                <h2 class="display-4" style="color:#3662E8;">Let's share your passion with others !</h2>
                <br>
                <div class="card">
                    <div class="card-header">
                        <h3 class="display-4">Welcome !</h3>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="handleSubmit">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="E-mail address" v-model="email">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password" v-model="password">
                            </div>
                            <div v-if="error" class="text-danger">{{ error }}</div>
                            <button v-if="!isPending" style="margin: 25px;" class="btn btn-primary">Login</button>
                            <button v-if="isPending" disabled style="margin: 25px;" class="btn btn-primary">Loading...</button>
                            <button style="margin: 25px;" class="btn btn-secondary">Create an account</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <img class="img-fluid" src="https://scontent.ftun6-1.fna.fbcdn.net/v/t1.15752-9/203713869_1239637779828372_4566266272145639626_n.png?_nc_cat=106&ccb=1-3&_nc_sid=ae9488&_nc_ohc=7MN7I0JPonEAX9n5uk_&_nc_ht=scontent.ftun6-1.fna&oh=a43a17cd8618f555da5352f471e61b08&oe=60D7EBA0" alt="connect">
                <h6 class="display-4 text-center">Create and share your lists about anything you like.</h6>
            </div>
</template>

<script>
import useLogin from '@/composables/useLogin'
import { ref } from '@vue/reactivity'

    export default {
        setup() {
            const { error, login, isPending } = useLogin()

            const email = ref('')
            const password = ref('')

            const handleSubmit = async () => {
                const res = await login(email.value, password.value)
                if (!error.value){
                    console.log('user logged in')
                }
            }

            return { email, password, handleSubmit, error, isPending }


        }
    }
</script>

<style>

</style>