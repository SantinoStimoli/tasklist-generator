interface CategoryItem {
  name: string
  emoji: string
}

export interface Category extends CategoryItem {
  items: CategoryItem[]
}
