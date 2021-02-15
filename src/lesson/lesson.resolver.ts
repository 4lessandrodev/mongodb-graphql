import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query(() => [LessonType])
  async lessons() {
    return this.lessonService.getLessons();
  }

  @Query(() => LessonType)
  async lessonById(@Args('id') id: string) {
    return this.lessonService.getLessonById(id);
  }

  @Mutation(() => LessonType)
  async createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }
}
