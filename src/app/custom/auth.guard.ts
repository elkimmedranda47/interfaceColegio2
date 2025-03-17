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
                    return true;
                } else {

                    console.log('llegamos al inicio 3:', token);
                    if (state.url !== '/login') {
                        router.navigate(['/login']);
                    }
                    return false;
                }
            }),
            catchError(error => {
                console.log('llegamos al inicio 4:', token);
                if (state.url !== '/login') {
                    router.navigate(['/login']);
                }
                return of(false);
            })
        );
    } else {

        console.log('llegamos al inicio 5:', token);
        if (state.url !== '/login') {
            return router.createUrlTree(['/login']);
        }
        return of(false);
    }
};