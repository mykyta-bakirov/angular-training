import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'new-course-authors',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./new-course-authors.component.scss')],
	template: require('./new-course-authors.component.html')
})
export class NewCourseAuthorsComponent {

	constructor() {
	}
}
