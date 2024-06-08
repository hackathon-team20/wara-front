import { Posts, Users } from "./types";

export const getAllPosts = async (): Promise<Posts[]> => {
    const res = await fetch('http://localhost:3001/post', { cache: 'no-store' });
    const AllPosts = res.json();

    return AllPosts;
}

export const IncrementHeartPoints = async (id: number): Promise<void> => {
    String(id);
    const res = await fetch(`http://localhost:3001/post/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
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

export const fetchAllUserRanking = async (): Promise<Users> => {
    const res = await fetch('http://localhost:8000/api/user/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        cache: 'no-store'
    })
    const UsersRanking = res.json()
    return UsersRanking
}

// export const getAllUserRa = async (): Promise<Users> => {
//   const res = await fetch('http://localhost:8000/api/user/users', {
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     cache: 'no-store'
//   })
//   const UsersRanking = res.json()
//   return UsersRanking
// }
