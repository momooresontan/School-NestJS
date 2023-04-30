import { Injectable } from '@nestjs/common';
import { students, teachers } from '../db';
import {
  FindTeacherResponseDto,
  TeacherResponseDto,
  CreateTeacherDto,
  UpdateTeacherDto,
} from './dto/teacher.dto';

@Injectable()
export class TeacherService {
  private students = students;
  private teachers = teachers;

  getTeacher(): FindTeacherResponseDto[] {
    return this.teachers;
  }

  getTeacherById(teacherId: string): FindTeacherResponseDto {
    return this.teachers.find((teacher) => {
      teacher.id === teacherId;
    });
  }
}
