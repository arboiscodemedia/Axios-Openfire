const axios = require('axios');

const user = 'user2';
const params={
    'username': user,
    'name' : 'Iam now a new user',
    'email' : 'user2@gmail.com',
    'properties':[
         {
             'key': 'keyname',
             'value': 'value'
         }
    ]
 }
axios.put(`http://127.0.0.1:9090/plugins/restapi/v1/users/${user}`,params,{
    headers:{
        'Authorization': 'pzOhm36cDN92KTWz',
        'Content-Type': 'application/json'
    }
})
.then((res)=>{
    console.log('Successfully update username '+  user );
})
.catch((error)=>{
  var msgerr=error.response.data;
  console.log(msgerr.message);
});