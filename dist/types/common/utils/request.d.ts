export default Request;
declare namespace Request {
    function get(url: any, params?: {}): Promise<import("axios").AxiosResponse<any>>;
    function getLoading(url: any, params?: {}): Promise<import("axios").AxiosResponse<any>>;
    function post(url: any, params?: {}, headers?: any): Promise<import("axios").AxiosResponse<any>>;
    function postLoading(url: any, params?: {}, headers?: any): Promise<import("axios").AxiosResponse<any>>;
}
