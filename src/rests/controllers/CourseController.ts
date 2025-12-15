import { Body, Delete, Get, HttpCode, JsonController, Param, Patch, Post, Put } from 'routing-controllers';
import { Service } from 'typedi';
import winston from 'winston';
import { ResponseSchema } from 'routing-controllers-openapi';

import { Logger } from '@Decorators/Logger';

import { Course } from '@Models/Course';

import { CourseService } from '@Services/CourseService';

import { CreateCourseReq } from '@Rests/types/CreateCourseReq';

@Service()
@JsonController('/courses')
export class CourseController {
  constructor(
    @Logger(module) private readonly logger: winston.Logger,
    private courseService: CourseService,
  ) {}
  @Post('/')
  @ResponseSchema(Course, { statusCode: 201 })
  async create(@Body() body: CreateCourseReq) {
    const c = new Course();
    c.courseName = body.courseName;
    c.courseCode = body.courseCode;
    c.credits= body.credits;
    const createdC = await this.courseService.create(c);
    return createdC;}
  @Get('/:code')
  @ResponseSchema(Course, { statusCode: 200 })
  async getByCode(@Param('code') code: string) {
    return await this.courseService.getByCode(code);
  }

  @Patch('/:id')
  @ResponseSchema(Course, { statusCode: 200 })
  async update(@Param('id') id: string, @Body() body: Partial<Course>) {
    return await this.courseService.update(id, body);
  }

  @Delete('/:id')
  @ResponseSchema(Course, { statusCode: 200 })
  async delete(@Param('id') id: string) {
    return await this.courseService.delete(id);
  }
}
