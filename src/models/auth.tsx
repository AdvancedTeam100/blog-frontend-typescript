import { ICategory } from "./category";
import { IUser } from "./user";

export interface IAuth {
    access_token? : string | null,
    user_token? : string | null,
    authToken?  : string | null ,
    isPasswordChanged? : boolean,
    user? : IUser;
    error? : string | null;
}

export interface IBasicData {
    common_group_categories : ICategory[] | null
    mygroup_categories : ICategory[] | null
}

export interface IQrScan {
    google2fa_secret : string | null,
    qr_codeurl : string | null
}