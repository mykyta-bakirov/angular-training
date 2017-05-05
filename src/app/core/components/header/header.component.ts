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
	public user: User;
	private userChangesubscription: Subscription;

	constructor(private router: Router, private authorizationService: AuthorizationService, private change: ChangeDetectorRef) {
	}

	public ngOnInit() {
		this.userChangesubscription = this.authorizationService.User.subscribe(
			user => {
				this.user = user;
				if (!user) {
					this.router.navigate(["/login"]);
				}
			}
		);

	}

	public ngOnDestroy() {
		this.userChangesubscription.unsubscribe();
	}

	public logOff() {
		this.authorizationService.Logout();
	}
}
