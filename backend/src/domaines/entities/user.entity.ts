import { Role } from '../enums/role.enums';
export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public phone: string,
    public password: string,
    public role: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}

  changePassword(hash: string): void {
    this.password = hash;
    this.updateTimestamp();
  }

  updateProfile(name: string, email: string, phone: string): void {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.updateTimestamp();
  }

  upddateRole(newRole: Role): void {
    this.role = newRole;
    this.updateTimestamp();
  }

  private updateTimestamp(): void {
    this.updatedAt = new Date();
  }
}
