import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {tap} from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(public http: HttpClient) {}

    login(user) {
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.api_key}`, user)
            .pipe(
                tap(this.setToken)
            );
    }

    private setToken(res) {
        if (res) {
            const expData = new Date(new Date().getTime() + +res.expiresIn * 1000);
            localStorage.setItem('fb-token-exp', expData.toString());
            localStorage.setItem('fb-token', res.idToken);
        } else {
            localStorage.clear();
        }
    }

    get token() {
        const expData = new Date(localStorage.getItem('fb-token-exp'));
        if (new Date() > expData) {
            this.logout();
            return null;
        }
        return localStorage.getItem('fb-token');
    }

    logout() {
        this.setToken(null);
    }

    isAuthenticated() {
        return !!this.token;
    }
}
