import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { students } from '../db';
import {
  FindStudentResponseDto,
  CreateStudentDto,
  StudentResponseDto,
  UpdateStudentDto,
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

  updateStudent(payload: UpdateStudentDto, studentId: string) {
    let updatedStudent: StudentResponseDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          id: studentId,
          ...payload,
        };
      } else return student;
    });

    this.students = updatedStudentList;

    return updatedStudent;
  }

  deleteStudent(studentId: string): FindStudentResponseDto {
    let removedStudent;
    const newStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        const id = this.students.indexOf(student);
        removedStudent = this.students.splice(id, 1);
      } else return student;
    });

    this.students = newStudentList;

    return removedStudent;
  }
}
