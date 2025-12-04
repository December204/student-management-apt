import { IsNumber, IsString, Min } from 'class-validator';

export class TestBody {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  bio: string;
}

export class SumQueryParam {
  @IsNumber()
  @Min(10)
  a: number;

  @IsNumber()
  b: number;
}
