import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private readonly jwt;
    private readonly users;
    constructor(jwt: JwtService, users: UsersService);
    register({ fullName, email, password }: RegisterDto): Promise<{
        data: string;
    }>;
    login({ email, password }: LoginDto): Promise<{
        data: string;
    }>;
}
