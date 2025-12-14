import { IsString } from 'class-validator';

export class CreateFacultyReq {
  @IsString()
  facultyName: string;

  @IsString()
  facultyCode: string;
}
