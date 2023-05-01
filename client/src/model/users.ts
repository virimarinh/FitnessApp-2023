import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import { api } from "./session";


export interface User {
    id: number;
    firstName: string;
    lastName: string;
    admin: boolean;
    email: string;
    password: string;
    handle: string;
    photo?: string | undefined;
}

export function getUsers(): Promise<DataListEnvelope<User>> {
     return api('users');

}

export function getUser(id: number): Promise<DataListEnvelope<User>> {
    return api('user/${id}')
}

export function createUser(user: User): Promise<DataEnvelope<User>> {
    return api('users', user)
}