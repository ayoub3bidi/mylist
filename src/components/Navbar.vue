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
            <div v-if="user" class="col-lg-10">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/lists/create">Create List</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/lists/user">My Lists</router-link>
                    </li>
                </ul>
            </div>
            <div v-if="user" class="col-lg-2">
                <div class="row">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" style="margin-right: 5px">Hi there, <span class="text-light">{{ user.displayName }}</span></a>
                    </li>
                    </ul>
                <button @click="handleClick" type="button" class="btn btn-outline-light">Logout</button>
                </div>
            </div>
        </div>

    </nav>
</template>

<script>
    import useLogout from '@/composables/useLogout'
    import getUser from '@/composables/getUser'
    import {
        useRouter
    } from 'vue-router'

    export default {
        setup() {
            const {
                user
            } = getUser()
            const {
                logout
            } = useLogout()
            const router = useRouter()

            const handleClick = async () => {
                await logout()
                console.log('user logged out')
                router.push({
                    name: 'Login'
                })
            }

            return {
                handleClick,
                user
            }
        }
    }
</script>