export class UserNotFoundException extends Error {
  constructor(id: string) {
    super(`Utilisateur avec l 'id  ${id} est introuvable`);
    this.name = 'UserNotFoundException';
  }
}

export class UserAlreadyExistsException extends Error {
  constructor(email: string) {
    super(`Utilisateur avec l'email ${email} existe déjà`);
    this.name = 'UserAlreadyExistsException';
  }
}
