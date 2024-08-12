export interface IMenu {
  id: string
  parentId: string
  label: string
  children?: IMenu[] // children 속성 추가
}
