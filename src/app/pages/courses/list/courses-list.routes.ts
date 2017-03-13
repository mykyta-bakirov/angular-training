import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent }    from './courses-list.component';

// Route Configuration
const coursesListRoutes: Routes = [
	{ path: 'courses-list', component: CoursesListComponent },
];

export const routes = RouterModule.forChild(coursesListRoutes);
