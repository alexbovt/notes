import axios, { AxiosResponse } from 'axios'

type InvokeArgs = {
  url: string
  method?: 'get' | 'post' | 'put' | 'delete'
  data?: unknown
}

export abstract class BaseService {
  //todo get api url from .env
  protected readonly apiUrl = 'http://localhost:4200/'
  protected abstract readonly controller: string

  protected invoke<T = unknown>({ method = 'get', url, data }: InvokeArgs): Promise<AxiosResponse<T>> {
    return axios({
      url: this.apiUrl + this.controller + '/' + url,
      method,
      data,
    })
  }
}
