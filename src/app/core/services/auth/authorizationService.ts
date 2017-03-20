import { Injectable } from '@angular/core';
import { User } from '../../entities/User';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationService {
    private _user: User;

    public Login(login: string, password: string) {
        console.log(login, password);
    }

    public Logout() {

    }

    public IsAuthenticated(): Boolean {
        return false;
    }

    public GetUserInfo(): User {
        return null;
    }
}