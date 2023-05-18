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
    token?: string
}

interface NewUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  handle: string;
}

export function getUsers(): Promise<DataListEnvelope<User>> {
  return api('users')
}

export function getUser(id: string): Promise<DataEnvelope<User>> {
  return api(`users/${id}`)
}

export function updateUser(user: User): Promise<DataEnvelope<User>> {
  return api('users/update', user, 'PATCH')
}

export function createUser(user: NewUser): Promise<DataEnvelope<User>>{
  console.log({ user })
  return api('users', user, 'POST')
}

export function deleteUser(user:User): Promise<DataEnvelope<User>>{
  return api('users', user, 'DELETE')
}
