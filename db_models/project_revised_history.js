const Sequelize = require('sequelize'),
    mySequelize = require('../db/ormconfig.js');

const RevisedHistory = mySequelize.define('project_revised_history', {

    id:{
        type: Sequelize.INTEGER, // 数据类型
        field: 'id', // 数据库中字段真是名称，默认就是属性名
        primaryKey: true, // 是否为主键
        unique: true, //是否可重复
        autoIncrement: true //没有这个时插入返回是id是null
    },
    // project_id:{
    //     type: Sequelize.INTEGER,
    //     allowNull:false
    // },
    content:{
        type: Sequelize.STRING,
        allowNull:false
    },
    // people_id:{
    //     type: Sequelize.INTEGER,
    //     allowNull:false
    // },
    created_date:{
        type: Sequelize.DATE
    }
})


module.exports = RevisedHistory;
