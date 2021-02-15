import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentInput } from './student.input';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepo: Repository<Student>,
  ) {}

  async createStudent(studentInput: CreateStudentInput): Promise<Student> {
    const student = this.studentRepo.create({
      ...studentInput,
      id: uuid(),
    });
    return this.studentRepo.save(student);
  }
}
