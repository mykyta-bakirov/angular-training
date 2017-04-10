import { Injectable } from '@angular/core';
import { CourseItem } from '../../entities/CourseItem';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class CoursesService {
    private courses: Array<CourseItem>;
    private coursesSubject: BehaviorSubject<Array<CourseItem>>;

    constructor() {
        this.courses = new Array<CourseItem>();
        for (var i = 0; i < 10; i++) {
            var courseItem = new CourseItem(
                i,
                "Video course " + i,
                i + " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                Math.floor((Math.random() * 100) + 10),
                new Date(),
                false);
            if (i < 2) {
                courseItem.date.setDate(courseItem.date.getDate() - 15);
                courseItem.topRated = true;
            }

            if (i >= 2 && i <= 4) {
                courseItem.date.setDate(courseItem.date.getDate() + 1);
            }

            let twoWeeksDate = new Date();
            twoWeeksDate.setDate((new Date()).getDate() - 14);

            if (courseItem.date > twoWeeksDate) {
                this.courses.push(courseItem);
            }
        }

        this.coursesSubject = new BehaviorSubject(this.courses);
    }

    public GetList(): Observable<Array<CourseItem>> {
        return this.coursesSubject.asObservable().map((courseItems: Array<CourseItem>) => {
            return courseItems.slice(0);
        });
    }

    public AddCourse(course: CourseItem): Observable<Boolean> {
        if (!course) {
            return Observable.of(false);
        }
        this.courses.push(course);
        return Observable.of(true);
    }

    public GetItemById(id: number): Observable<CourseItem> {
        return Observable.of(this.getItemById(id));
    }

    public UpdateItem(course: CourseItem): Observable<Boolean> {
        //TODO: to be implemented in future tasks
        return Observable.of(true);
    }

    public RemoveItem(course: CourseItem): Observable<Boolean> {
        var index = this.courses.indexOf(course);
        var response = false;
        if (index >= 0) {
            this.courses.splice(index, 1);
            response = true;
        }
        // imitation of http request
        return new Observable(observer => {
            observer.next(response);

            setTimeout(() => {
                observer.complete();
            }, 1000);
        });
    }

    private getItemById(id: number): CourseItem {
        var items = this.courses.filter((item: CourseItem) => {
            return item.id == id;
        });
        return items.length > 0 ? items[0] : null;
    }
}