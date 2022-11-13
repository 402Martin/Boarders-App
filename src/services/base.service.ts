import axios from 'src/handler/axios.handler';
import { IQuery, IResponse } from 'src/types/request.types';
export default class BaseService<T extends { id: number | string }, R extends object> {
  public endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  public getAll = async (params: IQuery = {}) => {
    const query = Object.keys(params) ? `?${JSON.stringify(params)}` : '';
    const elem = (await axios.get(`${this.endpoint}${query}`)).data;

    return elem as IResponse<T[]>;
  };
  public get = async (id: string | number = ''): Promise<IResponse<T>> => {
    return (await axios.get(`${this.endpoint}/${id}`)).data;
  };
  public create = async (element: R) => {
    const res = await axios.post(this.endpoint, element);
    return res.data as IResponse<T>;
  };

  public update = async (element: Partial<T>): Promise<IResponse<T>> => {
    return (await axios.put(`${this.endpoint}/${element.id}`, element)).data;
  };
  public updateMultiple = async (element: Partial<T>[]) => {
    return await axios.put(this.endpoint, element);
  };
  public delete = async (id: string | number) => {
    return await axios.delete(`${this.endpoint}/${id}`);
  };
}
