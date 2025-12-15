import { Field, Int, ObjectType } from 'type-graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Student } from '@Entities/Student';
@Entity({
  name: 'class',
})
@ObjectType()
export class Class {
  @PrimaryGeneratedColumn()
  @Field(of => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  code: string;

  @OneToMany(() => Student, (student) => student.classRoom)
  students: Student[];
}
