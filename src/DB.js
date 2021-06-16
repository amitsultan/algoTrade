action_details = [
            {'user_id': '2', 'ActionName': 'ביצוע ניוד של כספי פיצויים', 'Status': 0,'recived_date': '1/1/1995', 'closed_date': '2/5/2021',  'handler_id': '1'},
            {'user_id': '3', 'ActionName': 'הפקדה לאלטושלר', 'Status': 1,'recived_date': '1/1/1995', 'closed_date': '2/2/2021',  'handler_id': '1'},
            {'user_id': '4', 'ActionName': 'ביצוע ניוד של כספי פיצויים', 'Status': 0,'recived_date': '1/1/1995', 'closed_date': '2/9/2021',  'handler_id': '1'},
            {'user_id': '4', 'ActionName': 'הפקדה לאלטושלר', 'Status': 1,'recived_date': '1/1/1995', 'closed_date': '2/7/2021',  'handler_id': '1'},
]

user_not = ['bullshitttttt']

users = [
    {
    'user_id': '1',
    'email': 'manager@gmail.com',
    'password': '1234',
    'fname': 'עמית',
    'lname': 'סולטן',
    'rank':'מנהל',
    'bday': '8/2/1995',
    'phone_number': '050-380-6497',
    'id_number': '205975444'},
    
    {
    'user_id': '2',
    'email': 'noa@gmail.com',
    'password': '1234',
    'fname': 'נועה',
    'lname': 'וייס',
    'rank':'ניקיון',
    'bday': '8/2/1995',
    'phone_number': '050-380-6497',
    'id_number': '205975444'
    },

    {
    'user_id': '3',
    'email': 'ziv@gmail.com',
    'password': '1234',
    'fname': 'זיו',
    'lname': 'גורה',
    'rank':'ניקיון',
    'bday': '8/2/1995',
    'phone_number': '050-380-6497',
    'id_number': '205975444'
    },

    {
    'user_id': '4',
    'email': 'ohad@gmail.com',
    'password': '1234',
    'fname': 'אוהד',
    'lname': 'נווה',
    'rank':'ניקיון',
    'bday': '3/5/1992',
    'phone_number': '050-380-6497',
    'id_number': '205975444'
    }
]

exports.action_details = action_details;
exports.users = users;