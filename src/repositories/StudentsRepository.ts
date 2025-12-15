import { Inject, Service } from 'typedi';
import { DataSource, DeepPartial, EntityRepository, Repository } from 'typeorm';
import winston from 'winston';

import { Logger } from '@Decorators/Logger';

import { Student } from '@Entities/Student';

import { BaseOrmRepository } from '@Repositories/BaseOrmRepository';

@Service()
export class StudentRepository extends BaseOrmRepository<Student> {
  constructor(
    @Logger(module) private logger: winston.Logger,
    @Inject('dataSource') private dataSource: DataSource,
  ) {
    super(dataSource, Student);
  }

  async create(user: DeepPartial<Student>) {
    return this.repo.save(user);
  }
}
