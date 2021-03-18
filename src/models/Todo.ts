export interface Todo {
    id?: number;
    text: string;
    owner: string;
    state: 'new' | 'started' | 'finished';
    createdAt?: string;
    updatedAt?: string;
}