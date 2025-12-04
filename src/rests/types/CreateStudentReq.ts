import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateStudentReq {
  @IsString()
  name: string;

  @IsString()
  code: string;

  @IsDateString()
  @IsOptional()
  dob?: Date;
}
