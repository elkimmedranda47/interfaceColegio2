import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
//mport { appsettings } from '../settings/appsettings';
import { appsettings } from '../settings/appsettings';

//import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';
import { ResponseAcceso } from '../interfaces/ResponseAcceso';
import { Login } from '../interfaces/Login';


@Injectable({
     providedIn: 'root'
})
export class AccesoService {

     private http = inject(HttpClient);
     private baseUrl: string = appsettings.apiUrl;

   //  constructor() { }
   constructor( http: HttpClient) {}

   //private apiUrl = `${this.baseUrl}basic-auth/login`;
   private apiUrl = `${this.baseUrl}basic-auth`;

     login(objeto: Login): Observable<any> {
          
          console.log('JSON enviado al servidor:', JSON.stringify(objeto));

          return this.http.post<any>(`${this.apiUrl}/login` , objeto, {
          observe: 'response', // Esto es importante para obtener toda la respuesta HTTP, incluidas las cabeceras
          headers: { 'Content-Type': 'application/json' } 
          });
     }
 
     //localhost:8080/basic-auth/Acceso/ValidarToken?
     //http://localhost:8080//Acceso/ValidarToken?token=
     validarToken(token: string): Observable<ResponseAcceso> {

            console.log(`${this.apiUrl}/Acceso/ValidarToken?token=${token}`);

          return this.http.get<ResponseAcceso>(`${this.apiUrl}/Acceso/ValidarToken?token=${token}`)
     }
}
