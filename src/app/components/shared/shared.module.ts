import { NgModule } from '@angular/core';


//import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

//AQUI VAMOS IMPORTANDO LOS IMPUT CAJA DE TEXTO DE ANGULAR MATERIAL
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {  ReactiveFormsModule } from '@angular/forms';

/*import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';*/
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
//CALENDARIO FORMULARIO
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 












@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
  //  HttpClientModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,

    //fecha
    MatDatepickerModule,
    MatNativeDateModule, // Para la fecha nativa
    
    
    
  //  CommonModule
  ],
  exports:[ MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
  // HttpClientModule
  //  CommonModule
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,

    //fecha
    MatDatepickerModule,
    MatNativeDateModule, // Para la fecha nativa
    
  ]
})
export class SharedModule { }
