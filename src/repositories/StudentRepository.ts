import { ObjectId } from 'mongodb';
import { Service } from 'typedi';
import winston from 'winston';

import { Logger } from '@Decorators/Logger';

import { StudentModel } from '@Models/models';
import { Student } from '@Models/Student';

@Service()
export class StudentRepository {
  constructor(
    @Logger(module) private logger: winston.Logger,
  ) {}

  async findById(id: string) {
    return StudentModel.findById(id);
  }

  async insert(student: Student) {
    return StudentModel.create(student);
  }

  async findByCode(code: string) {
    this.logger.info('findByCode code: ', code);
    return StudentModel.findOne({
      studentCode: code,
    });
  }
  async updateById(id: string, patch: Partial<Student>) {
    return StudentModel.findByIdAndUpdate(
      id,
      { $set: patch },
      { new: true, runValidators: true },
    ).exec();
  }
  async deleteById(id: string) {
    return StudentModel.findByIdAndDelete(id);
  }
  async updateFullById(id: string, full: Student) {
    return StudentModel.findByIdAndUpdate(
      id,
      { $set: full },
      { new: true, runValidators: true },
    ).exec();
  }
  async findAll() {
    return StudentModel.find();
  }
}
