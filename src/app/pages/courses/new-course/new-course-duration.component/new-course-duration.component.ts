import { Component, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormControl, Validators } from '@angular/forms';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => NewCourseDurationComponent),
	multi: true
};

@Component({
	selector: 'new-course-duration',
	encapsulation: ViewEncapsulation.None,
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
	styles: [require('./new-course-duration.component.scss')],
	template: require('./new-course-duration.component.html')
})
export class NewCourseDurationComponent implements ControlValueAccessor {
	private onChange = (_) => { };
	private onTouched = () => { };

	private formGroup: FormGroup;

	constructor() {
		this.formGroup = new FormGroup({
			duration: new FormControl("", [Validators.required])
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
		console.log("setDisabledState", isDisabled);
	}

	public onKeyUp(): void {
		if (this.formGroup.valid) {
			this.onChange(Number(this.formGroup.controls["duration"].value));
		} else {
			this.onChange(null);
		}
	}
}
