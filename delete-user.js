const axios = require('axios');

const user='demo-user';

axios.delete(`http://127.0.0.1:9090/plugins/restapi/v1/users/${user}`,{
    headers:{
        'Authorization': 'pzOhm36cDN92KTWz',
        'Content-Type': 'application/json'
    }
})
.then((res)=>{
    console.log('Successfully deleted the username '+ user);
})
.catch((error)=>{
  var msgerr=error.response.data;
  console.log(msgerr.message);
});