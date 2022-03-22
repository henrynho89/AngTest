export interface AppDataState<T>{
    dataState?:DataStateEnum;
    data?:T,
    errorMessage?:String
}

export enum DataStateEnum{
    LOADING,
    LOADED,
    ERROR
}