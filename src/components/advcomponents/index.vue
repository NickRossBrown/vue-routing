<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <p>Nick is Awesome!!!</p>
                <p>Nick is Dope!!!</p>
                <sap-saping></sap-saping>
            </div>
        </div>
    </div>
</template>

<script>
    import Saying from './sayings/Saying.vue'

    export default {
        components: {
            sapSaping: Saying
        }
        
    }
</script>

<style>
</style>