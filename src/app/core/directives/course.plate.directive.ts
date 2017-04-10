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
        twoWeeksDate.setDate(this.courseplate.date.getDate() - 14);

        if (this.courseplate.date < currentDate && this.courseplate.date > twoWeeksDate) {
            this.el.nativeElement.style.borderColor = 'green';
            return;
        }

        if (this.courseplate.date > currentDate) {
            this.el.nativeElement.style.borderColor = 'blue';
            return;
        }
    }
}