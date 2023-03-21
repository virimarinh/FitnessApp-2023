import { reactive  } from "vue";
import { useRouter } from "vue-router";
import { users } from '../model/users';
const session = reactive({
    user: null as User | null,
})

interface User {
    id?: number;
    name: string,
    firstName: string;
    lastName: string;
    email?:string;
    photo?: String;
    token?: string;
    admin: Boolean;
    handle?: string;
}

export function useSession() {
    return session;
}

export function login() {
    session.user = {
        name: "Viridiana Marin",
        firstName: "Viridiana",
        lastName: "Marin",
        admin: true,
        email: "marinhev1@newpaltz.edu",
        handle: "virimarin"
    }
}

export function useLogout() {
    const router = useRouter();

    return function(){
        console.log({router});
        session.user = null;

        router.push("/login");
    }
}