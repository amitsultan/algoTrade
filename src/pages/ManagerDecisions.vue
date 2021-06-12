<template>
<div class="shadow-lg p-3 mb-5 bg-white right left" style="width:70%">
          <label><input type="checkbox" v-model="checked">האם ברצונך להוסיף מענקים נוספים לעובד ? </label>
          <div  v-if = checked>
              <label><input > סכום המענק </label>
          </div>
          <div>
              <label><input type="checkbox">האם אתה מאשר את סך הפיצויים לעובד ? </label>
          </div>
          <b-button v-on:click='onClick()'>אישור</b-button>
          <b-button v-on:click='onClick()'>ביטול</b-button>


</div>
</template>

<script>
export default {
           data() {
      return {
        checked: false,
      }
    },
    methods: {
        	onClick: function () {
               this.$root.toast(
              "פרטים",
              "המשך התהליך עבר לידי העובד",
              "success"
            );
			this.$router.push("/");
		}
    }
}
</script>

<style>

</style>