<template>
 <div class="shadow-lg p-3 mb-5 bg-white right left" style="width:70%">
 
    <div >
    <h2 class="mb-3"> שלום {{ this.manager_name }} </h2>
    <div class="mb-4">
    <label> בדף זה תוכל לצפות בכל ההתראות של העובדים שלך שטרם טופלו </label>
    <b-button class="notifBtn" v-on:click='onClick'>דימוי נוטיפיקציה</b-button>
    </div>
    </div>
    <div class="notifications">
           <div  class="container shadow-lg header">
            <span>
                    <p> היסטוריית פעולות עבור הכפופים לך </p>   
            </span>
        </div>
      <div class="container shadow-lg p-3 mb-5 bg-white ">
            <TableView
                :key="action_details.length"
                v-if='action_details != []'
                :headers="table_headers"
                :rows="action_details"   
                :sort="{
                field: 'first_name',
                order: 'asc'
                }"
                :pagination="{
                itemsPerPage: 10,
                align: 'center',
                visualStyle: 'select'
                }"
                css-style="my-css-style"
            >
                <template v-slot:items="{ row }">
                    <td>{{ row.ActionName }}</td>              
                    <td>{{ row.recived_date }}</td>    
                    <td>{{ row.closed_date }}</td>    
                    <td>{{ get_name(row.user_id) }}</td>    
                    <td><b-button v-on:click='onClick'>טפל</b-button></td>          
                </template>
                    <template v-slot:no-data>
                <span>No data</span>
                </template>
            </TableView>
        </div>
    </div>
</div>
</template>

<script>
import DB from '../DB'
import TableView from '../components/TableView'
let not_user_id = '4'



export default {
 components:{
        TableView
    },
 name: "App",
   data() {
      return {
        all_action_details:  DB.action_details,
        users : DB.users,
        action_details : [],
        manager_id : -1,
        manager_name : '',
        table_headers: [
                {label:"שם הפעולה", field:"ActionName", sortable:false, type:"String"},
                {label:"תאריך פתיחה", field:"recived_date", sortable:true, type:"String"},
                {label:"תאריך סגירה", field:"closed_date", sortable:true, type:"String"},
                {label:"שם העובד", field:"Status", sortable:true, type:"Number"},
                {label:"פעולות", field:"action", sortable:true, type:"Number"}
        ],
      }
    },
    mounted(){
         this.get_logged_user_id(this.$root.store.email)
         this.all_action_details.forEach(element => {
            if(element.handler_id == this.manager_id && element.Status == 0){
                this.action_details.push(element)
            }
        })
    },
     methods:{
        onClick: function (){
            this.$emit('notification', {'user_id':not_user_id, 'text':'בקשת פוליסה', 'time':'1hr ago'})
            //DB.action_details.push({'id': not_user_id, 'ActionName': 'הפקדה לאלטושלר', 'Status': 0})
            let toast = this.$toasted.show("לקוח מעוניין בפוליסה חדשה", { 
                theme: "toasted-primary", 
                type: "info",
                position: "top-left",
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
        },
        get_logged_user_id : function(email){
          this.users.forEach(element => {
            if(element.email == email){
                this.manager_id = element.user_id
                this.manager_name = element.fname + " " + element.lname
            }
        })
        },
        get_name : function(id){
          let full_name = ''
          this.users.forEach(element => {
            if(element.user_id == id){
                full_name = element.fname + " " + element.lname
            }
        })
        return full_name
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


.notifBtn{
  float: left;
  margin-left: 25px;
}
.header{
    text-align: right;
    color: white;
    background-color: #343a40;
    font-size: 1em;
}

</style>