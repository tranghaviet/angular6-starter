// import { Http } from '../utils/http';
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {
  protected url = 'http://localhost:65108';

  constructor(protected http: HttpClient) { }
}

