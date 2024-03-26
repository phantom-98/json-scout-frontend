'use client'
import axios, { AxiosResponse } from "axios";
import FormData from 'form-data';
import { access } from "fs";

type ReturnType = {
    [key: string]: any;
} | null;

export const register = async (first_name:string, last_name:string, email:string, password:string ) : Promise<string> => {
    try {
        const res = await axios.post('https://api.jsonscout.com/register', {
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
        const res = await axios.get(`https://api.jsonscout.com/verify?token=${token}`);
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
        const res = await axios.post('https://api.jsonscout.com/login', {
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

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.jsonscout.com/logout',
        headers: { 
          'Authorization': `Bearer ${token}`
        }
      };
      
      axios.request(config)
      .then((response) => {
      })
      .catch((error) => {
      });
    }

export const getProfile = async (token: string): Promise<any> => {

    interface ErrorResponse {
        data?: any;
        status?: number;
        // ... add other relevant properties
    }

    try{
        const res = await axios.get(`https://api.jsonscout.com/profile`, {
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

export const sendemail = async (email:string): Promise<string> => {

    try {
        const res = await axios.post('https://api.jsonscout.com/forgot', {
            email,
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

export const resetpassword = async (token:string, password:string): Promise<string> => {

    try {
        const res = await axios.post(`https://api.jsonscout.com/reset?token=${token}`, {
            password,
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


export const updateProfile = async (token:string, first_name:string, last_name:string, email:string, current_password:string, new_password:string): Promise<string> => {

    const FormData = require('form-data');
    let data = new FormData();
    data.append('first_name', first_name);
    data.append('last_name', last_name);
    data.append('email', email);
    if(current_password && new_password) {
        data.append('current_password', current_password);
        data.append('new_password', new_password);
    }

    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.jsonscout.com/profile',
    headers: { 
        'Authorization': `Bearer ${token}`
    },
    data : data
    };

    return axios.request(config)
    .then((response) => {
    return "success"
    })
    .catch((error) => {
        return "error"
    });
}

export const refresh = async (token:string): Promise<string> => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.jsonscout.com/refresh',
        headers: { 
          'Authorization': `Bearer ${token}`
        }
      };
      
      return axios.request(config)
      .then((response) => {
        // return response.data
        return response.data["access_token"];
      })
      .catch((error) => {
        return "error"
      });
}

export const reset = async (token:string): Promise<string> => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.jsonscout.com/api_key/reset',
        headers: { 
          'Authorization': `Bearer ${token}`
        }
      };
      
      return axios.request(config)
      .then((response) => {
        return "Success"
      })
      .catch((error) => {
        return error
      });
}

// Create a new API endpoint to submit a contact form
export const submitContactForm = async (email: string, contactType: string, message: string, recaptcha: string, accessToken: string): Promise<string> => {
        
    const FormData = require('form-data');
    let data = new FormData();
    data.append('contact_email', email);
    data.append('contact_type', contactType);
    data.append('contact_content', message);
    data.append('g-recaptcha-response', recaptcha);

    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.jsonscout.com/contact',
    headers: { 
        'Authorization': `Bearer ${accessToken}`
    },
    data : data
    };

    return axios.request(config)
    .then((response) => {
    return response.data;
    })
    .catch((error) => {
    return error
    });

}