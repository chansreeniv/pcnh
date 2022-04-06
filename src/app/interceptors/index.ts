import { HTTP_INTERCEPTORS } from "@angular/common/http"
import { AuthInterceptor } from "./auth.interceptor"
import { ResponseInterceptor } from "./response.interceptor"



export const httpInterceptorProviders =[
    addInterceptor(AuthInterceptor),
    addInterceptor(ResponseInterceptor)
]

function addInterceptor<T>(interceptor: T){
    return {
        provide: HTTP_INTERCEPTORS,
        useClass: interceptor,
        multi: true
      }
}