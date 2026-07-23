import { NextRequest, NextResponse } from "next/server";
export default function proxy(request : NextRequest){
    const aythHeader = request.headers.get("authorization")
    if(aythHeader !== "Bearer demo-secret-token")
    {
        return NextResponse.json({error: "Не авторизован"},{status: 401})
    }
    return NextResponse.next()
}
export const config = {
   matcher: ["/blog/third-article"]
}