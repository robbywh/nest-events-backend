import { InputType, PartialType, OmitType } from '@nestjs/graphql';
import { TeacherAddInput } from './teacher-add.input';

@InputType()
export class TeacherEditInput extends PartialType(
  OmitType(TeacherAddInput, ['gender']),
) {}
