export const LOAD = "[todo]LOAD";
export const SUCCESS = "[todo]success";
export const FAILED = "[todo]failed";

export class LoadAction{
  type:string = LOAD
}
export class SuccessAction{
  type: string = SUCCESS;
  payload: any;
  constructor(payload:any) {
    this.payload = payload
  }
}
export class FailedAction{
  type: string = FAILED;
  payload: any;
  constructor(payload:any) {
    this.payload = payload
  }
}

