import { Injectable } from '@angular/core';
import { CourseItem } from '../../entities/CourseItem';
import { Observable } from 'rxjs';

@Injectable()
export class CoursesService {
    private courses: Array<CourseItem>;

    constructor() {
        this.courses = new Array<CourseItem>();
        for (var i = 0; i < 10; i++) {
            this.courses.push(new CourseItem(
                i,
                "Video course" + i,
                i + " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                Math.floor((Math.random() * 100) + 10),
                new Date()));
        }
    }

    public GetList(): Array<CourseItem> {
        return this.courses;
    }

    public AddCourse(course: CourseItem): Boolean {
        if (!course) {
            return false;
        }
        this.courses.push(course);
        return true;
    }

    public GetItemById(id: number): CourseItem {
        debugger;
        return this.getItemById(id);
    }

    public UpdateItem(course: CourseItem): Boolean {
        if (!course) {
            return false;
        }
        var item = this.getItemById(course.id);
        if (!item) {
            return false; 
        }
        item = course;
        return true;
    }

    public RemoveItem(course: CourseItem): Boolean {
        var index = this.courses.indexOf(course);
        if (index < 0) {
            return false;
        }
        this.courses.splice(index, 1);
        return true;
    }

    private getItemById(id: number) {
        var items = this.courses.filter((item: CourseItem) => {
            return item.id == id;
        });
        return items.length > 0 ? items[0] : null;
    }
}