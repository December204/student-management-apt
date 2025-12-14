import { getModelForClass } from '@typegoose/typegoose';

import { Config } from '@Models/Config';
import { Sequence } from '@Models/Sequence';
import { Student } from '@Models/Student';
import { Course } from '@Models/Course';
import { Faculty } from '@Models/Faculty';
import { Class  } from '@Models/Class';
import { Enrollment } from '@Models/Enrollment';

export const SequenceModel = getModelForClass(Sequence, { schemaOptions: { collection: 'sequences' } });
export const ConfigModel = getModelForClass(Config, { schemaOptions: { collection: 'configs' } });
export const StudentModel = getModelForClass(Student, { schemaOptions: { collection: 'students' } });
export const CourseModel = getModelForClass(Course, { schemaOptions : { collection:'course' } });
export const FacultyModel = getModelForClass(Faculty, { schemaOptions : { collection:'faculty' } });
export const ClassModel = getModelForClass(Class, { schemaOptions : { collection:'class' } });
export const EnrollmentModel = getModelForClass(Enrollment, { schemaOptions : { collection:'enrollment' } });