import { User } from '../../../domaines/entities/user.entity';
export class UserResponseDto {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;

  static fromDomain(user: User): UserResponseDto {
    const dto = new UserResponseDto();
    dto.id = user.id.toString();
    dto.name = user.name;
    dto.email = user.email;
    dto.phone = user.phone;
    dto.role = user.role.toString();
    dto.createdAt = user.createdAt;
    dto.updatedAt = user.updatedAt;
    return dto;
  }
}
