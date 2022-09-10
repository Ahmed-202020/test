export interface StoreInterface {
  todo:Todos[]
}
export interface Todos {
  useId: number,
  id: number,
  title: string,
  completed:boolean
}
