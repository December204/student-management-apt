import { Service } from 'typedi';
import winston from 'winston';

import { Logger } from '@Decorators/Logger';

import { CourseModel } from '@Models/models';
import { Course } from '@Models/Course';

@Service()
export class CourseRepository {
  constructor(
    @Logger(module) private logger: winston.Logger,
  ) {}

  async findById(id: string) {
    return CourseModel.findById(id);
  }

  async findByCode(code: string) {
    return CourseModel.findOne({ courseCode: code });
  }

  async insert(course: Course) {
    return CourseModel.create(course);
  }

  async updateById(id: string, patch: Partial<Course>) {
    return CourseModel.findByIdAndUpdate(
      id,
      { $set: patch },
      { new: true, runValidators: true },
    );
  }

  deleteById(id: string) {
    return CourseModel.findByIdAndDelete(id);
  }
}
