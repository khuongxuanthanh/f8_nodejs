const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/solarsystem
    storedSolarsystem(req, res, next) {

        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => 
                res.render('me/stored-solarsystem', {
                    deletedCount, 
                    courses: mutipleMongooseToObject(courses),
                })
            )
            .catch(next);
    }

    // [GET] /me/trash/solarsystem
    trashSolarsystem(req, res, next) {
        Course.findDeleted({})
            .then(courses => 
                res.render('me/trash-solarsystem', {
                    courses: mutipleMongooseToObject(courses)
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
