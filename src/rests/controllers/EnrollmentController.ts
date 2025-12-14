import {
  Body, Delete, Get, JsonController, Param, Post,
} from 'routing-controllers';
import { Service } from 'typedi';
import winston from 'winston';
import { ResponseSchema } from 'routing-controllers-openapi';

import { Logger } from '@Decorators/Logger';

import { Enrollment } from '@Models/Enrollment';

import { EnrollmentService } from '@Services/EnrollmentService';

import { CreateEnrollmentReq } from '@Rests/types/CreateEnrollmentReq';

@Service()
@JsonController('/enrollments')
export class EnrollmentController {
  constructor(
    @Logger(module) private logger: winston.Logger,
    private enrollmentService: EnrollmentService,
  ) {}

  @Post('/')
  @ResponseSchema(Enrollment, { statusCode: 201 })
  create(@Body() body: CreateEnrollmentReq) {
    const enrollment = new Enrollment();
    enrollment.student = body.studentId as any;
    enrollment.course = body.courseId as any;
    enrollment.class= body.classId as any;
    enrollment.semester = body.semester;
    return this.enrollmentService.create(enrollment);
  }

  @Get('/student/:studentId')
  getByStudent(@Param('studentId') studentId: string) {
    return this.enrollmentService.getByStudentId(studentId);
  }

  @Get('/course/:courseId')
  getByCourse(@Param('courseId') courseId: string) {
    return this.enrollmentService.getByCourseId(courseId);
  }

  @Get('/class/:classId')
  getByClass(@Param('classId') classId: string) {
    return this.enrollmentService.getByClassId(classId);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.enrollmentService.delete(id);
  }
}
