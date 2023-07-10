// const fetch = require('node-fetch');
const axios = require('axios');
// module.exports.jobs = async function(req,res){
//     let job = await fetch('')
//                 .then((res)=>res.json('https://www.naukri.com/feeds/api/developer/json/get?'))
//                 .then((res)=>console.log(res))
//     return res.render('jobs',{
//         title:'jobs'
//     })
// }

module.exports.jobs = async function fetchNaukriJobs() {
    try {
      const response = await axios.get('https://www.naukri.com/feeds/api/developer/json/get?', {
        params: {
          keyword: 'react node.js',
          location: 'india'
        }
      });
      console.log("response",response.data.jobs);
      return response.data.jobs;
    } catch (error) {
      console.error('Error fetching jobs from Naukri.com API:', error);
      return [];
    }
  }