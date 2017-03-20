import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { CourseItem } from '../../../core/entities/CourseItem';
import { CoursesService } from '../../../core/services/courses/courses.service';

@Component({
	selector: 'courses-list',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./courses-list.styles.scss')],
	template: require('./courses-list.template.html')
})
export class CoursesListComponent {
	private courses: CourseItem[];



	constructor(private _coursesService: CoursesService) {
		console.log('Page one constructor');
		this.courses = [];
	}

	public ngOnInit() {
		this.courses = this._coursesService.GetList();

	}

	public onDeleteCourse(courseItem: CourseItem) {
		this._coursesService.RemoveItem(courseItem);
		this.courses = this._coursesService.GetList();
	}
}
