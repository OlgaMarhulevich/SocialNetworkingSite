export type PostType = {
    id: number,
    message: string,
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
    img: string
    messages: Array<MessageType>
    newMessage: string
}
export type MessageType = {
    message: string
    name: string
    img: string
}

export type FriendType = {
    id: number
    name: string
    img: string
}