export type UserProps = {
    FirstName: string
    LastName: string
    profileImage: string
    email: string
    credits: string
    products: string[]
	jewelries: string[]
    password: string
    role: string
}

export type UserDataProps = {
    FirstName: string 
    LastName: string 
    email: string 
    profileImage: string 
    role: string 
    credits: string 
    createdAt: string 
    updatedAt: string 
    deleteAt: string 
    products: [] 
    jewelries: [] 
}