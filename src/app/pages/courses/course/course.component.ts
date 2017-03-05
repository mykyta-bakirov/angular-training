import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'course',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./course.styles.scss')],
	template: require('./course.template.html')
})
export class CourseComponent {
	constructor() {
		console.log('Page one constructor');
	}
}
