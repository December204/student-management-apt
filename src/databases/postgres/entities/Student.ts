import { Field, Int, ObjectType } from 'type-graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

import { Class } from '@Entities/Class';

@Entity({
  name: 'student',
})
@ObjectType()
export class Student {
  @PrimaryGeneratedColumn()
  @Field(of => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  code: string;

  @ManyToOne(() => Class, (classRoom) => classRoom.students)
  @JoinColumn({ name: 'class_id' })
  classRoom: Class;
}
