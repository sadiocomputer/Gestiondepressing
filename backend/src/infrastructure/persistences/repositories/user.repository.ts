import { User } from 'src/domaines/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IUser,
  IUserRepository,
} from 'src/domaines/repositories/user.repository';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { UserMapper } from '../mappers/user.mapper';
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async create(user: IUser): Promise<User> {
    const ormEntity = this.userRepository.create(user);
    const saveData = await this.userRepository.save(ormEntity);
    return UserMapper.toDomain(saveData);
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { email } });
    return user ? UserMapper.toDomain(user) : null;
  }
}
