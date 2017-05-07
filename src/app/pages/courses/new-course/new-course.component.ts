import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorsService } from '../../../core/services/authors/authors.service';
import { CoursesService } from '../../../core/services/courses/courses.service';
import { Author } from '../../../core/entities/Author';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CourseItem } from '../../../core/entities/CourseItem';

@Component({
	selector: 'new-course',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./new-course.styles.scss')],
	template: require('./new-course.template.html')
})
export class NewCourseComponent {

	private formGroup: FormGroup;
	private authors: Array<Author>;
	private sub: any;
	private courseItem: CourseItem;

	constructor(private router: Router, private route: ActivatedRoute, private authorsService: AuthorsService, private coursesService: CoursesService) {


	}

	public date: string;

	public ngOnInit() {

		this.formGroup = new FormGroup({
			title: new FormControl("", [Validators.required, Validators.maxLength(50)]),
			description: new FormControl("", [Validators.required, Validators.maxLength(500)]),
			date: new FormControl("", [Validators.required]),
			durationMins: new FormControl("", [Validators.required]),
			authors: new FormControl("", [Validators.required])
		});

		this.authorsService.GetAllAuthors().subscribe((authors) => {
			this.authors = authors;
		});

		this.sub = this.route.params.subscribe(params => {
			var id = +params['id'];
			if (isNaN(id)) {
				return;
			}
			this.coursesService.GetItemById(id).subscribe(courseItem => {
				this.courseItem = courseItem;
				console.log(courseItem);
				Object.keys(courseItem).forEach(name => {
					if (this.formGroup.controls[name]) {
						this.formGroup.controls[name].setValue(courseItem[name]);
					}
				});
			})
		});
	}

	public ngOnDestroy() {
		this.sub.unsubscribe();
	}

	public cancel(): void {
		this.router.navigate(['/']);
	}

	public submit(data: any): void {
		console.log(data.value);
		this.router.navigate(["/"]);
	}

	public setDate(data: any) {
		console.log("on new date", data);
	}
}
