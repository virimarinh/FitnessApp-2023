import { ref } from "vue";
import data from "../data/users.json";


export interface User {
    id: number;
    firstName: string;
    lastName: string;
    admin: boolean;
    email: string;
    handle: string;
    photo?: string;
}

export function getUsers(): User[]{
     return data.users;
}
