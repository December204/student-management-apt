import { Service } from 'typedi';

import { Class } from '@Models/Class';

import { ClassRepository } from '@Repositories/ClassRepository';

@Service()
export class ClassService {
  constructor(private classRepo: ClassRepository) {}

  getById(id: string) {
    return this.classRepo.findById(id);
  }

  getByCourseId(courseId: string) {
    return this.classRepo.findByCourseId(courseId);
  }

  getByFacultyId(facultyId: string) {
    return this.classRepo.findByFacultyId(facultyId);
  }

  create(cls: Class) {
    return this.classRepo.insert(cls);
  }

  update(id: string, patch: Partial<Class>) {
    return this.classRepo.updateById(id, patch);
  }

  delete(id: string) {
    return this.classRepo.deleteById(id);
  }
}
