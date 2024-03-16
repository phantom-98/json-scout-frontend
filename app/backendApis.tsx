'use client'
import axios, { AxiosResponse } from "axios";

type ReturnType = {
    [key: string]: any;
} | null;

export const register = async (first_name:string, last_name:string, email:string, password:string ) : Promise<string> => {
    try {
        const res = await axios.post('https://backend-pgnweb265a-uc.a.run.app/register', {
            first_name,
            last_name,
            email,
            password
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return "Success";
    }  catch (e) {
        if (axios.isAxiosError(e)) {
            return e.response?.data.message;
        } else {
            return "Unknow error";
        }
    }
}

export const verifyEmail = async (token: string) : Promise<boolean> => {
    try {
        const res = await axios.get(`https://backend-pgnweb265a-uc.a.run.app/verify?token=${token}`);
        return true;
    } catch (e) {
        return false;
    }
}


export const signin = async (email:string, password:string): Promise<any> => {

    interface ErrorResponse {
        data?: any;
        status?: number;
        // ... add other relevant properties
    }

    try{
        const res = await axios.post('https://backend-pgnweb265a-uc.a.run.app/login', {
            email,
            password
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return res.data;
    } catch (e: unknown) { // Marking e as unknown is considered best practice
        // Narrow down the type of e and make sure we can access .data
        if (e instanceof Error && 'response' in e) {
            const error = e as Error & { response?: ErrorResponse };
            if (error.response) {
                return error.response.data;
            }
        }
        
        // Handle the non-AxiosError case or return a default value
        return { message: 'An unexpected error occurred.' };
    };
}

export const logout = async (token: string):Promise<void> => {

    interface ErrorResponse {
        data: void | PromiseLike<void>;
        code: number;
        message: string;
        // Add any additional properties that your error responses have
      }

    try {
        const res = await axios.post(`https://backend-pgnweb265a-uc.a.run.app/logout`, {
            header: {
                'Authorization':`Bearer ${token}`
            }
        });

        console.log("success logout===========>",res.data)
    } catch (e: unknown) { // Marking e as unknown is considered best practice
        // Narrow down the type of e and make sure we can access .data
        if (e instanceof Error && 'response' in e) {
            const error = e as Error & { response?: ErrorResponse };
            if (error.response) {
                console.log( "failed logout==========>",error.response.data)
            }
        }
        
       
    }; 
}

export const getProfile = async (token: string): Promise<any> => {

    interface ErrorResponse {
        data?: any;
        status?: number;
        // ... add other relevant properties
    }

    try{
        const res = await axios.get(`https://backend-pgnweb265a-uc.a.run.app/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
       
        return res.data;
    } catch (e: unknown) { // Marking e as unknown is considered best practice
        // Narrow down the type of e and make sure we can access .data
        if (e instanceof Error && 'response' in e) {
            const error = e as Error & { response?: ErrorResponse };
            if (error.response) {
                return error.response.data;
            }
        }
        
        // Handle the non-AxiosError case or return a default value
        return { message: 'An unexpected error occurred.' };
    };
}