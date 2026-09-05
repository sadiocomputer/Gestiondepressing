import { User } from 'src/domaines/entities/user.entity';
import { UserEntity } from '../entities/user.entity';

export class UserMapper {
  static toDomain(ormEntity: UserEntity): User {
    return new User(
      ormEntity.id,
      ormEntity.name,
      ormEntity.email,
      ormEntity.phone,
      ormEntity.password,
      ormEntity.role,
      ormEntity.createdAt,
      ormEntity.updatedAt,
    );
  }
}
