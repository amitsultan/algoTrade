<template>
	<div class="container shadow-lg p-3 mb-5 bg-white rounded">
		<div class="container shadow-lg p-3 mb-5 bg-white  user_details_div">
			<b-nav-item-dropdown class="options-menu" right text="פעולות על עובד">
				<div>
					<b-dropdown-item v-for="(option, index) in extra_options" :key="index" v-on:click='onClickExtraOption'>
						{{ option.title }}
					</b-dropdown-item>
				</div>
			</b-nav-item-dropdown>
			<div class="user_details_column">
        <span>
            שם פרטי: <a>{{ user_details.fname }}</a>
        </span>
				<span>
            שם משפחה: <a>{{ user_details.lname }}</a>
        </span>
				<span>
             ת''ז: <a>{{ user_details.id_number }}</a>
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
					v-bind="user_details"
					v-if='action_details != []'
					:key="action_details.length"
					:headers="table_headers"
					:pagination="{
                itemsPerPage: 10,
                align: 'center',
                visualStyle: 'select'
                }"
					:rows="action_details"
					:sort="{
                field: 'first_name',
                order: 'asc'
                }"
					css-style="my-css-style"
			>
				<template v-slot:items="{ row }">
					<td>{{ row.ActionName }}</td>
					<td>{{ row.recived_date }}</td>
					<td>{{ row.closed_date }}</td>
					<td>{{ row.Status == 0 ? 'לא טופל' : 'טופל' }}</td>
					<td>
						<b-button v-on:click='onClick()'>טפל</b-button>
					</td>
				</template>
				<template v-slot:no-data>
					<span>No data</span>
				</template>
			</TableView>
		</div>

	</div>
</template>

<script>
import TableView from '../components/TableView';
import { action_details, users } from '../DB';

export default {
	components: {
		TableView
	},
	props: {
		user_id: String
	}
	,
	data: () => ({
		table_headers: [
			{label: 'שם הפעולה', field: 'ActionName', sortable: false, type: 'String'},
			{label: 'תאריך פתיחה', field: 'recived_date', sortable: true, type: 'String'},
			{label: 'תאריך סגירה', field: 'closed_date', sortable: true, type: 'String'},
			{label: 'מצב', field: 'Status', sortable: true, type: 'Number'},
			{label: 'פעולות', field: 'action', sortable: true, type: 'Number'}
		],
		user_details: {},
		action_details: [],
		extra_options: [
			{title: 'ניוד של כספי פיצויים'},
			{title: 'יציאת עובד לחל"ת / חל"ד'},
			{title: 'ניהול עזיבת עובד'},
		]
	}),
	computed: {	},
	methods: {
		onClickExtraOption: function (e) {
			this.action_details.push({
				'user_id': this.user_id,
				'ActionName': e.target.text,
				'Status': 1,
				'recived_date': new Date().toLocaleDateString(),
				'closed_date': new Date().toLocaleDateString(),
				'handler_id': '2'
			});
			let toast = this.$toasted.show('הפעולה בוצעה', {
				theme: 'toasted-primary',
				type: 'info',
				position: 'top-right',
				keepOnHover: true,
				duration: 5000
			});
		},
		onClick: function () {
			console.log("test")
			this.$router.push("/EmployeLeave");
		}
	},
	mounted: function () {
		users.forEach(element => {
			if (element.user_id == this.user_id) {
				this.user_details = {
					'email': element.email,
					'fname': element.fname,
					'lname': element.lname,
					'rank': element.rank,
					'bday': element.bday,
					'phone_number': element.phone_number,
					'id_number': element.id_number
				};
			}
		});
		action_details.forEach(element => {
			if (element.user_id == this.user_id) {
				this.action_details.push(element);
			}
		});
	}
};
</script>


<style lang="scss" scoped>
.user_details_div {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}

.user_details_column {
	display: flex;
	flex-direction: column;
}

.options-menu {
	list-style: none;
}


.header{
    text-align: right;
    color: white;
    background-color: #343a40;
    font-size: 1em;
}

</style>