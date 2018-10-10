import { environment } from '@env/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'

const API_KEY = environment.apiKey;
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(
    private httpClient: HttpClient
  ) { }

  public get(endp: string, urlParams: object = {}) {

    urlParams["apiKey"] = API_KEY;
    
  /*
    let headers = new HttpHeaders();
        headers  = headers.append('header-1', 'value-1');
        headers  = headers.append('header-2', 'value-2');
    */

    let params = new HttpParams();

    Object.keys(urlParams).forEach(element => {
      params = params.append(element, urlParams[element])
    });

    return this.httpClient.get(`${API_URL}${endp}`, {params});
  }
}
