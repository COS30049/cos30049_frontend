import axios from "axios";

export default function Buy(account, assetID) {
    axios.post('http://127.0.0.1:8000/buy')
}