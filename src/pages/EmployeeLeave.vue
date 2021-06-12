<template>
  <div class="shadow-lg p-3 mb-5 bg-white right left" style="width:70%">
    <b-button v-on:click='onClick()'>עזיבה מסוג פיטורין</b-button>
    <b-button v-on:click='onClick()'>עזיבה מסוג התפטרות</b-button>
  </div>
</template>

<script>

export default {
    methods:{
        	onClick: function () {
            console.log("collecting data ... ")
			this.$router.push("/CollectingData");
		}
    }
}
</script>

<style>

</style>