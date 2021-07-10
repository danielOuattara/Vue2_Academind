<template>
    <div>
        <!-- <p> {{ msg }}</p> -->
        <!-- <input type="text" v-model="message_2"/> -->


        <input type="text" :value="msg" @input="changeMessage"/>
        <p> {{ message_2 }}</p>
    </div>
</template>

<script>
    export default {
        props: ['msg'],
        data() {
            return {
                message_2: ''
            }
        },
        methods: {
            changeMessage(event) {
                this.message_2 = event.target.value;
                this.$emit('messageChanged', this.message_2)
            }
        }
    }
</script>