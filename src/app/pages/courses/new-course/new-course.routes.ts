import { Routes, RouterModule } from '@angular/router';
import { NewCourseComponent }    from './new-course.component';
import { CoursesGuard } from '../../../core/services/guards/courses.guard';

// Route Configuration
const newCourseRoutes: Routes = [
	{ path: 'courses/new', component: NewCourseComponent, canActivate: [CoursesGuard], data: { breadcrumb: "New course" } },
	{ path: 'courses/:id', component: NewCourseComponent, canActivate: [CoursesGuard], data: { breadcrumb: "Edit course" } },
];

export const routes = RouterModule.forChild(newCourseRoutes);
