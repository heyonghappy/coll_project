const Sequelize = require('sequelize'),
  mySequelize = require('../db/ormconfig.js')

  //缺项目类型 ， 项目负责人，项目成员，项目创建人，项目观察员

const Coll_project = mySequelize.define('coll_projects', {
  id:{
    type: Sequelize.INTEGER, // 数据类型
    field: 'id', // 数据库中字段真是名称，默认就是属性名
    primaryKey: true, // 是否为主键
    unique: true, //是否可重复
    autoIncrement: true //没有这个时插入返回是id是null
  },
  project_name: {
    type: Sequelize.STRING,
    allowNull:false
  },
  project_descrpt: {
    type: Sequelize.STRING,
    allowNull:true
  },
  importance: {
    type:   Sequelize.ENUM,
    values: ['high', 'middle','low']
  },
  start: {
    type: Sequelize.DATE, 
    defaultValue: Sequelize.NOW
  },
  end: {
    type: Sequelize.DATE, 
    defaultValue: Sequelize.NOW
  },
  dof: {
    type: Sequelize.DATE, 
    defaultValue: Sequelize.NOW
  },
  progress: {
    type: Sequelize.INTEGER
  },
  status: {
    type:   Sequelize.ENUM,
    values: [1, 0]
  }
})


module.exports = Coll_project;

