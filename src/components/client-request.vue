<template>
    <div class="container shadow-lg p-3 mb-5 bg-white rounded">
        <div class="container shadow-lg p-3 mb-5 bg-white  user_details_div">
            <div class="user_details_column">
                <span>
                    שם פרטי: <a>{{ user_details.fname }}</a>
                </span>
                <span>
                    שם משפחה: <a>{{ user_details.lname }}</a>
                </span>
                <span>
                    ת''ז': <a>{{ user_details.id_number }}</a>
                </span>
            </div>
            <div class="user_details_column">
                <span>
                    פלאפון: <a>{{ user_details.phone_number }}</a>
                </span>
                <span>
                    תאריך לידה: <a>{{ user_details.bday }}</a>
                </span>
                <span>
                    תפקיד: <a>{{ user_details.rank }}</a>
                </span>
            </div>
        </div>
        <div class="container shadow-lg p-3 mb-5 bg-white  user_actions_div">
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
                    <td>{{ row.Status == 0 ? 'לא טופל' : 'טופל' }}</td>    
                    <td><b-button v-on:click='onClick'>טפל</b-button></td>          
                </template>
                    <template v-slot:no-data>
                <span>No data</span>
                </template>
            </TableView>
        </div>
        
    </div>
</template>

<script>
import TableView from '../components/TableView'
import { users, action_details } from '../DB'


export default {
    components:{
        TableView
    },
    props:{
        user_id: String
    }
    ,
    data: () => ({
        table_headers: [
                {label:"שם הפעולה", field:"ActionName", sortable:false, type:"String"},
                {label:"תאריך פתיחה", field:"recived_date", sortable:true, type:"String"},
                {label:"תאריך סגירה", field:"closed_date", sortable:true, type:"String"},
                {label:"מצב", field:"Status", sortable:true, type:"Number"},
                {label:"פעולות", field:"action", sortable:true, type:"Number"}
        ],
        user_details: {},
        action_details: []
    }),
    computed:{

    },
    methods:{
        onClick: function (){
            console.log("t")
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
    },
    mounted: function() {
        users.forEach(element => {
            if(element.user_id == this.user_id){
                this.user_details = {
                    'email': element.email,
                    'fname':  element.fname,
                    'lname': element.lname,
                    'rank':element.rank,
                    'bday': element.bday,
                    'phone_number': element.phone_number,
                    'id_number': element.id_number
                }
            }
        });
        action_details.forEach(element => {
            if(element.user_id == this.user_id){
                this.action_details.push(element)
            }
        })
    }
}
</script>


<style lang="scss" scoped>
.user_details_div{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.user_details_column{
    display: flex;
    flex-direction: column;
}
</style>