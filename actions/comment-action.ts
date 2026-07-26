"use server"
import { commentSchema } from "@/schemas/comment-schema"
import { z } from "zod";
import { revalidatePath } from "next/cache";
export type FormState = {
    errors?: { author?: string[]; text?: string[] }
    success?: boolean
}

let comments: { author: string; text: string }[] = []
export async function submitComment(
    prevState: FormState,
    formData: FormData
): Promise<FormState> {
    const validatedFields = commentSchema.safeParse({
        author: formData.get('author'),
        text: formData.get('text')
    })

    if (!validatedFields.success) {
        const flattened = z.flattenError(validatedFields.error);
        return { errors: flattened.fieldErrors }
    }
    comments.push({
        author: validatedFields.data.author,
        text: validatedFields.data.text
    })
    revalidatePath("/blog")
    return { success: true }
}
export async function getComments() {
    return comments
}