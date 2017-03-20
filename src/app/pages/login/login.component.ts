import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from '../../core/services/auth/authorizationService';

@Component({
	selector: 'login',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./login.styles.scss')],
	template: require('./login.template.html')
})
export class LoginComponent {
	private login: string;
	private password: string;

	constructor(private _authorizationService: AuthorizationService) {
		console.log('Login constructor');
	}

	public Login() {
		this._authorizationService.Login(this.login, this.password)
	}
}
