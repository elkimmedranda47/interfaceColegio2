import { Component ,inject} from '@angular/core';

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

    constructor(private fb:FormBuilder,private route: Router){

        this.form=this.fb.group({
        usuario:['',Validators.required],
        password:['',Validators.required]  
        }
        
      )
    }
  
    


  ingresar(){

    console.log("llegamos");

    /*console.log(this.form) ;*/
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    console.log(" " + usuario);
    console.log(password);

    if (usuario == "nn@gmail.com" && password == "123456" ) {

      //Redireccionamos al dashboard
      this.fakeLoding();

    } else {

      //Moatramos un mensaje de error;
      this.error();
      this.form.reset();

    }
   
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
