import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private API_SERVER = "http://localhost:8080/api/v1/empresas";
  
    constructor(
      private httpClient: HttpClient
    ) { }
  
    public getAllEmpresas(): Observable<any>{
      return this.httpClient.get(this.API_SERVER);
    }
  }