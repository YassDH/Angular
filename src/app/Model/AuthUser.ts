export class AuthUser {
  id: string;
  email : string;

  constructor(id: string , email: string) {
    this.id = id;
    this.email = email;
  }
}
