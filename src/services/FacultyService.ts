import { Service } from 'typedi';

import { Faculty } from '@Models/Faculty';

import { FacultyRepository } from '@Repositories/FacultyRepository';

@Service()
export class FacultyService {
  constructor(private facultyRepo: FacultyRepository) {}

  getById(id: string) {
    return this.facultyRepo.findById(id);
  }

  getByCode(code: string) {
    return this.facultyRepo.findByCode(code);
  }

  create(faculty: Faculty) {
    return this.facultyRepo.insert(faculty);
  }

  update(id: string, patch: Partial<Faculty>) {
    return this.facultyRepo.updateById(id, patch);
  }

  delete(id: string) {
    return this.facultyRepo.deleteById(id);
  }
}
