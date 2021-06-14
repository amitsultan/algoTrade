<template>
  <div class="shadow-lg p-3 mb-5 bg-white right left" style="width:70%">
    <div class='center'>
        <div>
            {{actions[index]}}
        </div>
        <br>
        <br>
        </div>
                <div class="center2">
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
</template>

<script>
    export default {
           data() {
      return {
        index: 0,
        actions: [
                'איסוף מידע ממערכת שכר',
                'חישוב מענק עזיבה ',
                'איסוף מידע ממסלקה פנסיונית',
                'איסוף מידע ממערכת שכר ',
                'חישוב נתוני פיצויים מהקופות השונות',
                'מעביר אותך להמשך התהליך',

        ],
      }
    },
        components: {
        },
	    mounted: function () {
            this.actionHandler()
        },
        methods: {
            actionHandler: function () {
			setTimeout( () => {
                if (this.index < this.actions.length - 1){
                    this.index++
                    this.actionHandler()
                }
                else{
                    this.$router.push("/ManagerDecisions")
                }
            },3000)
		}
        }
    }
</script>

<style>
.center{
      width: 30%;
  margin: 0 auto;
}
.center2{
      width: 20%;
  margin: 0 auto;
}
</style>