<template>
<div class="shadow-lg p-3 mb-5 bg-white right left" style="width:70%">
        <h4> לאור סיום עבודתך  עלייך לקבל מספר החלטות, אנא הסכם לתנאי השימוש </h4>
          <label><input type="checkbox" v-model="checked"> הנני מסכים לתנאי השימוש  </label>

          <ul  v-if = checked style="list-style-type:none;">
            <li><label><input type="checkbox"> הנני מתחייב להחזיר כל דבר פיזי שמצוי ברשותו ושייך למעסיק</label></li>
            <li><label><input type="checkbox"> הנני מתחייב לבער כל מידע אלקטרוני / פיזי שמצוי ברשותו ושייך למעסיק</label></li>
            <li> <label><input type="checkbox"> הנני מתחייב לאשר ניכוי סכומים אשר נמצאתי חייב למעסיק בגמר חשבון</label></li>

            </ul>  
            <br>
          <b-button variant="success" v-on:click='accept()'>אישור</b-button>
          <b-button variant="danger" v-on:click='decline()'> ביטול</b-button>




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
        	accept: function () {
			this.$router.push("/EmployeeMoney");
		},
            decline: function () {
			this.$router.push("/");
		}
    }
}
</script>

<style>

</style>