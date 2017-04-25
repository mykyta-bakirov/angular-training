import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Http, RequestOptions, Request, URLSearchParams, RequestMethod } from '@angular/http';
import { Author } from '../../entities/Author';

@Injectable()
export class AuthorsService {
    constructor(private http: Http) {

    }

    public GetAllAuthors(): Observable<Author[]> {
        return this.http.get("http://localhost:3001/authors").map(response => response.json().map(a => new Author(a.id, a.name)));
        // TODO: Extend fake backend with authors method.
        /*
        var authors = [];
        for (var i = 0; i < 5; i++) {
            authors.push(new Author(i, "Name " + i));
        }
        return Observable.of(authors);
        */
    }
}