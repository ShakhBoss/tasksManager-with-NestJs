import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async create({ fullName, email, password }: CreateUserDto) {
    const hashedPas = await hash(password, 12);

    const data = {
      fullName,
      email,
      password: hashedPas,
    };

    return await this.prisma.users.create({ data });
  }

  async findAll() {
    return await this.prisma.users.findMany();
  }

 async findOne(id: string) {
    const user= await this.prisma.users.findUnique({where:{id}});
if(!user) throw new BadRequestException("User not Found")
    return user
  }
 async findEmail(email: string) {
    const user= await this.prisma.users.findFirst({where:{email}});

    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    await this.findOne(id)
    await this.prisma.users.delete({where:{id}})
    return `This action removes a #${id} user`;
  }
}
