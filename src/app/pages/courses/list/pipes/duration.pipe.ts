import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {
    transform(durationMins: number) {
        if (durationMins < 60) {
            return durationMins + "min";
        }

        var hours = parseInt((durationMins / 60) + "");
        var mins = durationMins - hours * 60;

        var result = hours + "h";
        if(mins > 0){
            result += " " + mins + "min";
        }

        return result;
    }
}