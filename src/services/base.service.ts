import axios from 'axios';
import { IQuery, IResponse } from 'src/types/request.types';
export default class BaseService<T extends { id: number | string }, R extends object> {
  public endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  public getAll = async (params: IQuery = {}) => {
    const elem = await axios.get(`${this.endpoint}?${JSON.stringify(params)}`);
    return elem.data as IResponse<T[]>;
  };
  public get = async (id: string | number = '') => {
    return await axios.get(`${this.endpoint}/${id}`);
  };
  public create = async (element: R) => {
    try {
      const res = await axios.post(this.endpoint, element);
      return res.data as IResponse<T>;
    } catch (err) {
      console.log(err);
    }
  };

  public update = async (element: Partial<T>) => {
    return await axios.put(`${this.endpoint}/${element.id}`, element);
  };
  public updateMultiple = async (element: Partial<T>[]) => {
    return await axios.put(this.endpoint, element);
  };
  public delete = async (id: string | number) => {
    return await axios.delete(`${this.endpoint}/${id}`);
  };
}
