import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[AuthModule, PrismaModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
