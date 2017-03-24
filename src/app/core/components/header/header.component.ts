import { Component, ViewEncapsulation, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthorizationService } from '../../services/auth/authorizationService';
import { User } from '../../entities/User';

@Component({
	selector: 'main-header',
	templateUrl: 'header.component.html',
	styles: [require('./header.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
	public user: User;

	constructor(private authorizationService: AuthorizationService, private change: ChangeDetectorRef) {
	}

	public ngOnInit() {
		this.authorizationService.User.subscribe(
			user => {
				this.user = user;
			}
		); 
	}

	public logOff(){
		this.authorizationService.Logout();
	}
}
