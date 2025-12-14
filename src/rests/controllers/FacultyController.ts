import {
  Body, Delete, Get, JsonController, Param, Patch, Post,
} from 'routing-controllers';
import { Service } from 'typedi';
import winston from 'winston';
import { ResponseSchema } from 'routing-controllers-openapi';

import { Logger } from '@Decorators/Logger';

import { Faculty } from '@Models/Faculty';

import { FacultyService } from '@Services/FacultyService';

import { CreateFacultyReq } from '@Rests/types/CreateFacultyReq';

@Service()
@JsonController('/faculties')
export class FacultyController {
  constructor(
    @Logger(module) private logger: winston.Logger,
    private facultyService: FacultyService,
  ) {}

  @Post('/')
  @ResponseSchema(Faculty, { statusCode: 201 })
  create(@Body() body: CreateFacultyReq) {
    const faculty = new Faculty();
    faculty.facultyName = body.facultyName;
    faculty.facultyCode = body.facultyCode;
    return this.facultyService.create(faculty);
  }

  @Get('/:code')
  @ResponseSchema(Faculty)
  getByCode(@Param('code') code: string) {
    return this.facultyService.getByCode(code);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() body: Partial<CreateFacultyReq>) {
    return this.facultyService.update(id, body);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.facultyService.delete(id);
  }
}
