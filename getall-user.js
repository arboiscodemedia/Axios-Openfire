const axios = require('axios');
  
axios.get("http://127.0.0.1:9090/plugins/restapi/v1/users",{
    headers:{
        'Authorization': 'pzOhm36cDN92KTWz',
        'Content-Type': 'application/json'
    }
})
.then((res)=>{
    console.log(res.data);
})
.catch((error)=>{
  var msgerr=error.response.data;
  console.log(msgerr.message);
});