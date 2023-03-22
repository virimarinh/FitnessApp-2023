import { reactive  } from "vue";
import { useRouter } from "vue-router";
import type { User } from './users';
const session = reactive({
    user: null as User | null,
})



export function useSession() {
    return session;
}

export function login(user: User) {
    session.user = user;
}

export function useLogout() {
    const router = useRouter();

    return function(){
        console.log({router});
        session.user = null;

        router.push("/login");
    }
}