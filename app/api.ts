import { Posts } from "./types";

export const getAllPosts = async (): Promise<Posts[]> => {
    const res = await fetch('http://localhost:3001/post', { cache: 'no-store' });
    const AllPosts = res.json();

    return AllPosts;
}

// export const AddHeartPoints = async(id: string): Promise<Posts> => {
//     const res = await fetch(`http://localhost:3001/post/${id}`, {
//         method: "PUT",
//         headers:{
//             "Content-Type": "application/json",
//         },
//     })
// }