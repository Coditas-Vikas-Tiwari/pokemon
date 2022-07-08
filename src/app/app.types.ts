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
    export interface Employee{
        name:string,
        type:string,
        level:number,
        createdOn:string,
        updatedOn:string
        
      }

      export interface IPokeRes{
        data: IPoke
      }
    export interface IPoke {
        id:string,
        name:string,
        type:IType,
        level:number,
        createdOn:string,
        updatedOn:string
        
      }


    export interface ICreatePoke{
        name:string,
        level:number,
        type:number

    }
export interface IType{
    id:string,
    name:string
}
    export interface IUpdatePoke{
        id:string,
        name:string,
        level:number,
        isSelected:boolean,
        createdOn:string,
        updatedOn:string
        type:IType
    }