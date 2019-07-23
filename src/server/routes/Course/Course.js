const courseCtrl = require('../../controllers/course.controller');

const users = (router) => {

  router.route('/api/matter/create')
    .post(courseCtrl.create);

  router.route('/api/matter/:userId')
    .get(courseCtrl.getCourse)
    .put(courseCtrl.updateCourse)
    .delete(courseCtrl.deleteCourse);

  router.param('userId', courseCtrl.course);

  return router;
}

module.exports = users;