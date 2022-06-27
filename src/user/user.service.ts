import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  tables: User[] = [];

  findAll(): User[] {
    return this.tables;
  }

  create(createUserDto: CreateUserDto) {
    const user: User = { id: 'ANY ID', ...createUserDto };

    this.tables.push(user);

    return user;
  }
}
