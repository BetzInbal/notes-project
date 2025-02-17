import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {UserSchema} from "./entities/user.interface"

@Module({
  imports:[MongooseModule.forFeature([{name:'Uesr',schema:UserSchema}])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
