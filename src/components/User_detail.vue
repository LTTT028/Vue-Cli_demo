<template>
    <div>
        id:{{$route.params.id}}<br>
        username:{{$route.params.name}}<br>
        birthday:{{$route.params.bir}}<br>
        content:{{$route.params.content}}
    </div>
</template>

<script>
export default {
    name: "User_detail"
}
</script>

<style scoped>

</style>
