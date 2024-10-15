import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './entities/user.interface';
import * as bcrypt from 'bcrypt'



@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModele:Model<IUser>){}
  
  
  async create(createUserDto: CreateUserDto) {
    try {
      const hashPass = await bcrypt.hash(createUserDto.password, 10)
      const newUser = new this.userModele({userName:createUserDto.userName,
         hashedPassword:hashPass,
          email:createUserDto.email
        })
        return await newUser.save()

    } catch (error) {
      throw new BadRequestException()
    }

    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
