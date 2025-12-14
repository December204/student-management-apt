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
  create(@Body() body: CreateClassReq) {
    const cls = new Class();
    cls.className = body.className;
    cls.classCode = body.classCode;
    cls.course = body.courseId as any;
    cls.faculty = body.facultyId as any;
    cls.semester = body.semester;
    return this.classService.create(cls);
  }

  @Get('/course/:courseId')
  getByCourse(@Param('courseId') courseId: string) {
    return this.classService.getByCourseId(courseId);
  }

  @Get('/faculty/:facultyId')
  getByFaculty(@Param('facultyId') facultyId: string) {
    return this.classService.getByFacultyId(facultyId);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() body: Partial<CreateClassReq>) {
    return this.classService.update(id, body);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.classService.delete(id);
  }
}
