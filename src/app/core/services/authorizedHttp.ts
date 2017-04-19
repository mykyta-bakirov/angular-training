
import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthorizedHttp extends Http {

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        var token = localStorage.getItem("token");
        if (token) {
            if (typeof url === 'string') {
                if (!options) {
                    options = { headers: new Headers() };
                }
                options.headers.set('Authorization', `Bearer ${token}`);
            } else {
                url.headers.set('Authorization', `Bearer ${token}`);
            }
        }
        return super.request(url, options).catch((res: Response) => {
            console.log(res);
            if (res.status === 401 || res.status === 403) {
                // if not authenticated
                console.log(res);
            }
            return Observable.throw(res);
        });
    }
}