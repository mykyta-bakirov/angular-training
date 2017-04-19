import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { AuthorizedHttp } from './core/services/authorizedHttp';
import {
	NgModule,
	ApplicationRef
} from '@angular/core';
import {
	removeNgStyles,
	createNewHosts,
} from '@angularclass/hmr';
import {
	RouterModule,
	PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { NoContentComponent } from './pages/no-content';
import { LoaderBlockComponent } from './core/components/loaderBlock/loaderBlock.component';

// Components
import { HeaderModule, FooterModule } from './core/components';

import { CourseListModule } from './pages/courses/list';
import { LoginModule } from './pages/login';
import { NewCourseModule } from './pages/courses/new-course';

// Services
import { AuthorizationService } from './core/services/auth/authorizationService';
import { LoaderBlockService } from './core/services/loaderBlock/loaderBlock.service';

// Application wide providers
const APP_PROVIDERS = [
	AuthorizationService,
	LoaderBlockService
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		NoContentComponent,
		LoaderBlockComponent
	],
	imports: [ // import Angular's modules
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
		HeaderModule,
		FooterModule,
		CourseListModule,
		LoginModule,
		NewCourseModule
	],
	providers: [ // expose our Services and Providers into Angular's dependency injection
		ENV_PROVIDERS,
		APP_PROVIDERS,

		{
			provide: Http,
			useFactory: (backend: XHRBackend, options: RequestOptions) => 
				new AuthorizedHttp(backend, options)
			,
			deps: [XHRBackend, RequestOptions]
		}
	]
})
export class AppModule {

	constructor(public appRef: ApplicationRef) {
	}

	public hmrOnInit(store: any) {
		if (!store || !store.state) { return; }
		this.appRef.tick();
		delete store.state;
	}

	public hmrOnDestroy(store: any) {
		const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
		// recreate elements
		store.disposeOldHosts = createNewHosts(cmpLocation);
		// remove styles
		removeNgStyles();
	}

	public hmrAfterDestroy(store: any) {
		// display new elements
		store.disposeOldHosts();
		delete store.disposeOldHosts;
	}

}
