export interface Register {
    message: string;
    user:    User;
}

export interface User {
    name:       string;
    email:      string;
    updated_at: Date;
    created_at: Date;
    id:         number;
}
