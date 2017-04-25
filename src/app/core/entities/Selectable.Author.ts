import { Author } from './Author';

export class SelectableAuthor extends Author {
    public isSelected: boolean;

    constructor(id: number, name: string) {
        super(id, name);
        this.isSelected = false;
    }
}
