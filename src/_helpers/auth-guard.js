import router from "@/router";

export function authGuard(to) {
    const role = localStorage.getItem('role');
    if(role == "admin") {
        return true
    }
    router.push('/')
}