<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <p>Nick is Awesome!!!</p>
                <p>Nick is Dope!!!</p>
                <sap-saping>
                    <h2>Nick is Awesome!!!</h2>
                    <h3> {{ quoteTitle }} </h3>
                    <p>Nick is Dope!!!</p>
                </sap-saping>
            </div>
        </div>
    </div>
</template>

<script>
    import Saying from './sayings/Saying.vue'

    export default {
        data: function() {
            return {
                quoteTitle: 'The Quote',
                selectedComponent: 'appQuote'
            }
        },
        components: {
            sapSaping: Saying
        }
        
    }
</script>

<style>
    h3 {
        color:blue;
    }
</style>