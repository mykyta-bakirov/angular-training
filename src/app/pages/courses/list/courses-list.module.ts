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
	providers: []
})
export class CourseListModule {
	constructor() {
	}
}
