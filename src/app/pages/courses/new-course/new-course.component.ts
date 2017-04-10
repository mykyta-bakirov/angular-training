import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'new-course',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./new-course.styles.scss')],
	template: require('./new-course.template.html')
})
export class NewCourseComponent {
	constructor() {
		console.log('Page one constructor');
	}

	public save(): void {
		console.log("save click");
	}

	public cancel(): void {
		console.log("cancel click");
	}
}
