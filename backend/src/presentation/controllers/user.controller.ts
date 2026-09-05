import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { CreateUserUseCase } from 'src/application/use-cases/create-user.use-case';
import { CreateUserDto } from '../../application/dtos/users/create.user.dto';
import { UserResponseDto } from 'src/application/dtos/users/user.response.dto';
import { UserExcetiponFilter } from '../filters/user.exception.filter';
@Controller('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @UseFilters(UserExcetiponFilter)
  @Post('add')
  inscription(@Body() data: CreateUserDto): Promise<UserResponseDto> {
    return this.createUserUseCase.execute(data);
  }
}
