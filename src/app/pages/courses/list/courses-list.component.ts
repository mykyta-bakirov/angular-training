import { Component, ViewEncapsulation, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CourseItem } from '../../../core/entities/CourseItem';
import { PagedCourseItems } from '../../../core/entities/PagedCourseItems';
import { CoursesService } from '../../../core/services/courses/courses.service';
import { AuthorizationService } from '../../../core/services/auth/authorizationService';
import { LoaderBlockService } from '../../../core/services/loaderBlock/loaderBlock.service';
import { Subscription, Observable } from 'rxjs';
import { SearchCoursePipe } from './pipes/search.course.pipe';

@Component({
	selector: 'courses-list',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./courses-list.styles.scss')],
	template: require('./courses-list.template.html')
})
export class CoursesListComponent {
	public coursesPage: Observable<PagedCourseItems>;
	public coursesPerPage = 4;
	private searchText: string;

	public Math: any;

	constructor(private _coursesService: CoursesService,
		private _authorizationService: AuthorizationService, private _loaderBlockService: LoaderBlockService,
		private _searchPipe: SearchCoursePipe) {
		this.Math = Math;
	}

	public filterCourse(searchText: string) {
		console.info("filterCourse");
		this.searchText = searchText;
		this.coursesPage = this._coursesService.GetList(searchText, 0, this.coursesPerPage);
	}

	public setPage(pageIndex: number) {
		console.info("set page");
		this.coursesPage = this._coursesService.GetList(this.searchText, pageIndex, this.coursesPerPage);
	}

	public ngOnInit() {
		if (!this._authorizationService.IsUserLoggedIn()) {
			window.location.href = "/#/login";
		}

		console.info("init");
		this.coursesPage = this._coursesService.GetList("", 0, this.coursesPerPage);
	}

	public ngOnDestroy() {
	}

	public onDeleteCourse(courseItem: CourseItem) {
		this._loaderBlockService.Show();

		this._coursesService.RemoveItem(courseItem).subscribe(
			() => { },
			() => { },
			() => {
				this._loaderBlockService.Hide();
				this.coursesPage = this._coursesService.GetList(this.searchText, 0, this.coursesPerPage);
			}
		);
	}
}
