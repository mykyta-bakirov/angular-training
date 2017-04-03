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
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

// directives
import { CoursePlateDirective } from '../../../core/directives/course.plate.directive';

//pipes
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/orderBy.pipe';
import { SearchCoursePipe } from './pipes/search.course.pipe';

@NgModule({
	declarations: [
		CoursesListComponent,
		CourseItemComponent,
		CoursesToolbarComponent,

		CoursePlateDirective,
		DurationPipe,
		OrderByPipe
	],
	imports: [
		routes,
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		ConfirmationPopoverModule.forRoot({
			confirmButtonType: 'danger' // set defaults here
		})
	],
	providers: [
		CoursesService,
		SearchCoursePipe
	]
})
export class CourseListModule {
	constructor() {
	}
}
