import { timingSafeEqual } from 'crypto';

import { Body, Get, HttpCode, JsonController, Param, Post } from 'routing-controllers';
import { Service } from 'typedi';
import winston from 'winston';
import { ResponseSchema } from 'routing-controllers-openapi';

import { Logger } from '@Decorators/Logger';

import { Student } from '@Models/Student';

import { StudentService } from '@Services/StudentService';

import { CreateStudentReq } from '@Rests/types/CreateStudentReq';

@Service()
@JsonController('/students')
export class StudentController {
  constructor(
    @Logger(module) private readonly logger: winston.Logger,
    private studentService: StudentService,
  ) {}

  @Post('/')
  @ResponseSchema(Student, { statusCode: 201 })
  async createStudent(@Body() body: CreateStudentReq) {
    this.logger.info('createStudent body: ', body);
    const student = new Student();
    student.name = body.name;
    student.studentCode = body.code;
    student.dob = body.dob;
    const createdStu = await this.studentService.createStudent(student);
    return createdStu;
  }

  @Get('/:code')
  @ResponseSchema(Student, { statusCode: 200 })
  async getStudentByCode(@Param('code') code: string) {
    this.logger.info(`getStudentByCode : `, code);
    const student = await this.studentService.getStudentByCode(code);
    return student;
  }
}
