
<template>
<div>
    <hr>
    <h2>Message 2</h2>
    <p> Its learning curve is not so easy !</p>
    <app-input-2 :param="city"></app-input-2>
    <app-input-2 :param2="countries"></app-input-2>

</div>
</template>


<script>
    import Input_2 from './Input_2.vue';
    import Input_3 from './Input_3.vue';
    export default {
        components: {
            'app-input-2':  Input_2,
            'app-input-3':  Input_3
        },

        data() {
            return {
                city: 'Melun',
                countries: [ 'Madagascar', 'Ethopia', 'Burundi']

            }
        }
    }
</script>