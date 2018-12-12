<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <p>Nick is Awesome!!!</p>
                <p>Nick is Dope!!!</p>
                
                <button @click="selectedComponent = 'sapSaping'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default Content</p>
                    </component>
                </keep-alive>   
                <hr>
                <hr>
                <hr>
                <hr>
                <hr>
                <app-new></app-new>
                <app-author></app-author>
                <hr>
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
    import Author from './sayings/Author.vue'
    import New from './sayings/New.vue'

    export default {
        data: function() {
            return {
                quoteTitle: 'The Quote',
                selectedComponent: 'sapSaping'
            }
        },
        components: {
            sapSaping: Saying,
            appAuthor: Author,
            appNew: New
        }
        
    }
</script>

<style>
    h3 {
        color:blue;
    }
</style>