import {object,string,ref} from "yup"

export const signupSchema = object({
    email:string()
        .email("Ingrese un email valido")
        .required("Ingrese n email"),
    password:string()
        .min(6,"minimo 6 caracteres")
        .required("Ingrese una password"),
    confirmPassword:string()
        .oneOf([ref("password")],"los password no son iguales")
        .required("falta ingresarlo nuevamente")
})