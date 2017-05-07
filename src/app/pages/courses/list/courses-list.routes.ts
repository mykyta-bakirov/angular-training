import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent }    from './courses-list.component';
import { CoursesGuard } from '../../../core/services/guards/courses.guard';

// Route Configuration
const coursesListRoutes: Routes = [
	{ path: 'courses', component: CoursesListComponent, canActivate: [CoursesGuard], data: { breadcrumb: "Courses list" } },
];

export const routes = RouterModule.forChild(coursesListRoutes);
