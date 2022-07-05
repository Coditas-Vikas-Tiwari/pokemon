export interface IFormData{
    email:string,
    password:string
}

export interface IResult {

    name:string,
    role:string,
    token:string,
    tokenExpiry:string,
    userId:string
    }

    export interface IUserDetails{
        data: IResult
    }