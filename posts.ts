export interface Post {
    id: number;
    title: string;
    body: string;
    author: string;
    date: string;
    comments: PostComment[];
}
export interface PostComment {
    id: number;
   username : string;
    text: string;
}