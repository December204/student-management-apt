import { Service } from 'typedi';

import { Student } from '@Models/Student';

import { StudentRepository } from '@Repositories/StudentRepository';

@Service()
export class StudentService {
  constructor(
    private studentRepo: StudentRepository,
  ) {}

  async getStudentById(id: string) {
    return this.studentRepo.findById(id);
  }

  async getStudentByCode(code: string) {
    return this.studentRepo.findByCode(code);
  }

  async createStudent(student: Student) {
    return this.studentRepo.insert(student);
  }
}
