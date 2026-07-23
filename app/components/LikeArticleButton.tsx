"use client";
import { useState } from "react";

export default function LikeArticleButton(){
    const [like,setLike] = useState(0)
    return <div>
        <button onClick={()=>setLike((prev)=>prev + 1)}>
            <p>{like}</p>
        </button>
    </div>
}
//Ошибка было из-за того ,что я не написал "use client"; а хотя я долженбыл написать, ведь как мы знаем все хуки исключительно работает в клиентской части.
//Решение даной проблемы было в том ,что нужно написать сверху функции и даже сверху всex imports "use client"; чтобы явно дать понять Next.js что это работает на клиентской части