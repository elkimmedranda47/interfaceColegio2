/*import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccesoService } from '../services/acceso.service';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = () => { // Elimina route y state, ya que no se usan

  const token = localStorage.getItem("token") || "";
  const router = inject(Router);
  const accesoService = inject(AccesoService);

  console.log('Token auth.guard:', token);

  if (token) { // Simplifica la condición a if (token)

    console.log('llegamos al inicio 1:', token);

    return accesoService.validarToken(token).pipe(
      map(data => {
        if (data && data.isSuccess) { // Verifica si data existe antes de acceder a sus propiedades

          // Lógica para manejar el tipo de persona (PROFESOR, ADMINISTRATIVO, ESTUDIANTE)
          // Puedes agregar aquí la lógica para redirigir a la página correspondiente
          // Ejemplo:
          // if (data.user && data.user.role === 'PROFESOR') {
          //   router.navigate(['/profesor']);
          //   return true;
          // }

          console.log('llegamos al inicio 2:', token);
          return true;
        } else {
          console.log('llegamos al inicio 3:', token);
          router.navigate(['']);
          return false;
        }
      }),
      catchError(error => {
        console.log('llegamos al inicio 4:', token);
        router.navigate(['']);
        return of(false);
      })
    );
  } else {
    console.log('llegamos al inicio 5:', token);
    return router.createUrlTree(['']); // Simplifica la redirección
  }
};

*/

import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AccesoService } from '../services/acceso.service';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    const token = localStorage.getItem("token") || "";
    const router = inject(Router);
    const accesoService = inject(AccesoService);

    console.log('Token auth.guard:', token);

    if (token) {
        console.log('llegamos al inicio 1:', token);

        return accesoService.validarToken(token).pipe(
            map(data => {
                if (data && data.isSuccess) {
                    console.log('llegamos al inicio 2:', token);
                    return true; // Token válido, permite el acceso
                } else {
                    console.log('llegamos al inicio 3:', token);
                    if (state.url !== '/login') {
                        router.navigate(['/login']);
                    }
                    return false; // Token inválido, redirige a login
                }
            }),
            catchError(error => {
                console.log('llegamos al inicio 4:', token);
                if (state.url !== '/login') {
                    router.navigate(['/login']);
                }
                return of(false); // Error de validación, redirige a login
            })
        );
    } else {
        console.log('llegamos al inicio 5:', token);
        if (state.url !== '/login') {
            return router.createUrlTree(['/login']);
        }
        return of(false); // No hay token, redirige a login
    }
};