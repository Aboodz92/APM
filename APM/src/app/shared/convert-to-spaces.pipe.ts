import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'ConvertToSpacesPipe'
})

export class ConvertToSpacesPipe implements PipeTransform{
    transform(value: string, symbol: string): String{
        return value.replace(symbol,' ');
    }
}