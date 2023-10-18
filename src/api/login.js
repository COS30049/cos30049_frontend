import axios from "axios";

export default function login(userObject) {
    return axios.post("url", {
        username: userObject.username,
        password: userObject.passwordRaw,
    });
}