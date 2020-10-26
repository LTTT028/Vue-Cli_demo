<template>
    <div id="app">
        <h1>这是主页</h1>
        <router-link to="/first">First</router-link>
        <router-link to="/second">Second</router-link>
        <router-link to="/msg">留言板</router-link>
        <router-link to="/user">用户</router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>


export default {
    name: 'App',
}
</script>

<style>

</style>
