import { ObjectId } from 'mongodb';
import { prop as Property, modelOptions, Severity } from '@typegoose/typegoose';
import { IsString } from 'class-validator';
import { Exclude } from 'class-transformer';

@modelOptions({
  schemaOptions: {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    collection: 'configs',
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Student {
  _id: ObjectId;

  @IsString()
  @Property({ required: true })
  name: string;

  @IsString()
  @Property({ required: true, unique: true })
  studentCode: string;

  @IsString()
  @Property({ required: false })
  dob: Date;

  @Exclude()
  @Property({ default: new Date(), required: true })
  createdAt: Date;

  @Exclude()
  @Property({ default: new Date(), required: true })
  updatedAt: Date;
}
