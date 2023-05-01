/* eslint-disable prettier/prettier */
import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  CreateStudentDto,
  UpdateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(): FindStudentResponseDto[] {
    return this.studentService.getStudent();
  }

  @Get('/:id')
  getStudentById(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): FindStudentResponseDto {
    return this.studentService.getStudentById(id);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    //console.log(body);
    return this.studentService.createStudent(body);
  }

  @Put('/:id')
  updateStudent(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return this.studentService.updateStudent(body, id);
  }

  @Delete('/:id')
  deleteStudent(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): FindStudentResponseDto {
    return this.studentService.deleteStudent(id);
  }
}
