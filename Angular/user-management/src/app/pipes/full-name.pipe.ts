import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(firstName: string, lastName: string): unknown {
    return firstName + ' ' + lastName;
  }
}

// types of pipes -- pure and impure
// observables -- async pipes
// subjective vs behavior subject
// directives
//

