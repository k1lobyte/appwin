export class User {
    id: string;
    userName: string;
    name: {
        fName: string;
        lName: string;
    };
    password: string;
    loginStatus: boolean;
    email: string;
    admin: boolean;
    accessLevel: string;
    services: [string];
    company_id: string;
}
