import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { students } from '../db';
import {
  FindStudentResponseDto,
  CreateStudentDto,
  StudentResponseDto,
} from './dto/student.dto';

@Injectable()
export class StudentService {
  private students = students;
  getStudent(): FindStudentResponseDto[] {
    return this.students;
  }

  getStudentById(studentId: string): FindStudentResponseDto {
    return this.students.find((student) => {
      student.id === studentId;
    });
  }

  createStudent(payload: CreateStudentDto): StudentResponseDto {
    // eslint-disable-next-line prefer-const
    let newStudent = {
      id: uuid,
      ...payload,
    };

    this.students.push(newStudent);

    return newStudent;
  }
}
