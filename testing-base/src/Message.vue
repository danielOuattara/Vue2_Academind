
<template>
<div>
    <h2> Message</h2>
    <app-input-2 :param="city" ></app-input-2>
    <app-input-2 :param2="countries" ></app-input-2>
</div>
</template>


<script>
    // import Input from './Input.vue';
    import Input_2 from './Input_2.vue';
    import Input_3 from './Input_3.vue';
    export default {

        components: {
            // 'app-input':  Input,
            'app-input-2':  Input_2,
            'app-input-3':  Input_3
        },

        data() {
            return {
                city: 'Combs la ville',
                countries: [ 'Mali', 'Ghana', 'Anngola']

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