declare enum Priority {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH"
}
declare enum Status {
    TO_DO = "TO_DO",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED"
}
export declare class CreateTaskDto {
    title: string;
    description: string;
    photo?: string;
    dueDate: Date;
    priority: Priority;
    status: Status;
    userId: string;
    category: string;
}
export {};
