import { reactive  } from "vue";
import { useRouter } from "vue-router";
import * as myFetch from "./myFetch";

const session = reactive({
    user: null as User | null,
    isLoading: false,
    messages: [] as {
        msg: string,
        type: "success" | "danger" | "warning" | "info",
    }[],
    redirectUrl: null as string | null,
})
interface User {
    id: number;
    firstName?: string;
    lastName?: string;
    admin?: boolean;
    email: string;
    password: string;
    handle?: string;
    photo?: string;
    token?: string;
}

export function useSession() {
    return session;
}

export function api(url: string, data?: any, method?: string, headers?: any) {
    session.isLoading = true;

    if(session.user?.token){
        headers = {
            "Authorization": 'Bearer ${session.user.token}',
            ...headers,
        }
    }
    
    return myFetch.api(url, data, method, headers)
        .catch(err =>{
            console.error({err});
            session.messages.push({
                msg: err.message ?? JSON.stringify(err),
                type: "danger",
            })
        })
        .finally(() => {
            session.isLoading = false
        })
}

export function useLogin(){
    const router = useRouter();

    return async function() {
        const response = await api("users/login", {
            "email": "marinhev1@newpaltz.edu",
            "password": "password"
        });

        session.user = response.data.user;
        if(!session.user){
            addMessage("User not found", "danger");
            return;
        }

        session.user.token = response.data.token;

        router.push(session.redirectUrl ?? "/");
        session.redirectUrl = null;
    }
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
export function addMessage(msg: string, type: "success" | "danger" | "warning" | "info") {
    console.log({msg, type});
    session.messages.push({
        msg,
        type,
    })
}

export function deleteMessage(index: number) {
    session.messages.splice(index, 1);
}
