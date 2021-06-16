<template>
<div class="shadow-lg p-3 mb-5 bg-white right left" style="width:70%">
  <div v-if='!showLoading'>
      <label> האם ברצונך שהמערכת תסייע לך מה לעשות עם הכסף שברשותך ? </label>
      <br>
      <div class="center">
        <b-button variant="success" v-on:click='onClick()'>מאשר</b-button>
         &nbsp;
        <b-button variant="danger" v-on:click='onClick()'>לא מעוניין</b-button>
      </div>
  </div>
  <div v-if='showLoading'>
    <label>{{actions[index]}}</label>
    <br>
    <br>
    <div class="center">
    <vue-ellipse-progress 
      :data="circles"                    
      :progress="progress"
      :angle="-90"
      color="blue"
      :colorFill="colorFillGradient"
      emptyColor="#8ec5fc"
      :emptyColorFill="emptyColorFillGradient"                      
      :size="150"
      :thickness="10"
      emptyThickness="2.5%"
      lineMode="in 10"
      :legend="true"
      :legendValue="180"
      legendClass="legend-custom-style"
      dash="60 0.9"
      animation="reverse 400 200"
      :noData="false"
      :loading="true"                      
      fontColor="white"
      :half="false"
      :gap="10"
      dot="10 blue"
      fontSize="5rem">
      
      <span slot="legend-value">/200</span>
    </vue-ellipse-progress>
    </div>
  </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
export default {
  components: { },
  data() {
    return {
        showLoading: false,
        index: 0,
        actions: [
                'מייצר טופס 161 בהתאם לפרטים שמולאו בשלבים הקודמים ועל ידי המעסיק.',
                'הטפסים מועברים למס הכנסה.',
                'מייצר בקשת משיכה עבור כספי פיצויים מהקופות השונות.',
                'הטפסים ובקשת המשיכה מועברים לקופות הרלוונטיות.',
        ]
    };
  },
  methods:{
    onClick: function(){
      console.log("hello world")
      this.showLoading = true
      this.actionHandler()
    },
  actionHandler: function () {
			setTimeout( () => {
                if (this.index < this.actions.length - 1){
                    this.index++
                    this.actionHandler()
                }
                else{
                    this.$router.push("/EmployeeClosure")
                }
            },3000)
		}
  }
}
</script>

<style>
.center{
      width: 40%;
       margin: auto;
}
</style>