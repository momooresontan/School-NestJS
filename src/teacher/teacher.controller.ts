/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  CreateTeacherDto,
  UpdateTeacherDto,
  FindTeacherResponseDto,
  TeacherResponseDto,
} from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return this.teacherService.getTeacher();
  }

  @Get('/:id')
  getTeacherById(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): FindTeacherResponseDto {
    return this.teacherService.getTeacherById(id);
  }

  @Post()
  createTeacher(@Body() body: CreateTeacherDto): TeacherResponseDto {
    return this.teacherService.createTeacher(body);
  }

  @Put('/:id')
  updateTeacher(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateTeacherDto,
  ): TeacherResponseDto {
    return this.teacherService.updateTeacher(body, id);
  }

  @Delete('/:id')
  deleteTeacher(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): FindTeacherResponseDto {
    return this.teacherService.deleteTeacher(id);
  }
}
