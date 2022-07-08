import { Injectable } from '@angular/core';
import {
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { tap } from 'rxjs';
import { IFormData } from './app.types';
@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  getToken: string = localStorage.getItem('token') || '';
  
  constructor() {}
  intercept(req: HttpRequest<IFormData>, next: HttpHandler) {
    let tokenReq = req.clone({
      setHeaders: {
        Authorization: `${localStorage.getItem('token') || ''}`,
      },
    });

    return next.handle(tokenReq).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
       
        }
      })
    );
  }
}
