import { IsString } from 'class-validator';

export class CreateEnrollmentReq {
  @IsString()
  studentId: string;

  @IsString()
  courseId: string;

  @IsString()
  classId: string;

  @IsString()
  semester: string;
}
