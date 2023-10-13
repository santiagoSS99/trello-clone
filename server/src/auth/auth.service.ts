import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import * as bcrypt from 'bcrypt'
import { LoginUserDto, CreateUserDto } from './dto';

import { User } from './entities/user.entity';
@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}
  async create(createUserDto: CreateUserDto) {
    
    try {
      const {password, ...userData} = createUserDto
      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync(password, 12)
      })
      await this.userRepository.save(user)
      return{
        ...user,
        message: 'User created successfully'
      }
    } catch (error) {
      
    }
  }

  async login(loginUserDto: LoginUserDto){

    const {password, email} = loginUserDto
    const user = await this.userRepository.findOne({
      where: {email},
      select: {password:true, email:true}
    });

    if (!user)
      throw new UnauthorizedException('credentials are not valid, please try again');
    
    if(bcrypt.compareSync(password, user.password))
    throw new UnauthorizedException('credentials are not valid, please try again');

      return {
      user
    }
    }
  }

