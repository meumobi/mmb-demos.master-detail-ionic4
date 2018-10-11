import { environment } from '@env/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(
    private httpClient: HttpClient
  ) { }

  public get(endp: string, urlParams: object = {}) {

    let params = new HttpParams();

    Object.keys(urlParams).forEach(element => {
      params = params.append(element, urlParams[element])
    });

    return this.httpClient.get(`${API_URL}${endp}`, {params});
  }
}
