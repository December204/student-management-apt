import { Service } from 'typedi';

import { Course } from '@Models/Course';

import { CourseRepository } from '@Repositories/CourseRepository';

@Service()
export class CourseService {
  constructor(private courseRepo: CourseRepository) {}

  getByCode(code: string) {
    return this.courseRepo.findByCode(code);
  }

  create(course: Course) {
    return this.courseRepo.insert(course);
  }

  update(id: string, patch: Partial<Course>) {
    return this.courseRepo.updateById(id, patch);
  }

  delete(id: string) {
    return this.courseRepo.deleteById(id);
  }
}
