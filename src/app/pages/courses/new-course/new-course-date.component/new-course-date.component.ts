import { Component, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormControl, Validators } from '@angular/forms';
import { CourseItem } from '../../../../core/entities/CourseItem';


const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => NewCourseDateComponent),
	multi: true
};


@Component({
	selector: '[new-course-date]',
	encapsulation: ViewEncapsulation.None,
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
	styles: [require('./new-course-date.component.scss')],
	template: require('./new-course-date.component.html')
})
export class NewCourseDateComponent implements ControlValueAccessor {
	onChange = (_) => { };
	onTouched = () => { };

	private formGroup: FormGroup;

	constructor() {
		this.formGroup = new FormGroup({
			dateField: new FormControl("", [Validators.required, Validators.pattern("^([0-2][0-9]|\|3[0-1])\/(0[0-9]|\|1[0-2])\/([0-9][0-9][0-9][0-9])$")])
		});
	}

	public writeValue(obj: any): void {
		console.log("writeValue", obj)
	}

	public registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	public registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	public setDisabledState(isDisabled: boolean): void {
		console.log("setDisabledState: ", isDisabled);
	}

	public onKeyUp(): void {
		if (this.formGroup.valid) {
			var parts = this.formGroup.controls["dateField"].value.split('/');
			this.onChange(new Date(Number(parts[2]), Number(parts[1]), Number(parts[0])));
		} else {
			this.onChange(null);
		}
	}
}
