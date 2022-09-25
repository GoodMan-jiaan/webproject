<template>
    <div class="AdminsMain">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "AdminsMain"
    }
</script>

<style scoped>
    .AdminsMain{
        /*background-color: #ff329b;*/
        width: 100%;
        height: 100%;
        box-shadow: 0 8px 24px 0 rgba(0,0,0,0.3);
    }
</style>