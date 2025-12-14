import { Body, Delete, Get, JsonController, Param, Patch, Post } from 'routing-controllers';
import { Service } from 'typedi';

import { Course } from '@Models/Course';

import { CourseService } from '@Services/CourseService';

@Service()
@JsonController('/courses')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Post('/')
  create(@Body() body: Course) {
    return this.courseService.create(body);
  }

  @Get('/:code')
  getByCode(@Param('code') code: string) {
    return this.courseService.getByCode(code);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() body: Partial<Course>) {
    return this.courseService.update(id, body);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.courseService.delete(id);
  }
}
