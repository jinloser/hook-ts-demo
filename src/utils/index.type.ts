export interface memoChildData {
  time:number,
  children:number
}

export interface memoParentData extends memoChildData{
  value:string
}