<template>
    <div>
        <p>IM THE BEST</p>
        <slot name="title"></slot>
        <slot name="content"></slot>
        <hr>
        <p>complete slot</p>
        <slot></slot>

    </div>
</template>

<script>

    export default {
        
    }
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }
    h2 {
        color:red;
    }
</style>