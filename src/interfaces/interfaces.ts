export interface Item {
  name: string
  emoji: string
}

export interface Category extends Item {
  id: number
  // items: Item[]
}
