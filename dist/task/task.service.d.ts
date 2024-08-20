import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class TaskService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create({ title, description, priority, photo, dueDate, status, userId, category }: CreateTaskDto): Promise<{
        id: string;
        title: string;
        description: string;
        photo: string;
        dueDate: Date;
        category: string;
        priority: import(".prisma/client").$Enums.Priority;
        status: import(".prisma/client").$Enums.Status;
        userId: string;
    }>;
    findAll(sortByPriority?: boolean): Promise<{
        id: string;
        title: string;
        description: string;
        photo: string;
        dueDate: Date;
        category: string;
        priority: import(".prisma/client").$Enums.Priority;
        status: import(".prisma/client").$Enums.Status;
        userId: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        photo: string;
        dueDate: Date;
        category: string;
        priority: import(".prisma/client").$Enums.Priority;
        status: import(".prisma/client").$Enums.Status;
        userId: string;
    }>;
    findByCategory(category: string): Promise<{
        id: string;
        title: string;
        description: string;
        photo: string;
        dueDate: Date;
        category: string;
        priority: import(".prisma/client").$Enums.Priority;
        status: import(".prisma/client").$Enums.Status;
        userId: string;
    }[]>;
    update(id: string, { title, description, priority, photo, dueDate, status, userId, category }: UpdateTaskDto): Promise<{
        id: string;
        title: string;
        description: string;
        photo: string;
        dueDate: Date;
        category: string;
        priority: import(".prisma/client").$Enums.Priority;
        status: import(".prisma/client").$Enums.Status;
        userId: string;
    }>;
    remove(id: string): Promise<string>;
}
