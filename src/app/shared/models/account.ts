export interface AccountWithToken{
    token : string,
    account : Account
}
export interface Account{
    id : number,
    login : string,
    role : Role
}
export interface Role{
    key : number,
    name : string
}