import { ObjectId } from 'mongodb';
import { prop as Property, modelOptions, Severity, Ref } from '@typegoose/typegoose';
import { IsString } from 'class-validator';
import { Exclude } from 'class-transformer';

import { Student } from '../models/Student';
import { Course } from '../models/Course';
import { Class } from '../models/Class';

@modelOptions({
  schemaOptions: {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    collection: 'enrollments',
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Enrollment {
  _id: ObjectId;

  @Property({ ref: () => Student, required: true })
  student: Ref<Student>;

  @Property({ ref: () => Course, required: true })
  course: Ref<Course>;
@Property({ ref: () => Class, required: true })
  class: Ref<Class>;
  @IsString()
  @Property({ required: true })
  semester: string;

  @Exclude()
  @Property({ default: new Date(), required: true })
  createdAt: Date;

  @Exclude()
  @Property({ default: new Date(), required: true })
  updatedAt: Date;
}
