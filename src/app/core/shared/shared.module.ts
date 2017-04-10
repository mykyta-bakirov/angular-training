import { NgModule } from '@angular/core';

import { DurationPipe } from '../pipes/duration.pipe';

@NgModule({
    declarations: [ DurationPipe ],
    imports: [],
    providers: [],
    exports: [ DurationPipe ]
})
export class SharedModule {
    constructor() {
    }
}
