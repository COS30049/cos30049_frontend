import axios from "axios";

export default function register(userObject)
{
    return axios.post("http://127.0.0.1:8000/signup", {
        username: userObject.username,
        password: userObject.password,
    });
}