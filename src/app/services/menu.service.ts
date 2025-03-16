
import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { catchError, Observable,of } from 'rxjs';
import { Menu } from '../interfaces/menu';




@Injectable({
  providedIn: 'root'
})

export class MenuService {

      private http = inject(HttpClient); 
      

      constructor( http: HttpClient) {}
     


  getMenu(): Observable<Menu[]> {  
    console.log("llegamos al get");
    //return this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
    return this.http.get<Menu[]>('./assets/data/menu.json')
  }
  
}
