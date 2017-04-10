import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../../../../core/entities/CourseItem';

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
    transform(courseItems: CourseItem[]): CourseItem[] {
        return courseItems.sort((a, b) => {
            if (a.date < b.date) {
                return -1;
            } else {
                if (a.date > b.date) {
                    return 1;
                } else {
                    return 0;
                }
            }
        });
    }
}