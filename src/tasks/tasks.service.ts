import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  create(createTaskDto: Prisma.TaskCreateInput) {
    return this.prisma.task.create({
      data: createTaskDto
    });
  }

  findAll() {
    return this.prisma.task.findMany();
  }

  findOne(bookWhereUniqueInput: Prisma.TaskWhereUniqueInput) {
    return this.prisma.task.findUnique({
      where: bookWhereUniqueInput
    });
  }

  update(where: Prisma.TaskWhereUniqueInput, data: Prisma.TaskUpdateInput) {
    return this.prisma.task.update({
      data,
      where,
    })
  }

  remove(where: Prisma.TaskWhereUniqueInput) {
    return this.prisma.task.delete({
      where
    });
  }
}
