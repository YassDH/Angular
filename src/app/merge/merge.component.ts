import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, map, merge, reduce, scan } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent {
  inputOne = new FormControl(0)
  inputTwo = new FormControl(0)

  subjectOne$ = new BehaviorSubject(0)
  subjectTwo$ = new BehaviorSubject(0)

  mergedValue$ = new Observable<number>
  scanValue$ = new Observable<number>
  reduceValue$ = new Observable<number>

  endFirstStream(){
    this.subjectOne$.complete()
  }
  endSecondStream(){
    this.subjectTwo$.complete()
  }

  constructor(){
    this.mergedValue$ = merge(this.subjectOne$, this.subjectTwo$).pipe(
      map( value => value)
    ) 

    this.scanValue$ = this.mergedValue$.pipe(
      scan((acc, value)=>{
        if(value)
          return acc+value
        return acc
      })
    )

    this.reduceValue$ = this.mergedValue$.pipe(
      reduce((acc, value)=>{
        if(value)
          return acc+value
        return acc
      })
    )

  }


  changeStreamOneValue(){
    if(this.inputOne.value)
      this.subjectOne$.next(this.inputOne.value)
  }
  changeStreamTwoValue(){
    if(this.inputTwo.value)
      this.subjectTwo$.next(this.inputTwo.value)
  }
}
