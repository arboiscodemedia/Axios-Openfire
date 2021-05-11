const axios = require('axios');
const params={
    'username': 'demo-user',
    'password' : '12345'
 }
axios.post("http://127.0.0.1:9090/plugins/restapi/v1/users",params,{
    headers:{
        'Authorization': 'pzOhm36cDN92KTWz',
        'Content-Type': 'application/json'
    }
})
.then((res)=>{
    console.log('Success create an new user');
})
.catch((error)=>{
  var msgerr=error.response.data;
  console.log(msgerr.message);
});