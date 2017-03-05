// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './course.routes';

// custom components
import { CoursesListComponent } from './coursesList.component';

@NgModule({
	declarations: [
		CoursesListComponent
	],
	imports: [
		routes,
		FormsModule,
		ReactiveFormsModule,
		CommonModule
	],
	providers: []
})
export class CourseListModule {
	constructor() {
	}
}
