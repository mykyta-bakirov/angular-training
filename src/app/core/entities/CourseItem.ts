import { ICourse } from './ICourse';

export class CourseItem implements ICourse {
    public id: number;
    public title: string;
    public description: string;
    public durationMins: number;
    public date: Date;
    public topRated : Boolean;

    constructor(id: number, title: string, description: string, durationMins: number, date: Date, topRated: Boolean) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.durationMins = durationMins;
        this.date = date;
        this.topRated = topRated;
    }
}
