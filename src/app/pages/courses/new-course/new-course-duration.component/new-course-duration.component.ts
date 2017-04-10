import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'new-course-duration',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./new-course-duration.component.scss')],
	template: require('./new-course-duration.component.html')
})
export class NewCourseDurationComponent {

	constructor() {
		this.duration = 0;
	}

	public duration:number;
}
