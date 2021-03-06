const User=require('./user.model');

const Course = (sequelize, DataTypes) => {
  return sequelize.define(
    "Course",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING
    },{
      user: {
        associate: models => {
          Course.hasMany(models.User);
        }
      }
    }
  );
};

module.exports = Course;