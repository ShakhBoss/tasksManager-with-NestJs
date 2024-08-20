import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from '../users/users.module';

@Module({
  imports:[ UsersModule,JwtModule.registerAsync({
    imports:[ConfigModule],
    useFactory: async(config: ConfigService)=>({
    global:true,
    signOptions: { expiresIn: '24h' },
    secret: await config.get("JWT_SECRET_KEY"),
    }),
    inject:[ConfigService]
  })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
