
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsEnum,
  IsDateString,
  IsUUID,
} from 'class-validator';

enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

enum Status {
  TO_DO = 'TO_DO',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

export class CreateTaskDto {
  @ApiProperty({ example: 'Solving' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Solving is mathematical....' })
  @IsString()
  description: string;

  @ApiProperty({ example: 'solving.jpg' })
  @IsString()
  @IsOptional()
  photo?: string;

  @ApiProperty({ example: '22.08.2024-22.09.2024' })
  @IsDateString()
  dueDate: Date;

  @ApiProperty({ example: 'Enum: High||Low||Medium' })
  @IsEnum(Priority)
  priority: Priority;

  @ApiProperty({ example: 'Enum: ToDo||inProgress||Complete' })
  @IsEnum(Status)
  status: Status;

  @ApiProperty({ example: 'uuid: fvbdfbdgbdvdsgdfdfbf' })
  @IsUUID()
  userId: string;

  @ApiProperty({ example: 'Mathematical' })
  @IsString()
  category: string;
}
