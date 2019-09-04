import { apiUrl } from "../apiUrlConfig.json"
import Data from "../common/interfaces/product";

const apiEndPoint = apiUrl + "/products"

var allProducts: Data[] = [];
var error: null;
var isLoaded: boolean = false;

export function getAllProducts() {
    return (fetch("https://localhost:44305/api/products/",
        {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then(
            (result) => {
                debugger
                console.log("from fetch inside", result);
                return result;
            })
        .catch(error => console.warn(error)));
}