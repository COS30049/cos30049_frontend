import axios from "axios";

export default function Buy(account, asset) {
    axios.post('http://127.0.0.1:8000/buy', {
        account_token: account.token,
        price: asset.floor_price,
        asset_id: asset.asset_id,
    })
}