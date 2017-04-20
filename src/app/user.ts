export class User {
    id: number;
    userName: Object;
    name:{
        fName: string;
        lName: string;
    };
    password: string;
    loginStatus: boolean;
    email: string
    admin: boolean;
    accessLevel: string;
    services: Object;
    company_id: number
}
