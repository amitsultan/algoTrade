<template>
<div class="shadow-lg p-3 mb-5 bg-white right left" style="width:70%">
        <h4> לאור סיום עבודתך הנך זכאי למענקים הבאים :</h4>
            <br>
          <ul style="list-style-type:none;">
            <li><label> 10,000 ש"ח מענק פרישה שיושלם לך ישירות מהמעסיק בתלוש השכר האחרון </label></li>
            <li><label> 13,500 ש"ח פדיון ימי חופש / פדיון ימי מחלה</label></li>
            <li> <label> 25,000 ש"ח מענק פרישה שצבור בקרנות הפנסיה / ביטוחי המנהלים / קופות הגמל</label></li>

            </ul>  
            <br>
          <b-button v-on:click='onClick()'>המשך</b-button>




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
			this.$router.push("/RoboAdvising");
		}
    }
}
</script>

<style>

</style>