import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
    baseURL: "https://swapi.dev/api/"
});

// api.interceptors.request.use((req) =>{
//     req.url = `${req.url}.json`;
//     return req;
// });

export default function useApi(url) {

    const [data, setData] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        api.get(url)
            .then(response => {
                setData(response.data);
            })
            .catch((err) => {
                setError({ message: "Não encontado!", status: 404 });
            })
            .finally(() => {
                setIsFetching(false);
            });

    }, [url]);

    return { data, error, isFetching };
}