import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent }    from './courses-list.component';

// Route Configuration
const coursesListRoutes: Routes = [
	{ path: 'courses', component: CoursesListComponent },
];

export const routes = RouterModule.forChild(coursesListRoutes);
