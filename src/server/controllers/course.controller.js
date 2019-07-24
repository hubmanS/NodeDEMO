const Course = require('../helpers/db.helper').models.Course;

const create = (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({
      error: 'No data received'
    });
  }
  Course.findOrCreate({
    where: {
      email: req.body.email
    },
    attributes: [
      'id',
      'name',
      'user'
    ],
    defaults: req.body
  })
    .then(([course, created]) => {
      if(created) {
        return res.status(200).json(course);
      }
      return res.status(400).json({
        error: 'Course already exists',
        course: course
      });
    })
    .catch((err) => {
      return res.status(500).json({
        error: err.message
      });
    });
}