import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
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
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): Promise<string>;
}
