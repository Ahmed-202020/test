import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEffect , Actions , ofType } from "@ngrx/effects";
import { FailedAction, LOAD, SuccessAction } from './../Actions/todoAction';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class TodoEffet{
  constructor(private _HttpClient: HttpClient , private _Actions:Actions) { }
  todo$ = createEffect(() =>this._Actions.pipe(
    ofType(LOAD) ,
    mergeMap(()=>this._HttpClient.get("https://jsonplaceholder.typicode.com/todos").pipe(
      map((res) => new SuccessAction(res)),
      catchError((err)=> of (new FailedAction(err)))
      ))
    )
  )
}
