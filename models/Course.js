'use strict';

const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  estimatedTime: String,
  materialsNeeded: String
});

CourseSchema.query.populateUser = function() {
  return this.populate('user', 'firstName lastName');
};

module.exports = mongoose.model('Course', CourseSchema);
