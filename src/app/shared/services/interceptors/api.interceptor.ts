import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${user.token}`
                }
            });
        }

        return next.handle(request).pipe(catchError(response => {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }

            const errorMsg = response.error.message || response.statusText;
            return throwError(errorMsg);
        }),
        finalize(() => {}));
    }
}
