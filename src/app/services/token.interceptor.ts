// import { Injectable } from '@angular/core'
// import { Router } from '@angular/router'
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient, HttpErrorResponse } from '@angular/common/http'
// import { Observable, of } from 'rxjs'
// import { catchError, switchMap, retry } from 'rxjs/operators'
// import { parse } from 'url';
// import { environment } from '../../environments/environment';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//   constructor(private _router: Router, private http: HttpClient) { }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = localStorage.getItem('api-token');
//     let req_url = parse(req.url, false, true).hostname
//     let env_url = parse(environment.server_ip, false, true).hostname
//     if ((req_url != env_url) || (req.headers.get('Ingore-Refresh') == 'ignore')) {
//       let request = req.clone({
//         headers: req.headers.delete('Ingore-Refresh')
//       })
//       return next.handle(request)
//     }
//     return next.handle(req).pipe(
//       catchError(
//         (err: HttpErrorResponse) => {
//           if (err.status === 401) {
//             // return next.handle(req);
//             if (!localStorage.getItem("rtoken")) {
//               this._router.navigate(['/auth/login']);
//               localStorage.removeItem('jtoken');
//               localStorage.removeItem('rtoken');
//               throw (err);
//             }
//             let body = {
//               refresh: localStorage.getItem("rtoken")
//             };
//             return this.http.post(
//               environment.server_ip + 'refresh/',
//               body,
//               {
//                 headers: {
//                   'Ingore-Refresh': 'ignore'
//                 }
//               }
//             )
//               .pipe(
//                 retry(3),
//                 switchMap(
//                   (data: any) => {
//                     localStorage.setItem('jtoken', data.access)
//                     return next.handle(req)
//                   }
//                 ),
//                 catchError(
//                   err => {
//                     localStorage.removeItem('jtoken');
//                     localStorage.removeItem('rtoken');
//                     this._router.navigate(['/auth/login']);
//                     return of(err);
//                   }
//                 )
//               )
//           }
//           throw (err);
//         }
//       )
//     );
//   }
// }
