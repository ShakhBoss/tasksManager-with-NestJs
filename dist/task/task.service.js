"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TaskService = class TaskService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create({ title, description, priority, photo, dueDate, status, userId, category }) {
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
    async findAll(sortByPriority = false) {
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
    async findOne(id) {
        const task = await this.prisma.tasks.findUnique({ where: { id } });
        if (!task)
            throw new common_1.BadRequestException('Task not Found');
        return task;
    }
    async findByCategory(category) {
        return await this.prisma.tasks.findMany({
            where: { category },
        });
    }
    async update(id, { title, description, priority, photo, dueDate, status, userId, category }) {
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
        }
        catch (error) {
            throw new common_1.NotFoundException(`Task with ID ${id} not found`);
        }
    }
    async remove(id) {
        try {
            await this.prisma.tasks.delete({
                where: { id },
            });
            return `Task with ID ${id} has been successfully removed.`;
        }
        catch (error) {
            throw new common_1.NotFoundException(`Task with ID ${id} not found`);
        }
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TaskService);
//# sourceMappingURL=task.service.js.map