'use client'
import React, { useActionState } from 'react'
import { FormState, submitComment } from '@/actions/comment-action'

const initialState: FormState = {}

const CommentForm = () => {
    const [state, formAction, isPending] = useActionState(submitComment, initialState)

    return (
        <form action={formAction} className="mt-6 space-y-4">
            <div className="text-center">
                {state.success && (
                    <p className="text-green-600">
                        Отправлено
                    </p>
                )}
            </div>
            <div>
                <input
                    type="text"
                    name="author"
                    placeholder="Имя"
                    className="w-full rounded-lg border border-zinc-300 p-2 text-center"
                />
                <div className="text-center">
                    {state.errors?.author && (
                        <p className="mt-1 text-sm text-red-500">
                            {state.errors.author}
                        </p>
                    )}
                </div>
            </div>

            <div>
                <input type="text" name='text' placeholder='Комментарий' className="w-full rounded-lg border border-zinc-300 p-2 text-center" />
                <div className="text-center">
                    {state.errors?.text && (
                        <p className="mt-1 text-sm text-red-500">
                            {state.errors.text}
                        </p>
                    )}
                </div>
            </div>
            <div className="text-center">
                <button
                    type="submit"
                    disabled={isPending}
                    className="rounded-lg bg-black px-4 py-2 text-white hover:bg-black-700 disabled:opacity-50"
                >
                    {isPending ? 'Отправка...' : 'Отправить'}
                </button>
            </div>
        </form>
    )
}

export default CommentForm