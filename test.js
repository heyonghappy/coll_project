const exec = require('child_process').exec;
const People = require('./db_models/people')


const _ = require('lodash'),
    Sequelize = require('sequelize'),
    mySequelize = require('./db/ormconfig.js')

// var last = exec('echo 123');
// console.log(last.toString());
// console.log(last.toString().trim());
// last = last && JSON.stringify(last.toString().trim()).slice(1,-1)
// console.log(last);

// free.stdout.on('data', function (data) {
//     console.log('standard output:\n' + data);
// }); 

// var cmdStr = 'curl http://www.weather.com.cn/data/sk/101010100.html';
// console.log('======0')

// exec(cmdStr, function(err,stdout,stderr){
//     console.log('err===',err)
//     console.log('stdout===',stdout)
//     console.log('stderr===',stderr)
//     // if(err){
//     //     console.log('1111==err')
//     //     console.log('get wether api error:'+stderr)
//     // }else{
//     //     console.log('result===')
//     //     console.log(JSON.parse(stdout))

//     // }

// })

// exec('ls -al',function(error,stdout,stderr){
//     if(error){
//         console.log('error:'+error)
//         return;
//     }
//     console.log('stdout===',stdout)
//     console.log('stderr===',typeof stderr)
// })

const parra = async function () {
    let peoples = await People.findAll({
        attributes: ['id', 'chinese_name', 'english_name', 'Avatar'],
        raw: true
    })
    peoples.forEach(item => {
        exec(`echo ${item.chinese_name}`, function (err, stdout, stderr) {
            console.log('err===', err)
            console.log('stdout===', stdout)
            console.log('stderr===', stderr)
        })
    })
}

parra()