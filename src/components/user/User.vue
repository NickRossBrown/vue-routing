<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    </div>
</template>

<script>
    export default {
        methods: {
            navigateToHome() {

// so this is the general theme of objects from vue itself or from your router in this case, having the
// dollar sign at the beginning to mark that this is not our own object but instead is provided by
// another package to us.
                this.$router.push('/' );
                // this.$router.push({ name: 'home' });
                // this.$router.push({ path: '/' });
            }
        }
    }
</script>