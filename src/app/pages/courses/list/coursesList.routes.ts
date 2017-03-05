import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent }    from './coursesList.component';

// Route Configuration
const pageOneRoutes: Routes = [
	{ path: 'coursesList', component: CoursesListComponent },
];

export const routes = RouterModule.forChild(pageOneRoutes);
