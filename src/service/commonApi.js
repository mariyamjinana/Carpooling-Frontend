import axios from "axios";

export const commonApi = (httpRequest, url, reqBody, reqHeader) => {
    const reqConfig = {
        method: httpRequest,
        url,
        data: reqBody,
        headers: reqHeader ? reqHeader : { "Content-Type": "application/json" },
    };

    return axios(reqConfig)
        .then((result) => {
            return result; 
        })
        .catch((err) => {
            console.error("API Error:", err);

            if (err.response) {
                console.log("Error Response:", err.response);
                return err.response;  
            } 
        });
};
