<template>
    <div v-on:click="openClientRequests">
        <b-dropdown-item>
            <div class='notification_container'>
                <span class='notification_text'>{{body}}</span>
                <span class='notification_time'>{{time}}</span>
            </div>
        </b-dropdown-item>
    </div>
</template>

<script>
export default {
    props:{
        body: String,
        time: String,
        user_id: String
    },
    methods:{
        openClientRequests: function(){
        this.$router.push("/EmployeeRequests/"+this.user_id).catch(() => {
            this.$forceUpdate();
          });
        }
    }
}
</script>

<style>
.notification_container{
    display: flex;
    flex-direction: column;
}
.notification_time{
    align-self: flex-end;
    font-size: 75%;
}
</style>