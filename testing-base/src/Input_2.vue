<template>
    <div>
        <p class="param"> {{ param }}</p>
        <p v-for="item,  index in param2" :key="index" class="pays"> {{ item}} </p>
    </div>
</template>

<script>
    export default {
        props: ['param', 'param2'],
        data() {
            return {
                message_2: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
.pays {
    border: 1px solid green;
    color: red;
}
.param {
    color: violet
}
</style>