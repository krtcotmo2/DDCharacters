import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyprint'
})
export class PrettyprintPipe implements PipeTransform {
  transform(value) {
    return JSON.stringify(value, null, 2)
      .replace(' ', '&nbsp;')
      .replace(/,/g, ',<br/>' );
  }

}

