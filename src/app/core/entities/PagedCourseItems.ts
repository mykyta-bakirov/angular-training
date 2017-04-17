import { ICourse } from './ICourse';

export class PagedCourseItems {
    public courses: ICourse[];
    public coursesTotalCount: number;
    public pageIndex: number;
    public coursesPerPage: number;

    public constructor(page: ICourse[], totalCount: number, pageIndex: number, coursesPerPage:number) {
        this.courses = page;
        this.coursesTotalCount = totalCount;
        this.pageIndex = pageIndex;
        this.coursesPerPage = coursesPerPage;
        
    }
}