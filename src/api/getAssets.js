import axios from "axios";

export default function getAssets() {
    return axios.get("http://127.0.0.1:8000/login");
}