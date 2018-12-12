<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.local }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
        <hr>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <hr>
        <div style="height: 1800px"></div>
        <div>
            <p id="data"> Some Extra Data Stuff </p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
          return {
              confirmed: false
          }
        },
        beforeRouteLeave(to, from, next) {
            if (this.confirmed) {
                next();
            } else {
                if (confirm('Are you sure?')) {
                    next();
                } else {
                    next(false);
                }
            }
        }
    }
</script>