export interface ProductModel{
    id: string
    name: string
    price: number
    photoPaths: string[]
    orderId: any
    newsId: any
    categoryId: number
    order: any
    news: any
    category: Category
    reviews: any[]
  }
  
  export interface Category {
    id: number
    name: string
    products: any[]
  }