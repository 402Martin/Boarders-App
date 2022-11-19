import { CreateRequest, RequestModel } from 'src/types/request.model.types';
import BaseService from './base.service';
import { endpoints } from './endpoints';

export class RequestService extends BaseService<RequestModel, CreateRequest> {
  constructor() {
    super(endpoints.requests);
  }
}

export const requestService = new RequestService();
