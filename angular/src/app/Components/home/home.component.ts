import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadAction } from 'src/app/Store/Actions/todoAction';
import { StoreInterface } from './../../interfaces/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todos:any[] = []
  constructor(private _Store:Store<StoreInterface>) { }

  ngOnInit(): void {
    this._Store.subscribe((res) => {
      console.log(res.todo);
      this.todos = res.todo;
    })
    this._Store.dispatch(new LoadAction())
  }
}
