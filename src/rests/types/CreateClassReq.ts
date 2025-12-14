import { IsOptional, IsString } from 'class-validator';

export class CreateClassReq {
  @IsString()
  className: string;

  @IsString()
  classCode: string;

  @IsString()
  courseId: string;

  @IsString()
  facultyId: string;

  @IsString()
  semester: string;

  @IsOptional()
  @IsString()
  note?: string;
}
