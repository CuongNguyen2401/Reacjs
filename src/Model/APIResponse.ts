
export interface ApiResponse<T> {
    data: ApiResponse<String>;
    code: number;
    message: string;
    result: T;
}