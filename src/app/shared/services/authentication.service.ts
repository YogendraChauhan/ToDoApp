import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { LoginUser } from '../interfaces/user';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthenticationService {
    private loggedIn = new BehaviorSubject<boolean>(false);
    constructor(private http: HttpClient) {
    }

    signIn(user: LoginUser) {
        return this.http.post<any>(`${environment.apiBaseURL}/login`, user)
            .pipe(map(response => {
                response.user = { email: user.email, token: response.token };
                localStorage.setItem('user', JSON.stringify(response.user));
                return response;
            }));
    }

    public isAuthenticated() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.token) {
            this.loggedIn.next(true);
        } else {
            this.loggedIn.next(false);
        }
        return this.loggedIn.asObservable();
    }

    logout() {
        this.loggedIn.next(false);
        // remove user from local storage on logout
        localStorage.removeItem('user');
    }
}
