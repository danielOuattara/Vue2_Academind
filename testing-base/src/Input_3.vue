<template>
    <div>
        <input type="text" v-model="message_2"/>
        <p> {{ message_2 }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message_2: ''
            }
        }
    }
</script>