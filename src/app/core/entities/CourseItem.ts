import { ICourse } from './ICourse';

export class CourseItem implements ICourse {
    id: number;
    title: string;
    description: string;
    durationMins: number;
    createDate: Date;

    constructor(id: number, title: string, description: string, durationMins: number, createDate: Date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.durationMins = durationMins;
        this.createDate = createDate;
    }
}