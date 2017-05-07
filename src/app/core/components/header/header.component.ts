import { Component, ViewEncapsulation, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { AuthorizationService } from '../../services/auth/authorizationService';
import { Subscription } from 'rxjs';
import { User } from '../../entities/User';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";

interface IBreadcrumb {
	label: string;
	params: Params;
	url: string;
}

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
	public breadcrumbs: IBreadcrumb[];

	constructor(private activatedRoute: ActivatedRoute, private router: Router, private authorizationService: AuthorizationService, private change: ChangeDetectorRef) {
		this.breadcrumbs = [];
	}

	public ngOnInit() {
		this.userChangesubscription = this.authorizationService.User.subscribe(
			user => {
				this.user = user;
			}
		);

		const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

		//subscribe to the NavigationEnd event
		this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
			//set breadcrumbs
			let root: ActivatedRoute = this.activatedRoute.root;
			this.breadcrumbs = this.getBreadcrumbs(root);
		});

	}

	public ngOnDestroy() {
		this.userChangesubscription.unsubscribe();
	}

	public logOff() {
		this.authorizationService.Logout();
		this.router.navigate(["/login"]);
	}

	private getBreadcrumbs(route: ActivatedRoute, url: string = "", breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
		const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

		//get the child routes
		let children: ActivatedRoute[] = route.children;

		//return if there are no more children
		if (children.length === 0) {
			return breadcrumbs;
		}

		//iterate over each children
		for (let child of children) {
			//verify primary route
			if (child.outlet !== PRIMARY_OUTLET) {
				continue;
			}

			//verify the custom data property "breadcrumb" is specified on the route
			if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
				return this.getBreadcrumbs(child, url, breadcrumbs);
			}

			//get the route's URL segment
			let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");

			//append route URL to URL
			url += `/${routeURL}`;

			//add breadcrumb
			let breadcrumb: IBreadcrumb = {
				label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
				params: child.snapshot.params,
				url: url
			};
			breadcrumbs.push(breadcrumb);

			//recursive
			return this.getBreadcrumbs(child, url, breadcrumbs);
		}
	}
}
