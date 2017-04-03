import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { CourseItem } from '../entities/CourseItem'

@Directive({
    selector: '[courseplate]'
})

export class CoursePlateDirective {
    @Input() courseplate: CourseItem;

    constructor(private el: ElementRef) {

    }

    public ngOnInit() {
        let currentDate = new Date();
        let twoWeeksDate = new Date();
        twoWeeksDate.setDate(this.courseplate.createDate.getDate() - 14);

        if (this.courseplate.createDate < currentDate && this.courseplate.createDate > twoWeeksDate) {
            this.el.nativeElement.style.borderColor = 'green';
            return;
        }

        if (this.courseplate.createDate > currentDate) {
            this.el.nativeElement.style.borderColor = 'blue';
            return;
        }
    }
}