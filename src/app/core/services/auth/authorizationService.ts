import { Injectable } from '@angular/core';
import { User } from '../../entities/User';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthorizationService {
    private _user: User;
    private UserSubject: BehaviorSubject<User>
    public User: Observable<User>

    public source;

    constructor() {
        this.UserSubject = <BehaviorSubject<User>>new BehaviorSubject(this._user);
        this.User = this.UserSubject.asObservable();
    }

    public Login(login: string, password: string) {
        this._user = new User();
        this._user.login = login;
        this._user.password = password;

        this.UserSubject.next(this._user);
    }

    public Logout() {
        this._user = null;
        this.UserSubject.next(this._user);
    }
}