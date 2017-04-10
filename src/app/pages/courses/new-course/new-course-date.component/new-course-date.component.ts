import { Component, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CourseItem } from '../../../../core/entities/CourseItem';

@Component({
	selector: 'new-course-date',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./new-course-date.component.scss')],
	template: require('./new-course-date.component.html')
})
export class NewCourseDateComponent {

	constructor() {
	}
}
