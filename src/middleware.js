export{default} from 'next-auth/middleware'

export const config = {matcher:[
    "/my-spending-plan/:path*",
    "/transaction/:path*",
    "/addCategory/:path*",  
    "/api/:path*",
]
}