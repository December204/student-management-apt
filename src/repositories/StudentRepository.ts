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
}
