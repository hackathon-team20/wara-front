import { Posts } from "./types";

export const getAllPosts = async (): Promise<Posts[]> => {
    const res = await fetch('http://localhost:3001/post', { cache: 'no-store' });
    const AllPosts = res.json();

    return AllPosts;
}

export const IncrementHeartPoints = async (id: number): Promise<Posts> => {
    String(id);
    const res = await fetch(`http://localhost:3001/post/7`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    });

    const NewPosts = res.json();
    return NewPosts;
}

export const DecrementHeartPoints = async (id: number): Promise<void> => {
    String(id);
    const res = await fetch(`http://localhost:3001/post/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
}