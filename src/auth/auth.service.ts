import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import{compare, hash} from 'bcrypt'
import { LoginDto} from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';


@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    private readonly users: UsersService,
  ) {}
  async register({ fullName,email,password }: RegisterDto) {
    const user = await this.users.findEmail(email);

    if (user) throw new ConflictException();
    
    const hashedPas=await hash(password,12);

    const newUser=await this.users.create({
      fullName,
      email,
      password:hashedPas
    });

     const token = this.jwt.sign({id:newUser.id});
     return { data: token };

  }

  async login({ email, password }: LoginDto) {
    const user = await this.users.findEmail(email);

    if (!user) throw new UnauthorizedException();

    const isMatch = await compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException();

    const token = this.jwt.sign({ id: user.id });
    return { data: token };
  }
}
