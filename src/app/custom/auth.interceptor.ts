import { HttpInterceptorFn } from '@angular/common/http';
/*
export const authInterceptor: HttpInterceptorFn = (req, next) => {
     //  debugger;
     console.log('llegamos al interceptor');
    
     
     if(req.url.indexOf("Acceso") > 0)  return next(req);

     const token = localStorage.getItem("token");
     
     console.log('Token almacenado en el localStorage');

     console.log("Mi Token2:-->  Bearer: "+token);

     const clonRequest = req.clone({
          setHeaders:{
               Authorization: `Bearer ${token}`
          }
     })


     
     return next(clonRequest);

    
     //return next(req);
};
*/

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Excluir la solicitud de login
  if (req.url.includes('login')) {
      return next(req);
  }

  const token = localStorage.getItem("token");
  if (token) {
      const clonedReq = req.clone({
          setHeaders: {
              Authorization: `Bearer ${token}`
          }
      });
      return next(clonedReq);
  }
  return next(req);
};
