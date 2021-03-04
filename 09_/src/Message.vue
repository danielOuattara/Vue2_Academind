
<template>
<div>
    <h1> This is VueJS tutorial  </h1>
    <p> Its learning curve is not so easy !</p>
    <hr>
    <app-input-2></app-input-2>
    <hr>
</div>
</template>


// <script>
    import Input_2 from './Input_2.vue';
    export default {
        components: {
            'app-input-2':  Input_2
        }  
    }
</script>