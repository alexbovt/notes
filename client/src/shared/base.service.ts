import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {User} from "../features/auth/auth.slice";
import {logout} from "../features/auth/auth.actions";
import {globalActionDispatch} from "../app/app.store";

type InvokeArgs = {
    url: string
    method?: 'get' | 'post' | 'put' | 'delete'
    data?: unknown
}

export type ServiceResponse<T = unknown> = {
    user: User,
    data: T
}


export abstract class BaseService {
    //todo get api url from .env
    protected readonly apiUrl = 'http://localhost:4200/'
    protected abstract readonly controller: string

    private baseHeaders: { [key: string]: string } = {
        'Content-Type': 'application/json'
    }

    protected invoke<T = unknown>(args: InvokeArgs): Promise<ServiceResponse<T>> {
        return new Promise<ServiceResponse<T>>((async (resolve, reject) => {
            const token = localStorage.getItem('token')
            try {
                const {data: {accessToken, user, data}} = await this.invokeCore<{ accessToken: string, user: User, data: T }>({
                    ...args,
                    headers: {
                        ...this.baseHeaders,
                        ...(token && this.getAuthorizationHeader(token))
                    }
                })

                if (accessToken && user) {
                    localStorage.setItem('token', accessToken)
                    //todo global dispatch login
                    resolve({user, data})
                } else {
                    reject({
                        message: 'No Access Token'
                    })
                }
            } catch (error) {
                console.error(error)
                reject(error)
            }
        }))
    }

    private invokeCore<T = unknown>({method = 'get', url, data, headers}: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return axios({
            url: this.apiUrl + this.controller + '/' + url,
            method,
            data,
            headers
        })
    }

    private getAuthorizationHeader(token: string): { [key: string]: string } {
        return {
            'Authorization': `Bearer ${token}`
        }
    }
}
