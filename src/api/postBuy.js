import axios from "axios";

export default function buy(token, asset) {
    return axios.post('http://127.0.0.1:8000/buy', {
        account_token: token,
        price: asset.floor_price,
        asset_id: asset.asset_id,
    })
}