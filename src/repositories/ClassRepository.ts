import { Service } from 'typedi';
import winston from 'winston';

import { Logger } from '@Decorators/Logger';

import { ClassModel } from '@Models/models';
import { Class } from '@Models/Class';

@Service()
export class ClassRepository {
  constructor(@Logger(module) private logger: winston.Logger) {}

  async findByCourseId(courseId: string) {
    return ClassModel.find({ course: courseId })
      .populate('course')
      .exec();
  }

  async findByFacultyId(facultyId: string) {
    return ClassModel.find({ faculty: facultyId })
      .populate('faculty')
      .exec();
  }

  async insert(cls: Class) {
    return ClassModel.create(cls);
  }

  async updateById(id: string, patch: Partial<Class>) {
    return ClassModel.findByIdAndUpdate(
      id,
      { $set: patch },
      { new: true, runValidators: true },
    ).exec();
  }

  async deleteById(id: string) {
    return ClassModel.findByIdAndDelete(id).exec();
  }
  async findByCode(code: string) {
    this.logger.info('findByCode code: ', code);
    return ClassModel.findOne({
      classCode: code,
    });
  }
}
