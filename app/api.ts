import { UserInfo } from "./types";


export const getAllUserRanking = async (): Promise<UserInfo[]> => {
    const res = await fetch('http://localhost:3001/UserInfo', { cache: "no-store", });
    const UsersRanking = res.json();

    return UsersRanking;
};