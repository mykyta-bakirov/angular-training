import { Component, ViewEncapsulation, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CourseItem } from '../../../core/entities/CourseItem';
import { CoursesService } from '../../../core/services/courses/courses.service';
import { AuthorizationService } from '../../../core/services/auth/authorizationService';

@Component({
	selector: 'courses-list',
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [],
	styles: [require('./courses-list.styles.scss')],
	template: require('./courses-list.template.html')
})
export class CoursesListComponent {
	private courses: CourseItem[];



	constructor(private _coursesService: CoursesService, private _authorizationService: AuthorizationService) {
		console.log('Page one constructor');
		this.courses = [];
	}

	public ngOnInit() {
		this.fetchCourses();
		this._authorizationService.Login("SuperUser", "blabla");
	}

	public onDeleteCourse(courseItem: CourseItem) {
		this._coursesService.RemoveItem(courseItem);
		this.fetchCourses();
	}

	private fetchCourses() {
		this._coursesService.GetList().subscribe(
			courses => {
				this.courses = courses;
			}
		);
	}
}
