import axios from "axios"

export default function getTransactionHistory() {
    return axios.get("http://127.0.0.1:8000/transactionsHistory")
}