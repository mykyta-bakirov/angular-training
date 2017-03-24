import { Component, ViewEncapsulation, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { AuthorizationService } from '../../core/services/auth/authorizationService';

@Component({
	selector: 'login',
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [],
	styles: [require('./login.styles.scss')],
	template: require('./login.template.html')
})
export class LoginComponent {
	private login: string;
	private password: string;

	constructor(private _authorizationService: AuthorizationService) {
		console.log('Login constructor');
		this._authorizationService.Logout();
	}

	public Login() {
		this._authorizationService.Login(this.login, this.password)
	}
}
