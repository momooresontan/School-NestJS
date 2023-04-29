/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import {
  CreateTeacherDto,
  UpdateTeacherDto,
  FindTeacherResponseDto,
  TeacherResponseDto,
} from './dto/teacher.dto';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return 'All teachers';
  }

  @Get('/:id')
  getTeacherById(@Param('id') id: string): FindTeacherResponseDto {
    return `Get teacher with id: ${id}`;
  }

  @Post()
  createTeacher(@Body() body: CreateTeacherDto): TeacherResponseDto {
    return `Create teacher with data ${JSON.stringify(body)}`;
  }

  @Put('/:id')
  updateTeacher(
    @Param('id') id: string,
    @Body() body: UpdateTeacherDto,
  ): TeacherResponseDto {
    return `Update teacher with id: ${id} with data ${JSON.stringify(body)}`;
  }

  @Delete('/:id')
  deleteTeacher() {
    return 'Delete teacher';
  }
}
