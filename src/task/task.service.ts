import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}
  async create({
    title,
    description,
    priority,
    photo,
    dueDate,
    status,
    userId,
    category
  }: CreateTaskDto) {
    await this.findOne(title);
    
    return await this.prisma.tasks.create({
      data: {
        title,
        description,
        priority,
        photo,
        dueDate,
        status,
        userId, 
        category,
      },
    });
  }

  async findAll(sortByPriority: boolean = false) {
    let sortOrder = {};
    if (sortByPriority) {
      sortOrder = {
        orderBy: {
          priority: 'asc',
        },
      };
    }

    return this.prisma.tasks.findMany({
      ...sortOrder,
    });
  }

  async findOne(id: string) {
    const task = await this.prisma.tasks.findUnique({ where: { id } });
    if (!task) throw new BadRequestException('Task not Found');
    return task;
  }

  async findByCategory(category: string) {
    return await this.prisma.tasks.findMany({
      where: { category },
    });
  }

  async update(
    id: string,
    {
      title,
      description,
      priority,
      photo,
      dueDate,
      status,
      userId,
      category
    }: UpdateTaskDto,
  ) {
    try {
     
      const updatedTask = await this.prisma.tasks.update({
        where: { id },
        data: {
          title,
          description,
          priority,
          photo,
          dueDate,
          status,
          userId,
          category,
        },
      });
      return updatedTask;
    } catch (error) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.tasks.delete({
        where: { id },
      });
      return `Task with ID ${id} has been successfully removed.`;
    } catch (error) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }
}
