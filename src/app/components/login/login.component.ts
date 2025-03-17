import { Component ,Inject,inject} from '@angular/core';

//AQUI VAMOS IMPORTANDO LOS IMPUT CAJA DE TEXTO DE ANGULAR MATERIAL
/*import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';*/

import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AccesoService } from '../../services/acceso.service';
//import jwt_decode from 'jwt-decode';
//import jwt_decode, { JwtPayload } from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';


import { Login } from '../../interfaces/Login';

interface DecodedToken {
  role: string;
}



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [

            /*MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            ReactiveFormsModule,
            MatToolbarModule,
            MatProgressSpinnerModule,
            CommonModule */
            CommonModule,
            SharedModule,
           
            
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    form: FormGroup;
    private _snackBar = inject(MatSnackBar);
    loading=false;

    constructor(private fb:FormBuilder,private route: Router, @Inject(AccesoService) private accesoService: AccesoService){

        this.form=this.fb.group({
        usuario:['',Validators.required],
        password:['',Validators.required]  
        }
        
      )
    }
  

  ingresar(){

    console.log("llegamos");

    /*console.log(this.form) ;*/
    const correo = this.form.value.usuario;
    const password = this.form.value.password;
    
    console.log(" " + correo);
    console.log(password);

    const objeto: Login = {
      correo,
    
      password
    };


  this.accesoService.login(objeto).subscribe({
    next: (response) => {
      const token = response.body.token;

      console.log("Mi Token:-->  Bearer: ", token);

      if (token) {
        localStorage.setItem('token', token);
        try {
          const decodedToken: DecodedToken = jwtDecode(token);
          const role = decodedToken.role;

          console.log('Rol del usuario:', role);

          if (role === "ADMINISTRATIVO") {
            this.route.navigate(['/dashboard']);
          } else if (role === "PROFESOR") {
            this.route.navigate(['/profesor']);
          } else if (role === "ESTUDIANTE") {
            this.route.navigate(['/estudiante']);
          } else {
            alert('Rol no reconocido');
          }
        } catch (error) {
          console.error('Error al decodificar el token:', error);
          alert('Error al decodificar el token');
        }
      } else {
        alert('No se encontró el token en la respuesta');
      }
    },
   
  });



   
  }






  /*openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  */
 error(){
  this._snackBar.open('Usuario o contraseña son invalidas.','',{
    duration:5000,
    horizontalPosition:'center',
   /* verticalPosition:'bottom'*/
   verticalPosition:'top'
  });
 }

 fakeLoding(){
  this.loading=true;
  setTimeout(()=>{
    //Lo redirecionamos al dashboard
    //this.loading=false;
    this.route.navigate(['dashboard'])
  },1500)
 }




}

