import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  //url para consumir la api de todos los empleados
  private API_SERVER = "http://localhost:8080/api/v1/empleados";

  constructor(
    private httpClient: HttpClient
  ) { }

  //metodo para obtener todos los empleados
  public obtenerListaDeEmpleados(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  //este metodo sirve para guardar un empleado en la bd
  registrarEmpleado(empleado:Empleado): Observable<Object>{
    return this.httpClient.post(this.API_SERVER,empleado);
  }

    //este metodo sirve para actualizar el empleado
    actualizarEmpleado(id:number,empleado:Empleado) : Observable<Object>{
      return this.httpClient.put(`${this.API_SERVER}/${id}`,empleado);
    }
  //este metodo sirve para obtener o buscar un empleado
  obtenerEmpleadoPorId(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.API_SERVER}/${id}`);
  }

  eliminarEmpleado(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.API_SERVER}/${id}`)
  }

}