import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/auth/authorizationService';

@Component({
	selector: 'main-header',
	templateUrl: 'header.component.html',
	styles: [require('./header.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
	private isAuthenticated: Boolean;

	constructor(private authorizationService: AuthorizationService) {

	}

	public ngOnInit() {
		this.isAuthenticated = this.authorizationService.IsAuthenticated();
	}
}
