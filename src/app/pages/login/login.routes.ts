import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }    from './login.component';

// Route Configuration
const loginRoutes: Routes = [
	{ path: 'login', component: LoginComponent, data: { breadcrumb: "Login" } },
];

export const routes = RouterModule.forChild(loginRoutes);
