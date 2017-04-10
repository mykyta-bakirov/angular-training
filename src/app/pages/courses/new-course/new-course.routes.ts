﻿import { Routes, RouterModule } from '@angular/router';
import { NewCourseComponent }    from './new-course.component';

// Route Configuration
const newCourseRoutes: Routes = [
	{ path: 'new-course', component: NewCourseComponent },
];

export const routes = RouterModule.forChild(newCourseRoutes);