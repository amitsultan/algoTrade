action_details = [
            {'user_id': '1', 'ActionName': 'הפקדה לאלטושל עמית', 'Status': 0,'recived_date': '1/1/1995', 'closed_date': '2/2/2021',  'handler_id': '2'},
            {'user_id': '1', 'ActionName': 'הפקדה לאלטושל עמית', 'Status': 1,'recived_date': '1/1/1995', 'closed_date': '2/2/2021',  'handler_id': '2'},
            {'user_id': '2', 'ActionName': 'הפקדה לאלטושל אוהד', 'Status': 0,'recived_date': '1/1/1995', 'closed_date': '2/2/2021',  'handler_id': '2'},
            {'user_id': '3', 'ActionName': 'הפקדה לאלטושל נועה', 'Status': 1,'recived_date': '1/1/1995', 'closed_date': '2/2/2021',  'handler_id': '2'},
]

users = [
    {
    'user_id': '1',
    'email': 'manager@gmail.com',
    'password': '1234',
    'fname': 'עמית',
    'lname': 'סולטן',
    'rank':'ניקיון',
    'bday': '8/2/1995',
    'phone_number': '050-380-6497',
    'id_number': '205975444'}
]

exports.action_details = action_details;
exports.users = users;