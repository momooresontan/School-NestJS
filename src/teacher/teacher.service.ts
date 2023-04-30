import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
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

  createTeacher(payload: CreateTeacherDto): TeacherResponseDto {
    // eslint-disable-next-line prefer-const
    let newTeacher = {
      id: uuid,
      ...payload,
    };

    this.teachers.push(newTeacher);

    return newTeacher;
  }

  updateTeacher(payload: UpdateTeacherDto, teacherId: string) {
    let updatedTeacher: TeacherResponseDto;

    const updatedTeacherList = this.teachers.map((teacher) => {
      if (teacher.id === teacherId) {
        updatedTeacher = {
          id: teacherId,
          ...payload,
        };
      } else return teacher;
    });

    this.teachers = updatedTeacherList;

    return updatedTeacher;
  }

  deleteTeacher(teacherId: string): FindTeacherResponseDto {
    let removedTeacher;
    const newTeacherList = this.teachers.map((teacher) => {
      if (teacher.id === teacherId) {
        const id = this.teachers.indexOf(teacher);
        removedTeacher = this.teachers.splice(id, 1);
      } else return teacher;
    });

    this.teachers = newTeacherList;

    return removedTeacher;
  }
}
