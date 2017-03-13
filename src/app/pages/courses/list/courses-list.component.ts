import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { CourseItem } from '../../../core/entities/CourseItem';

@Component({
	selector: 'courses-list',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./courses-list.styles.scss')],
	template: require('./courses-list.template.html')
})
export class CoursesListComponent {

	private courses: CourseItem[];

	constructor() {
		console.log('Page one constructor');
		this.courses = [];
	}

	public ngOnInit() {
		
		for (var i = 0; i < 10; i++) {
			this.courses.push(new CourseItem(i, "title" + i, "desc" + i, i, new Date()));
		}
	}

	public onDeleteCourse(courseItem: CourseItem) {
		console.log(courseItem.id);
	}
}
