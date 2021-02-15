import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { LessonType } from '../lesson/lesson.type';
import { StudentService } from './student.service';
import { StudentType } from './student.type';
import { CreateStudentInput } from './student.input';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => [StudentType])
  async students() {
    return this.studentService.getStudents();
  }

  @Query(() => StudentType)
  async studentById(@Args('id') id: string) {
    return this.studentService.studentById(id);
  }

  @Mutation(() => LessonType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
