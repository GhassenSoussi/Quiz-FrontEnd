import { User } from './user';

export class Quiz {
    id: number;
    title: string;
    description: string;
    user: User = new User();
    constructor() { }
}
