import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { UpdateUserDto } from './dtos/update-user.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserResponseDto } from './dtos/user-response.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async findUsers(): Promise<User[]> {
    return await this.userRepo.find();
  }

  async findUserById(id: number): Promise<UserResponseDto> {
    const user = await this.userRepo.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`Not found user ${id}`);
    }
    return new UserResponseDto(user);
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const newUser: User = await this.userRepo.save(createUserDto);

    return new UserResponseDto(newUser);
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const existingUser = await this.findUserById(id);
    let updatedUser: User;
    if (existingUser) {
      await this.userRepo.update(id, updateUserDto);
    }
    return { ...existingUser, ...updateUserDto };
  }

  async deleteUser(id: number): Promise<void> {
    const existingUser = await this.findUserById(id);
    if (existingUser) {
      this.userRepo.delete(id);
    }
  }
}
