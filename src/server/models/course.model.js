const bcrypt = require('bcrypt');
const config = require('../../config');

const Course = (sequelize, DataTypes) => {
  const model = sequelize.define('course', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user: {
      type: DataTypes.User,
      allowNull: false
    },
    associate:(models)=>{
    	Course.hasMany( User,{
    			foreignKey:'userId'
    	});	
    }
  });
  return model;
}

module.exports = Course;