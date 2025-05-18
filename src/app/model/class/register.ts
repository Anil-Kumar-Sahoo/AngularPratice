
// Request Data

export class Register {
    email: string;
    password: string;
    role: string;
    username: string;

    constructor() {
        this.email = "";
        this.password = "";
        this.role = "";
        this.username = ""
    }
}

// Response Data

export interface RegisterResponse {
    statusCode: number;
    data: {
        user: {
            _id: string;
            username: string;
            email: string;
            role: string;
        };
    };
    message: string;
    success: boolean;
}
