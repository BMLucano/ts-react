

export interface IBoxFormData{
  width: number,
  height: number,
  backgroundColor: string
}

export interface IBox extends IBoxFormData{
  id: string,
}

export interface IBoxProps extends IBox {
  remove: Function
}

export interface IBoxInitialFormData {
  width: string,
  height: string,
  backgroundColor: string
}

export interface INewBoxFormProps{
  createBox: (newBox:IBox) => void
}