<template>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <!-- Logo -->
        <router-link to="/">
            <a class="navbar-brand">
                <img style="height: 40px; width: auto;"
                    src="https://i.ibb.co/DrRdrZn/131327971-551271542540247-857425459684088499-n.png"
                    alt="My List Logo">
            </a>
        </router-link>

        <!-- Toggler/collapsibe Button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar links -->
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <div class="col-lg-11">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Create List</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">My lists</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Hi there, {{Name}} </a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-1">
                <button @click="handleClick" type="button" class="btn btn-outline-light text-light">Logout</button>
            </div>
        </div>

    </nav>
</template>

<script>
import useLogout from '@/composables/useLogout'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const { logout } = useLogout()
        const router = useRouter()

        const handleClick = async () => {
            await logout()
            console.log('user logged out')
            router.push({ name: 'Login' })
        }

        return { handleClick }
    }
}
</script>

<style>

</style>