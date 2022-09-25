<template>
    <div class="demo-date-picker">
        <div class="block">
            <span class="demonstration">Picker with quick options</span>
            <el-date-picker
                    v-model="value2"
                    type="date"
                    placeholder="Pick a day"
                    :disabled-date="disabledDate"
                    :shortcuts="shortcuts"
            />
        </div>

    </div>
</template>

<script>
    import { value2 , shortcuts , disabledDate } from "@/composables/datepicker"
    export default {
        name: "datepicker",
        setup() {
            return {value2 , shortcuts , disabledDate}
        }
    }
</script>

<style scoped>

</style>