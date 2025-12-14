import { Service } from 'typedi';
import winston from 'winston';

import { Logger } from '@Decorators/Logger';

import { EnrollmentModel } from '@Models/models';
import { Enrollment } from '@Models/Enrollment';

@Service()
export class EnrollmentRepository {
  constructor(@Logger(module) private logger: winston.Logger) {}

  findById(id: string) {
    return EnrollmentModel.findById(id)
      .populate(['student', 'course', 'class'])
      .exec();
  }

  findByStudentId(studentId: string) {
    return EnrollmentModel.find({ student: studentId })
      .populate(['student', 'course', 'class'])
      .exec();
  }

  findByCourseId(courseId: string) {
    return EnrollmentModel.find({ course: courseId })
      .populate(['student', 'course', 'class'])
      .exec();
  }

  findByClassId(classId: string) {
    return EnrollmentModel.find({ class: classId })
      .populate(['student', 'course', 'class'])
      .exec();
  }

  insert(enrollment: Enrollment) {
    return EnrollmentModel.create(enrollment);
  }

  deleteById(id: string) {
    return EnrollmentModel.findByIdAndDelete(id).exec();
  }
}
