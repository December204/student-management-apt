import { Service } from 'typedi';
import winston from 'winston';

import { Logger } from '@Decorators/Logger';

import { FacultyModel } from '@Models/models';
import { Faculty } from '@Models/Faculty';

@Service()
export class FacultyRepository {
  constructor(@Logger(module) private logger: winston.Logger) {}

  findById(id: string) {
    return FacultyModel.findById(id).exec();
  }

  findByCode(code: string) {
    return FacultyModel.findOne({ facultyCode: code }).exec();
  }

  insert(faculty: Faculty) {
    return FacultyModel.create(faculty);
  }

  updateById(id: string, patch: Partial<Faculty>) {
    return FacultyModel.findByIdAndUpdate(
      id,
      { $set: patch },
      { new: true, runValidators: true },
    ).exec();
  }

  deleteById(id: string) {
    return FacultyModel.findByIdAndDelete(id).exec();
  }
}
