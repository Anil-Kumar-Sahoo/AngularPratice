export class Login {
    username: string;
    password: string;

    constructor() {
        this.username = "";
        this.password = "";
    }
}

export interface LoginResponse {
  statusCode: number;
  data: {
    user: {
      _id: string;
      username: string;
      email: string;
      role: 'ADMIN' | 'USER' | string;
    };
  };
  message: string;
  success: boolean;
}
