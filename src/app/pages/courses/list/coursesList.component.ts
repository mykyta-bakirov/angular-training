import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'coursesList',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./coursesList.styles.scss')],
	template: require('./coursesList.template.html')
})
export class CoursesListComponent {
	constructor() {
		console.log('Page one constructor');
	}
}
