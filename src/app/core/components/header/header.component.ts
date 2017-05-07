import { Component, ViewEncapsulation, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { AuthorizationService } from '../../services/auth/authorizationService';
import { Subscription } from 'rxjs';
import { User } from '../../entities/User';
import { Router } from '@angular/router';

@Component({
	selector: 'main-header',
	templateUrl: 'header.component.html',
	styles: [require('./header.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
	constructor(private authorizationService: AuthorizationService, private change: ChangeDetectorRef) {
	}

	public ngOnInit() {
	}

	public ngOnDestroy() {
	}

	public logOff() {
		this.authorizationService.Logout();
	}
}
