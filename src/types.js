export type Post = {
    keywords: string[],
    bookmarksCount: number,
    onlineCount: number,
    peopleCount: number,
    title: string,
    body: string,
    author: User,
    comments: PostComment[],
    fliendCallUsers: User[],
    reTalkUsers: User[],
    onFriendCallTap: () => void,
    onReTalkTap: () => void,
    onShareTap: () => void
}

export type User = {
    photo: string,
    name: string
}

export type PostComment = {
    author: User,
    date: Date,
    text: string
}