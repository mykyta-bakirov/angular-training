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
			this.courses.push(new CourseItem(
				i, 
				"Video course" + i, 
				i+ " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", 
				Math.floor((Math.random() * 100) + 10), 
				new Date()));
		}
	}

	public onDeleteCourse(courseItem: CourseItem) {
		console.log(courseItem.id);
	}
}
