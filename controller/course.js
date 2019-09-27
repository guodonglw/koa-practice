const { getCourseList, getCourseById, getCourseByTime, addCourse, updateCourse, removeCourse  } = require('../service/course');
const jsonMIME = 'application/json';

module.exports = {
  getCourseList: async (ctx, next) => {
    ctx.type = jsonMIME;
    ctx.body = {
      status: 0,
      data: await getCourseList()
    }
  },

  getCourseById: async (ctx, next) => {
    let id = ctx.params.id;
    ctx.type = jsonMIME;
    ctx.body = {
      status: 0,
      data: await getCourseById(id)
    }
  },

  addCourse: async (ctx, next) => {
    ctx.type = jsonMIME;
    await addCourse(ctx.request.body);
    ctx.body = {
      status: 0
    }
  },

  updateCourse: async (ctx, next) => {
    await updateCourse(ctx.params.id, ctx.request.body);
    ctx.body = {
      status: 0
    }
  },

  removeCourse: async (ctx, next) => {
    await removeCourse(ctx.params.id);
    ctx.body = {
      status: 0
    }
  }
  
}