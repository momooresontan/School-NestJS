/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { students } from '../../db';

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const studentId = req.params.id;
    const studentExists = students.some((student) => {
      student.id = studentId;
    });
    if (!studentExists) {
      throw new HttpException('Student not found', 400);
    }
    next();
  }
}
