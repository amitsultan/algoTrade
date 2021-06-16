<template>
<div class="shadow-lg p-3 mb-5 bg-white right left" style="width:70%">
  <div v-if='!showLoading'>
      <label>בשביל לסיים את התהליך אנא בחר באפשרות המתאימה:</label>
      <br>
      <div>
        <label><input type="checkbox" style='margin-left:10px;' v-model="checked">קיים מקום עבודה חדש? </label>
        <div v-if = checked >
        <label  style='margin-left:10px;'> שם העסק</label>
        <input type="text"  style='margin-left:10px;'>
        </div>
        <div>
        <label><input type="checkbox" style='margin-left:10px;'>האם ניתן לשמור את פרטיך על מנת שניתן יהיה להציע לך הצעות שונות עבור החיסכון הפנסיוני בעתיד? </label>
        </div>
      </div>
        <br>
        <div class="center">
        <b-button variant="success" v-on:click='onClick()'>סיום</b-button>
            &nbsp;
        <b-button variant="danger">ביטול</b-button>
        </div>
  </div>
  </div>
</template>

<script>
export default {
           data() {
      return {
        checked: false,
      }
      },
      methods:{
          onClick: function(){
            this.$root.toast("התהליך הושלם בהצלחה", "אינך רשום יותר כעובד עבור המעסיק הנוכחי, הודעה נשלחה למעסיק.", "success");
            this.$router.push("/")
          }
      }
}
</script>

<style>

</style>