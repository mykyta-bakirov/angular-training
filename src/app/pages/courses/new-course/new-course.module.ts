// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../core/shared/shared.module';

// routes
import { routes } from './new-course.routes';

// custom components
import { NewCourseComponent } from './new-course.component';
import { NewCourseDateComponent } from './new-course-date.component/new-course-date.component';
import { NewCourseDurationComponent } from './new-course-duration.component/new-course-duration.component';
import { NewCourseAuthorsComponent } from './new-course-authors.component/new-course-authors.component';

@NgModule({
	declarations: [
		NewCourseComponent,
		NewCourseDateComponent,
		NewCourseDurationComponent,
		NewCourseAuthorsComponent
	],
	imports: [
		routes,
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
		CommonModule
	],
	providers: []
})
export class NewCourseModule {
	constructor() {
	}
}
