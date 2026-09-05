import { Module } from '@nestjs/common';
import { CreateUserUseCase } from 'src/application/use-cases/create-user.use-case';
import { UserEntity } from 'src/infrastructure/persistences/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from 'src/presentation/controllers/user.controller';
import { UserRepository } from 'src/infrastructure/persistences/repositories/user.repository';
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    {
      provide: 'USER_REPOSITORY',
      useClass: UserRepository,
    },
  ],
  exports: [],
})
export class UserModule {}
