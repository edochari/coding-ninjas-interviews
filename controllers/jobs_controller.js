const fetch = require('node-fetch');

module.exports.jobs = async function(req,res){
    let job = await fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then((res)=>res.json())
                .then((res)=>console.log(res))
    return res.render('jobs',{
        title:'jobs'
    })
}