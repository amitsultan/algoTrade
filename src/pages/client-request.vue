<template>
    <div class="container shadow-lg p-3 mb-5 bg-white rounded">
        <h>בחירת עובד במוצר בעת הצטרפות או החלפת מוצרים.</h>
        <div class="container shadow-lg p-3 mb-5 bg-white  user_details_div">
            <div class="user_details_column">
                <span>
                    First name: <a>Amit</a>
                </span>
                <span>
                    Last name: <a>Gura</a>
                </span>
                <span>
                    ID: <a>205975444</a>
                </span>
            </div>
            <div class="user_details_column">
                <span>
                    Email: <a>Amit</a>
                </span>
                <span>
                    Phone: <a>Gura</a>
                </span>
                <span>
                    ID: <a>205975444</a>
                </span>
            </div>
        </div>
        <div class="container shadow-lg p-3 mb-5 bg-white  user_actions_div">
            <h>Helo</h>
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
                    <td>{{ row.id }}</td>  
                    <td>{{ row.ActionName }}</td>              
                    <td>{{ row.Status }}</td>    
                    <td><b-button>טפל</b-button></td>          
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

export default {
    components:{
        TableView
    },
    data: () => ({
        table_headers: [
                {label:"ID", field:"id", sortable:true, type:"String"},
                {label:"ActionName", field:"ActionName", sortable:false, type:"String"},
                {label:"Status", field:"Status", sortable:true, type:"Number"},
                {label:"Action", field:"action", sortable:true, type:"Number"}
        ],
        action_details: [
            {'id': '1', 'ActionName': 'הפקדה לאלטושל', 'Status': 0},
            {'id': '2', 'ActionName': 'Withdraw2', 'Status': 1},
            {'id': '3', 'ActionName': 'Withdraw3', 'Status': 1},
            {'id': '4', 'ActionName': 'Withdraw4', 'Status': 0}
            
        ]
    })
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