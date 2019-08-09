<template>
    <div id="navbar">
        <nav class="navbar navbar-light sticky-top navbar-expand-md" style="background: rgb(0, 35, 102); border-bottom: 1px solid rgb(221, 221, 221); margin-bottom: 0px; margin-top: 0px;">
            <div class="container">
                <div class="navbar-brand brand-logo">
                <img src="../assets/logo.png" alt="DU Michigan" width="100" class="">
                </div>
            </div>
            <router-link class="nav-link" to="/" style="font-family: 'Teko', sans-serif; font-size: 30px">About</router-link>
            <router-link class="nav-link" to="/rush" style="font-family: 'Teko', sans-serif; font-size: 30px">Rush</router-link>

        </nav>
    </div>
</template>

<script>

export default {
    name: 'Navbar'
}
</script>