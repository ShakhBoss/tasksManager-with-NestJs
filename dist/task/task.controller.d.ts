import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: CreateTaskDto): Promise<{
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
    findAll(sortByPriority: boolean): Promise<{
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
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<{
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
