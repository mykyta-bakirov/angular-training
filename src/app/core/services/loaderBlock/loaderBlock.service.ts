import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderBlockService {

    private _loaderIsShown: Boolean = false;
    private showLoaderSubject: BehaviorSubject<Boolean>;
    public ShowLoader: Observable<Boolean>

    constructor() {
        this.showLoaderSubject = <BehaviorSubject<Boolean>>new BehaviorSubject(this._loaderIsShown);
        this.ShowLoader = this.showLoaderSubject.asObservable();
    }

    public Show(): void {
        this._loaderIsShown = true;
        this.EmitLoaderEvent();
    }

    public Hide(): void {
        this._loaderIsShown = false;
        this.EmitLoaderEvent();
    }

    private EmitLoaderEvent(): void {
        this.showLoaderSubject.next(this._loaderIsShown);
    }

}