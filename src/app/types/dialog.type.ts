export type Dialog = {
  id: string
  interpolateParams?: { [key: string]: string }
  actions?: Action[]
  style?: {
    align?: 'left' | 'center' | 'justify' | 'right'
    width?: 'small' | 'medium' | 'large'
  }
}

export type Action = {
  id: string
  callback?: () => Promise<Dialog | undefined>
}