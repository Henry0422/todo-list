import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Prisma } from 'generated/prisma';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: Prisma.TaskCreateInput) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Prisma.TaskWhereUniqueInput) {
    return this.tasksService.findOne({ id: +id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: Prisma.TaskUpdateInput) {
    return this.tasksService.update({ id: +id }, updateTaskDto);
  } 

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove({ id: +id });
  }
}
