export interface Register {
    message:      string;
    access_token: string;
    token_type:   string;
    expires_in:   number;
    user:         User;
}

export interface User {
    name:       string;
    email:      string;
    updated_at: Date;
    created_at: Date;
    id:         number;
}