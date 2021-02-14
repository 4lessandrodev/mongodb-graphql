import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepo: Repository<Lesson>,
  ) {}

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const lesson = this.lessonRepo.create({
      ...createLessonInput,
      id: uuid(),
    });

    return this.lessonRepo.save(lesson);
  }

  async getLessons(): Promise<Lesson[]> {
    return await this.lessonRepo.find();
  }

  async getLessonById(id: string): Promise<Lesson | null> {
    const lesson = await this.lessonRepo.findOne({ id });
    if (!lesson) {
      return null;
    }
    return lesson;
  }
}
