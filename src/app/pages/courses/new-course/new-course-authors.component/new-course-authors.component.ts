import { Component, ViewEncapsulation, Input, Output, OnInit, forwardRef } from '@angular/core';
import { SelectableAuthor } from '../../../../core/entities/Selectable.Author';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormControl, Validators } from '@angular/forms';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => NewCourseAuthorsComponent),
	multi: true
};

@Component({
	selector: 'new-course-authors',
	encapsulation: ViewEncapsulation.None,
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
	styles: [require('./new-course-authors.component.scss')],
	template: require('./new-course-authors.component.html')
})
export class NewCourseAuthorsComponent implements ControlValueAccessor {

	@Input() authors: Array<SelectableAuthor>;

	onChange = (_) => { };
	onTouched = () => { };

	public writeValue(obj: any): void {
	}

	public registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	public registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	public setDisabledState(isDisabled: boolean): void {
		console.log("not implemented yet");
	}

	public validateInput() {
		var selectedAuthors = this.authors.filter(author => author.isSelected);
		this.onChange(selectedAuthors);
	}

	public onClick(){
		console.log()
	}
}
