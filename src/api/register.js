import axios from "axios";

export default function register(userObject)
{
    return axios.post("url", {
        username: userObject.username,
        password: userObject.password,
    });
}