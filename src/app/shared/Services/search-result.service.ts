import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {
 
  params: HttpParams | undefined;
  api = environment.apiEndPoint;
  constructor(private http: HttpClient) {
  }

  searchUser(search:any){
    let params = {...search };
    return this.http.get(this.api + '/search/users', { params });
  }
}
