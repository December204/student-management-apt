import { ObjectId } from 'mongodb';
import { prop as Property, modelOptions, Severity } from '@typegoose/typegoose';
import { IsString } from 'class-validator';
import { Exclude } from 'class-transformer';

@modelOptions({
  schemaOptions: {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    collection: 'faculties',
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Faculty {
  _id: ObjectId;

  @IsString()
  @Property({ required: true })
  facultyName: string;

  @IsString()
  @Property({ required: true, unique: true })
  facultyCode: string;

  @Exclude()
  @Property({ default: new Date(), required: true })
  createdAt: Date;

  @Exclude()
  @Property({ default: new Date(), required: true })
  updatedAt: Date;
}
