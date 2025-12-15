import {
  Body, Delete, Get, JsonController, Param, Patch, Post,
} from 'routing-controllers';
import { Service } from 'typedi';
import winston from 'winston';
import { ResponseSchema } from 'routing-controllers-openapi';

import { Logger } from '@Decorators/Logger';

import { Class } from '@Models/Class';

import { ClassService } from '@Services/ClassService';

import { CreateClassReq } from '@Rests/types/CreateClassReq';

@Service()
@JsonController('/classes')
export class ClassController {
  constructor(
    @Logger(module) private logger: winston.Logger,
    private classService: ClassService,
  ) {}

  @Post('/')
  @ResponseSchema(Class, { statusCode: 201 })
  async create(@Body() body: CreateClassReq) {
    const cls = new Class();
    cls.className = body.className;
    cls.classCode = body.classCode;
    cls.course = body.courseId as any ;
    cls.faculty = body.facultyId as any;
    cls.semester = body.semester;
    return await this.classService.create(cls);
  }

  @Get('/:courseId')
  @ResponseSchema(Class, { statusCode: 200 })
  async getByCourse(@Param('courseId') courseId: string) {
    return await this.classService.getByCourseId(courseId);
  }

  @Get('/:facultyId')
  @ResponseSchema(Class, { statusCode: 200 })
  async getByFaculty(@Param('facultyId') facultyId: string) {
    return await this.classService.getByFacultyId(facultyId);
  }

  @Patch('/:id')
  @ResponseSchema(Class, { statusCode: 200 })
  async update(@Param('id') id: string, @Body() body: Partial<CreateClassReq>) {
    return this.classService.update(id, body);
  }

  @Delete('/:id')
  @ResponseSchema(Class, { statusCode: 200 })
  async delete(@Param('id') id: string) {
    return await this.classService.delete(id);
  }
  @Get('/:code')
  @ResponseSchema(Class, { statusCode: 200 })
  async getStudentByCode(@Param('code') code: string) {
    this.logger.info(`getStudentByCode : `, code);
    const student = await this.classService.getClassByCode(code);
    return student;
  }
}