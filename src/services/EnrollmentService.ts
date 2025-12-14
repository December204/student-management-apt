import { Service } from 'typedi';

import { Enrollment } from '@Models/Enrollment';

import { EnrollmentRepository } from '@Repositories/EnrollmentRepository';

@Service()
export class EnrollmentService {
  constructor(private enrollmentRepo: EnrollmentRepository) {}

  getById(id: string) {
    return this.enrollmentRepo.findById(id);
  }

  getByStudentId(studentId: string) {
    return this.enrollmentRepo.findByStudentId(studentId);
  }

  getByCourseId(courseId: string) {
    return this.enrollmentRepo.findByCourseId(courseId);
  }

  getByClassId(classId: string) {
    return this.enrollmentRepo.findByClassId(classId);
  }

  create(enrollment: Enrollment) {
    return this.enrollmentRepo.insert(enrollment);
  }

  delete(id: string) {
    return this.enrollmentRepo.deleteById(id);
  }
}
