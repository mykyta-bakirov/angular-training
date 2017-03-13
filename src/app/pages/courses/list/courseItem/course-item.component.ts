import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { CourseItem } from '../../../../core/entities/CourseItem';

@Component({
	selector: 'course-item',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./course-item.component.scss')],
	template: require('./course-item.component.html')
})
export class CourseItemComponent {
	@Input() public courseItem: CourseItem;
	@Output() public onDelete = new EventEmitter<CourseItem>();

	constructor() {
	}

	delete(){
		this.onDelete.emit(this.courseItem);
	}
}
