import { Injectable } from '@angular/core';
import { CourseItem } from '../../entities/CourseItem';
import { PagedCourseItems } from '../../entities/PagedCourseItems';
import { Observable, BehaviorSubject } from 'rxjs';
import { Http, RequestOptions, Request, URLSearchParams, RequestMethod } from '@angular/http';

@Injectable()
export class CoursesService {
    private courses: Array<CourseItem>;
    private coursesSubject: BehaviorSubject<Array<CourseItem>>;

    constructor(private http: Http) {
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

    public GetList(search: string, pageIndex: number, coursesPerPage: number): Observable<PagedCourseItems> {
        var url = "http://localhost:3001/courses";

        var requestOptions = new RequestOptions();
        requestOptions.url = url;
        requestOptions.method = RequestMethod.Get;

        requestOptions.search = new URLSearchParams();
        requestOptions.search.set("q", search);
        requestOptions.search.set("_page", pageIndex.toString());
        requestOptions.search.set("_limit", coursesPerPage.toString());

        return this.http.request(new Request(requestOptions))
            .map(response => {
                var courses = response.json().map((c) => {
                    return new CourseItem(c.id, c.name, c.description, c.length, new Date(c.date), c.isTopRated);
                });

                var totalCount = Number(response.headers.get("x-total-count"));
                var pagedCourseItems = new PagedCourseItems(courses, totalCount, pageIndex, coursesPerPage);
                return pagedCourseItems;
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
        var url = "http://localhost:3001/courses";

        var requestOptions = new RequestOptions();
        requestOptions.url = url + "/" + id;
        requestOptions.method = RequestMethod.Get;

        return this.http.request(new Request(requestOptions))
            .map(response => {
                var json = response.json();
                return new CourseItem(json.id, json.name, json.description, json.length, new Date(json.date), json.isTopRated);
            });
    }

    public UpdateItem(course: CourseItem): Observable<Boolean> {
        //TODO: to be implemented in future tasks
        return Observable.of(true);
    }

    public RemoveItem(course: CourseItem): Observable<Boolean> {
        return this.http.delete("http://localhost:3001/courses/" + course.id)
            .map((response) => {
                return response.status == 200;
            });
    }

    private getItemById(id: number): CourseItem {
        var items = this.courses.filter((item: CourseItem) => {
            return item.id == id;
        });
        return items.length > 0 ? items[0] : null;
    }
}