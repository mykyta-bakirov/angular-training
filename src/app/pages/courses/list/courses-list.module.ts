// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './courses-list.routes';

// custom components
import { CoursesListComponent } from './courses-list.component';
import { CourseItemComponent } from './courseItem/course-item.component';
import { CoursesToolbarComponent } from './toolbar/toolbar.component';

import { CoursesService } from '../../../core/services/courses/courses.service';

@NgModule({
	declarations: [
		CoursesListComponent,
		CourseItemComponent,
		CoursesToolbarComponent
	],
	imports: [
		routes,
		FormsModule,
		ReactiveFormsModule,
		CommonModule
	],
	providers: [CoursesService]
})
export class CourseListModule {
	constructor() {
	}
}
