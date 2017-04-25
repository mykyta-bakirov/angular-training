import { Component, ViewEncapsulation, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
	private formGroup: FormGroup;

	constructor(private _authorizationService: AuthorizationService, private _loaderBlockService: LoaderBlockService) {
		this._authorizationService.Logout();

		this.formGroup = new FormGroup({
			login: new FormControl("", [Validators.required]),
			password: new FormControl("", [Validators.required]),
		});
	}

	public Login(data) {
		var login = data.login;
		var password = data.password;
		if (login.trim().length > 0 && password.trim().length > 0) {
			this._loaderBlockService.Show();
			this._authorizationService.Login(login, password).subscribe(
				() => { },
				() => { },
				() => {
					//TODO: inject angular router after lecture. Use it after navigation
					window.location.href = "/#/";
					this._loaderBlockService.Hide();
				}
			)
		}

	}
}
