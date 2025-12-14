import { ObjectId } from 'mongodb';
import { prop as Property, modelOptions, Severity } from '@typegoose/typegoose';
import { IsString, IsNumber } from 'class-validator';
import { Exclude } from 'class-transformer';

@modelOptions({
  schemaOptions: {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    collection: 'courses',
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Course {
  _id: ObjectId;

  @IsString()
  @Property({ required: true })
  courseName: string;

  @IsString()
  @Property({ required: true, unique: true })
  courseCode: string;

  @IsNumber()
  @Property({ required: true })
  credits: number;

  @Exclude()
  @Property({ default: new Date(), required: true })
  createdAt: Date;

  @Exclude()
  @Property({ default: new Date(), required: true })
  updatedAt: Date;
}
