'use client'
import axios from "axios";

type ReturnType = {
    [key: string]: any;
} | null;

export const login = async (email:string, password:string): Promise<ReturnType> => {
    try{
        const res = await axios.post('https://backend-pgnweb265a-uc.a.run.app/login', {
            email,
            password
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        if (res.status != 200){
            throw new Error("Network response is not ok");
        }
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    };
}

export const getProfile = async (token: string): Promise<ReturnType> => {
    try{
        const res = await axios.get(`https://backend-pgnweb265a-uc.a.run.app/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (res.status != 200){
            throw new Error("Network response is not ok");
        }
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    };
}