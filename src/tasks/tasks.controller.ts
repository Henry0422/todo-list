import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, ParseIntPipe, UseFilters } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception/prisma-client-exception.filter';

@Controller('tasks')
@UseFilters(PrismaClientExceptionFilter)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto); 
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get('listid/:id')
  async findAllByListID(@Param('id', ParseIntPipe) id: number) {
    const tasks = await this.tasksService.findAllByListID(id);
    if (!tasks)
      throw new NotFoundException(`Article with listId: ${id} not found`);
    console.log(tasks[0].id);
    return tasks;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const task = await this.tasksService.findOne(id);
    if (!task)
      throw new NotFoundException(`Article with id: ${id} not found`);
    return task;
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id , updateTaskDto);
  } 

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.remove(id);
  }
}
