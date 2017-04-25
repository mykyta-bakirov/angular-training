import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorsService } from '../../../core/services/authors/authors.service';
import { Author } from '../../../core/entities/Author';

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

	constructor(private authorsService: AuthorsService) {
		console.log('Page one constructor');
	}

	public date: string;

	public ngOnInit() {

		this.formGroup = new FormGroup({
			title: new FormControl("", [Validators.required, Validators.maxLength(50)]),
			description: new FormControl("", [Validators.required, Validators.maxLength(500)]),
			date: new FormControl("", [Validators.required]),
			duration: new FormControl("", [Validators.required]),
			authors: new FormControl("", [Validators.required])
		});

		this.authorsService.GetAllAuthors().subscribe((authors) => {
			this.authors = authors;
		});
	}

	public save(): void {
		console.log("save click");
	}

	public cancel(): void {
		console.log("cancel click");
	}

	public submit(data: any): void {
		console.log(data.value);
	}

	public setDate(data: any) {
		console.log("on new date", data);
	}
}
