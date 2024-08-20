import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(payload: RegisterDto): Promise<{
        data: string;
    }>;
    login(payload: LoginDto): Promise<{
        data: string;
    }>;
}
