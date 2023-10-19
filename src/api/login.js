import axios from "axios";

export default function login(userObject) {
    return axios.post("http://127.0.0.1:8000/login", {
        username: userObject.username,
        password: userObject.password,
    });
}