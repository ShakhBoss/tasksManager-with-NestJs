import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create({ fullName, email, password }: CreateUserDto): Promise<{
        id: string;
        fullName: string;
        email: string;
        password: string;
    }>;
    findAll(): Promise<{
        id: string;
        fullName: string;
        email: string;
        password: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        fullName: string;
        email: string;
        password: string;
    }>;
    findEmail(email: string): Promise<{
        id: string;
        fullName: string;
        email: string;
        password: string;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: string): Promise<string>;
}
