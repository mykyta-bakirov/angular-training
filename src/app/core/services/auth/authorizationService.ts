import { Injectable } from '@angular/core';
import { User } from '../../entities/User';
import { Observable, BehaviorSubject } from 'rxjs';
import { Http } from '@angular/http';

@Injectable()
export class AuthorizationService {
    private _user: User;
    private UserSubject: BehaviorSubject<User>
    public User: Observable<User>

    public source;

    constructor(private http: Http) {
        this.UserSubject = <BehaviorSubject<User>>new BehaviorSubject(this._user);
        this.User = this.UserSubject.asObservable();
    }

    public Login(login: string, password: string): Observable<User> {
        return this.http.get("http://localhost:3001/users")
            .delay(1000)
            .map((d) => {
                var u = d.json()[0];

                this._user = new User(u.id, u.login, u.password);;
                this.UserSubject.next(this._user);

                localStorage.setItem("token", u.fakeToken);

                return this._user;
            });
    }

    public Logout(): void {
        this._user = null;
        localStorage.removeItem("token");
        this.UserSubject.next(this._user);
    }

    public IsUserLoggedIn(): Boolean {
        return this._user != null;
    }
}