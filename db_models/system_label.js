const Sequelize = require('sequelize'),
  mySequelize = require('../db/ormconfig.js')


const System_label = mySequelize.define('system_label', {
  id: {
    type: Sequelize.INTEGER, // 数据类型
    field: 'id', // 数据库中字段真是名称，默认就是属性名
    primaryKey: true, // 是否为主键
    unique: true, //是否可重复
    autoIncrement: true //没有这个时插入返回是id是null
  },
  label_name:{
    type: Sequelize.STRING,
    allowNull:false
  },
  bg_color:{
    type: Sequelize.STRING,
    defaultValue:'#54c7fc'
  },
  created_time:{
    type:Sequelize.DATE
  }

})

module.exports = System_label