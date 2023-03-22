import { ref } from "vue";
import data from "../data/users.json";


export interface User {
    id: number;
    firstName: string;
    lastName: string;
    admin: boolean;
    email: string;
    handle: string;
    photo?: string[];
}

// export function getUsers(): User[]{
//     return data.users;
// }

export const users = ref<User[]>([
    {
        "id": 1,
        "firstName": "Viri",
        "lastName": "Marin",
        "admin": true,
        "handle": "vmarin",
        "email": "marinherv1@newpaltz.edu",
        "photo": ["https://github.com/virimarinh/WebDevProjects-2023/blob/fb9bb67130b8812206b62605c110879d99e942fd/client/src/assets/adminPicture.JPG"],
    },
    {
        "id": 2,
        "firstName": "John",
        "lastName": "Smith",
        "admin": false,
        "handle": "jsmith",
        "email": "jsmith@gmail.com"
    },
    {
        "id": 3,
        "firstName": "Lucy",
        "lastName": "Martinez",
        "admin": false,
        "handle": "lucym",
        "email": "lucymartinez@hotmail.com"
    } 
    
]);