export interface Item {
  id: number
  name: string
  emoji: string
}

export interface Category extends Item {
  items: Item[]
}
