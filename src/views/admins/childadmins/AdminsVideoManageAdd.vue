<template>
    <div class="AdminsVideoManageAdd">
        <profile-up-video class="profileUpVideoClass"></profile-up-video>
    </div>
</template>

<script>
    import ProfileUpVideo from "@/views/profile/childprofile/ProfileUpVideo"
    export default {
        name: "AdminsVideoManageAdd",
        components:{
            ProfileUpVideo
        }
    }
</script>

<style scoped>
    .AdminsVideoManageAdd{
        width: 100%;
        background-color: #cdcdcd;
    }
    .profileUpVideoClass{
        margin: 0 auto;
    }
</style>