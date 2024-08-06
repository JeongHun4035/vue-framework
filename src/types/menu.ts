export interface IMenu {
  parentId: string
  id: string
  label: string
}

export interface IMenuNode extends IMenu {
  children?: IMenuNode[]
}
