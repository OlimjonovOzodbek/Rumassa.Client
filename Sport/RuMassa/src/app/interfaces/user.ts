export interface User {
    wishlist: any[]
    news: any[]
    orders: any[]
    comments: any[]
    id: string
    userName: string
    normalizedUserName: string
    email: string
    normalizedEmail: string
    emailConfirmed: boolean
    passwordHash: string
    securityStamp: string
    concurrencyStamp: string
    phoneNumber: string
    phoneNumberConfirmed: boolean
    twoFactorEnabled: boolean
    lockoutEnd: any
    lockoutEnabled: boolean
    accessFailedCount: number
    lazyLoader: LazyLoader
    name: string
    surname: string
    password: string
    role: string
    isDeleted: boolean
  }
  
  export interface LazyLoader {}
