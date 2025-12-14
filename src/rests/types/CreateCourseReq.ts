import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCourseReq {
  @IsString()
  courseName: string;

  @IsString()
  courseCode: string;

  @IsNumber()
  credits: number;
}
