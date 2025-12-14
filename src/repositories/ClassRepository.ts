import { Service } from 'typedi';
import winston from 'winston';

import { Logger } from '@Decorators/Logger';

import { ClassModel } from '@Models/models';
import { Class } from '@Models/Class';

@Service()
export class ClassRepository {
  constructor(@Logger(module) private logger: winston.Logger) {}

  findById(id: string) {
    return ClassModel.findById(id)
      .populate(['course', 'faculty'])
      .exec();
  }

  findByCourseId(courseId: string) {
    return ClassModel.find({ course: courseId })
      .populate(['course', 'faculty'])
      .exec();
  }

  findByFacultyId(facultyId: string) {
    return ClassModel.find({ faculty: facultyId })
      .populate(['course', 'faculty'])
      .exec();
  }

  insert(cls: Class) {
    return ClassModel.create(cls);
  }

  updateById(id: string, patch: Partial<Class>) {
    return ClassModel.findByIdAndUpdate(
      id,
      { $set: patch },
      { new: true, runValidators: true },
    ).exec();
  }

  deleteById(id: string) {
    return ClassModel.findByIdAndDelete(id).exec();
  }
}
