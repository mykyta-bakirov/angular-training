import { ICourse } from './ICourse';

export class CourseItem implements ICourse {
    public id: number;
    public title: string;
    public description: string;
    public durationMins: number;
    public createDate: Date;

    constructor(id: number, title: string, description: string, durationMins: number, createDate: Date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.durationMins = durationMins;
        this.createDate = createDate;
    }
}
