export interface User {
    id: number;
    name: string;
    icon: string;
    email: string;
}

export interface Posts {
    id: number;
    topic_id: Number;
    user_id: number;
    post_content: string;
    created_at: string;
    updated_at: string;
    user: User;
    Post_HeartPoints: number;
}

export interface UserInfo {
    user_id: number;
    user_name: string;
    User_HeartPoints: number;
    user_icon: string;
    email: string;
}

export interface PostData {
    Posts: [];
}