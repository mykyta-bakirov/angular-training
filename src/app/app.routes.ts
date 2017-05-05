import { Routes } from '@angular/router';
import { CoursesListComponent } from './pages/courses/list/';
import { NoContentComponent } from './pages/no-content';

export const ROUTES: Routes = [
	{path: '', redirectTo: "/courses", pathMatch: "full" },
	{path: '**', component: NoContentComponent},
];
