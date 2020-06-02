import axios from "axios";

export default axios.create({
    baseURL: "https://restful.training/api/blog",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",

        // use your own key
        Authorization: "Bearer dToah145Jf3MKtpdRkK2st48XqckPafvv69VYPosy2IMSzYlYp9qnxvEVoMmI98ChA9ccxYTO1SBFe04",
    },
});