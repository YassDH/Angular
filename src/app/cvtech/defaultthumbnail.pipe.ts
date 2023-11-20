import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultthumbnail'
})
export class DefaultthumbnailPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if(!value)
      return "default.png";
    return value;
  }

}
