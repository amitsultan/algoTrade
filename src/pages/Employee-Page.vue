<template>
  <div class="employee-page">
      <clientRequest :user_id='user_id'></clientRequest>
  </div>
</template>

<script>
import clientRequest from '../components/client-request'

export default {
    props:{
        user_id: String
    },
    components:{
        clientRequest
    }
}
</script>

<style>

</style>