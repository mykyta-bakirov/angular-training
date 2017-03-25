import { Component, ViewEncapsulation, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { AuthorizationService } from '../../core/services/auth/authorizationService';
import { LoaderBlockService } from '../../core/services/loaderBlock/loaderBlock.service';

@Component({
	selector: 'login',
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [],
	styles: [require('./login.styles.scss')],
	template: require('./login.template.html')
})
export class LoginComponent {
	private login: string = "";
	private password: string = "";

	constructor(private _authorizationService: AuthorizationService, private _loaderBlockService: LoaderBlockService) {
		console.log('Login constructor');
		this._authorizationService.Logout();
	}

	public Login() {
		if (this.login.trim().length > 0 && this.password.trim().length > 0) {
			this._loaderBlockService.Show();

			this._authorizationService.Login(this.login, this.password).subscribe(
				() => { },
				() => { },
				() => {
					//TODO: inject angular router after lecture. Use it after navigation
					window.location.href = "http://localhost:3000/#/";
					this._loaderBlockService.Hide();
				}
			)
		}

	}
}
