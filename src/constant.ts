export interface INote {
    id: number
    value: String
}

export interface IState {
    notes: INote[],
    note: INote
}

export const URL_BASE = 'https://springboot-project-example.herokuapp.com';