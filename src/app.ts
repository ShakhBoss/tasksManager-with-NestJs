import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './task/task.module';
import { JwtModule } from '@nestjs/jwt';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UsersModule, UploadModule,AuthModule, TaskModule,JwtModule.register({global:true})],
  controllers: [],
  providers: [],
})
export class AppModule {}
