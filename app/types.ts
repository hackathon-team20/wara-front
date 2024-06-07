export interface User {
    user_id: Number;
    user_name: string;
    user_icon: string;
    email: string;
}

export interface UserInfo {
    user_id: number;
    user_name: string;
    User_HeartPoints: number;
    user_icon: string;
    email: string;
}

export interface PostData {
    Post: [];
}

export interface Post {
    id: Number;
    topic_id: Number;
    user_id: Number;
    post_content: string;
    created_at: string;
    updated_at: string;
    user: User;
    Post_HeartPoints: Number;
}