<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <p>Nick is Awesome!!!</p>
                <p>Nick is Dope!!!</p>
                <sap-saping>
                    <h2 slot="content">Nick is Awesome!!!</h2>
                    <h3 slot="title"> {{ quoteTitle }} </h3>
                    <p slot="content">Nick is Dope!!!</p>
                    <p>this will be rendered last because it is unassigned</p>
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