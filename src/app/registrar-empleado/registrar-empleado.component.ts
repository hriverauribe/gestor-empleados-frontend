import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Empresa } from '../services/empresa';
import { EmpresaService } from '../services/empresa.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit{

 

  empleado : Empleado = new Empleado();
  empresas : Empresa[];
  constructor(private empleadoServicio:EmpleadoService,private empresaService: EmpresaService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerEmpresas();
  }
 

   guardarEmpleado(){
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(resp=>{
      console.log(resp);
      this.irALaListaDeEmpleados();
    },  error => { console.error(error) });

  }

  irALaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
  }
  onSubmit(){
   this.guardarEmpleado();
  }

  private obtenerEmpresas(){
    this.empresaService.getAllEmpresas().subscribe(resp=>{
      this.empresas = resp;  
     // console.log(resp);
    },
    error=>console.error(error),
    
    )
  }
}

