const Course = require('../model/mongo/course');

module.exports = {
  getCourseList: async () => {
    return await Course.find().sort({
      'startTime.time': 1
    })
  },

  getCourseById: async (id) => {  // 根据id查询课程数据
    return await Course.find({
      id
    })
  },

  addCourse: async (course) => {  // 添加课程数据
    return await Course.create(course)
  },

  updateCourse: async (id, course) => {  // 更新课程数据
    return await Course.update({
      _id: id
    }, course)
  },

  removeCourse: async (id) => {  // 删除课程数据
    return await Course.remove({
      _id: id
    })
  }
}