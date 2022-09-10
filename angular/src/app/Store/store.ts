import { todoReducer } from './Reducers/todoReducer';
import { StoreInterface } from './../interfaces/store';
import { ActionReducerMap } from '@ngrx/store';

export let Reducers:ActionReducerMap<any> = {
  todo: todoReducer,
}
