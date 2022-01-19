import { Api } from "../../services/api";
import { IUser } from "./types";

export function sutUserLocalStorage (user: IUser) {
    localStorage.setItem("u", JSON.stringify(user.id));
}

export function getUserLocalStorage () {
    const
}
export async function LoginRequest (email: string, password: string) {
    try{
        const request = await Api.post("login", { email, password });

        return request.data;
    } catch(error) {
        return null;
    }
}