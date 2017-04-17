import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberToArray'
})
export class NumberToArrayPipe implements PipeTransform {
    transform(number: number) {
        var result = [];

        for (var i = 0; i <= number; i++) {
            result.push(i);
        }

        return result;
    }
}