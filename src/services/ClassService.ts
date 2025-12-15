import { Service } from 'typedi';

import { Class } from '@Models/Class';

import { ClassRepository } from '@Repositories/ClassRepository';

@Service()
export class ClassService {
  constructor(private classRepo: ClassRepository) {}

  async getByCourseId(courseId: string) {
    return this.classRepo.findByCourseId(courseId);
  }

  async getByFacultyId(facultyId: string) {
    return this.classRepo.findByFacultyId(facultyId);
  }

  async create(cls: Class) {
    return this.classRepo.insert(cls);
  }

  async update(id: string, patch: Partial<Class>) {
    return this.classRepo.updateById(id, patch);
  }

  async delete(id: string) {
    return this.classRepo.deleteById(id);
  }
  async getClassByCode(code: string) {
    return this.classRepo.findByCode(code);
  }
}
