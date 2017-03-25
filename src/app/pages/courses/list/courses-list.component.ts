import { Component, ViewEncapsulation, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CourseItem } from '../../../core/entities/CourseItem';
import { CoursesService } from '../../../core/services/courses/courses.service';
import { AuthorizationService } from '../../../core/services/auth/authorizationService';
import { LoaderBlockService } from '../../../core/services/loaderBlock/loaderBlock.service';
import { Subscription } from 'rxjs';

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
	private coursesChangeSubscription: Subscription;


	constructor(private _coursesService: CoursesService, private _authorizationService: AuthorizationService, private _loaderBlockService: LoaderBlockService) {
		console.log('Page one constructor');
		this.courses = [];
	}

	public ngOnInit() {
		this.coursesChangeSubscription = this._coursesService.GetList().subscribe(
			courses => {
				this.courses = courses;
			}
		);
		//TODO remove this after router implemented
		this._authorizationService.Login("SuperUser", "blabla").subscribe(()=>{},()=>{},()=>{});
	}

	public ngOnDestroy() {
		this.coursesChangeSubscription.unsubscribe();
	}

	public onDeleteCourse(courseItem: CourseItem) {
		this._loaderBlockService.Show();

		this._coursesService.RemoveItem(courseItem).subscribe(
			() => { },
			() => { },
			() => {
				this._loaderBlockService.Hide();
			}
		);


	}
}
