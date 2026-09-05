import { Inject } from '@nestjs/common';
import { IUserRepository } from 'src/domaines/repositories/user.repository';
import { CreateUserDto } from '../dtos/users/create.user.dto';
import { UserResponseDto } from '../dtos/users/user.response.dto';
import { UserAlreadyExistsException } from 'src/domaines/exceptions/user.exception';

export class CreateUserUseCase {
  constructor(
    @Inject('USER_REPOSITORY') private readonly userRepository: IUserRepository,
  ) {}

  async execute(user: CreateUserDto): Promise<UserResponseDto> {
    const findUser = await this.userRepository.findByEmail(user.email);
    if (findUser) {
      throw new UserAlreadyExistsException(user.email);
    }
    const createdUser = await this.userRepository.create(user);
    return UserResponseDto.fromDomain(createdUser);
  }
}
