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

    public Login(login: string, password: string):Observable<User> {
        this._user = new User();
        this._user.login = login;
        this._user.password = password;

        

        return new Observable(observer => {
            this.UserSubject.next(this._user);

            setTimeout(() => {
                observer.complete();
            }, 1000);
        });
    }

    public Logout():void {
        this._user = null;
        this.UserSubject.next(this._user);
    }
}