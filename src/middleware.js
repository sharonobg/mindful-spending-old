export{default} from 'next-auth/middleware'

export const config = {matcher:[
    "/my-spending-plan",
    "/transaction/:path*",
    "/addCategory",  
    "/api/:path*",
     
]
}