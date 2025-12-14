import { ObjectId } from 'mongodb';
import {
  prop as Property,
  modelOptions,
  Severity,
  Ref,
} from '@typegoose/typegoose';
import { IsString } from 'class-validator';
import { Exclude } from 'class-transformer';

import { Course } from '../models/Course';
import { Faculty } from '../models/Faculty';

@modelOptions({
  schemaOptions: {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    collection: 'classes',
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Class {
  _id: ObjectId;

  @IsString()
  @Property({ required: true })
  className: string;

  @IsString()
  @Property({ required: true, unique: true })
  classCode: string;

  /** Lớp này thuộc môn học nào */
  @Property({ ref: () => Course, required: true })
  course: Ref<Course>;

  /** Giảng viên / khoa phụ trách */
  @Property({ ref: () => Faculty, required: true })
  faculty: Ref<Faculty>;

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
