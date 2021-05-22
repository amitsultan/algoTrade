<template>
 <div class="shadow-lg p-3 mb-5 bg-white rounded left" style="width:70%">
    <h1>
        Welcome to Cell Tracking Tool 
    </h1>
    <div class="home_text">
    Our cell tracking tool is a multi-purpose tool for various microscope images analysis.
    Our goal is to provide an easy way to detect certain states of cells or other moving organisms.
    Our tool will serve for phenomena as Cell Death and Calcium Signaling, hopefully for more in the future.
    <b-button v-on:click='onClick'>דימוי נוטיפיקציה</b-button>
     <br><br>
    </div>
    <br><br>
    <div class="bottom">
    </div>
    <!--<video-player :options="videoOptions"/>-->
</div>
</template>

<script>
import DB from '../DB'

export default {
 name: "App",
     methods:{
        onClick: function (){
            this.$emit('notification', {'user_id':'1', 'text':'בקשת פוליסה', 'time':'1hr ago'})
            DB.action_details.push({'id': '1', 'ActionName': 'הפקדה לאלטושל', 'Status': 0})
            let toast = this.$toasted.show("לקוח מעוניין בפוליסה חדשה", { 
                theme: "toasted-primary", 
                type: "info",
                position: "top-right",
                keepOnHover: true, 
                duration : 5000,
                action: [
                {
                    text : 'מעבר לבקשה',
                    onClick : (e, toastObject) => {
                        console.log("clicked on notification");
                    }
                },
                {
                    text : 'סגור חלון',
                    onClick : (e, toastObject) => {
                        toastObject.goAway(0);
                    }
                }
                ]
                
            });
        }
    }
 }
</script>
<style>
.left {
  font-family: "Comic Sans MS", cursive, sans-serif;
  text-align: left;
  margin-left: 100px;
  margin-top: 30px;
}
.right {
  text-align: right;
  margin-right: 200px;
}
.bottom {
  margin-left: 100px;
}
.gif {
  
  width:320px;
  height:280px;
  margin: 15px 15px 15px 15px;
}
.gif:hover { 
transform: scale(1.1); 
}
.home_text{
  font-size: 6mm ;
  margin: 15px 0px 0px 20px;
  width:95%
}
</style>