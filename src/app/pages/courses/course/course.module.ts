// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './course.routes';

// custom components
import { CourseComponent } from './course.component';

@NgModule({
	declarations: [
		CourseComponent
	],
	imports: [
		routes,
		FormsModule,
		ReactiveFormsModule,
		CommonModule
	],
	providers: []
})
export class CourseModule {
	constructor() {
	}
}
