
<template>
<div id="#message">
    <h1> {{ message_2}} </h1>
    <p> Its learning curve is not so easy !</p>
    <hr>
    <app-input-2 :msg="message" @messageChanged="message_2= $event"></app-input-2>
    <hr>
</div>
</template>


 <script>
    import Input_2 from './Input_2.vue';
    export default {
        data() {
            return {
                message_2:'Using Props to share data',
            }

        },
        components: {
            'app-input-2':  Input_2
        }  
    }
</script>

<style scoped>

#message {
    width: 80%!important;
    height: 200px!important;
    border: 2px solid blue!important;
    background: lightblue!important;
}
 
</style>
