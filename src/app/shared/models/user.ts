import { Role } from './role';

export class User {
    id: number;
    firstName: String;
    lastName: String;
    email: string;
    role: Role = new Role();
    constructor() { }
}
