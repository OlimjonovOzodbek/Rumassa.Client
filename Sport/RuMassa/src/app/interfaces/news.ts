import { User } from "./user"

export interface News {
        id: string
        title: string
        cardPhotoPath: string
        date: string
        description: string
        userId: string
        user: User
        products: any[]

}
