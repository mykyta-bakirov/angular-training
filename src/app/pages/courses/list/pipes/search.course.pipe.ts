import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../../../../core/entities/CourseItem';

@Pipe({
    name: 'searchCourse'
})
export class SearchCoursePipe implements PipeTransform {
    transform(courseItems: CourseItem[], searchTerm: string): CourseItem[] {

        searchTerm = searchTerm.toUpperCase();
        return courseItems.filter(item => {
            return item.title.toUpperCase().indexOf(searchTerm) !== -1
        });
    }
}