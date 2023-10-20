import axios from "axios";

export default function getUser(username) {
    return axios.post("http://127.0.0.1:8000/account/", {
        username: username,
    });
}