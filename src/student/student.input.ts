import { Field, InputType } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @MinLength(1)
  @IsString()
  @Field(() => String)
  firstName!: string;

  @MinLength(1)
  @IsString()
  @Field(() => String)
  lastName!: string;
}
