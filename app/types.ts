
export interface Posts {
    id: number;
    topic_id: Number;
    user_id: number;
    post_content: string;
    created_at: string;
    updated_at: string;
    isReviewedByUser: boolean;
    total_hearts: number;
    user: User;
}

export interface PostData {
    Posts: [];
}

export interface Users {
    users: User[]
}

export interface User {
    id: number
    name: string
    email: string
    email_verified_at: string
    created_at: string
    updated_at: string
    icon: string
    is_admin: boolean
    user_total_hearts: number
}
