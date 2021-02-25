var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});
const Request = {
    get: (url, params = {}) => axios.get(url, { params }),
    getLoading: (url, params = {}) => __awaiter(void 0, void 0, void 0, function* () {
        const promise = yield axios.get(url, { params });
        return promise;
    }),
    post: (url, params = {}, headers = null) => axios.post(url, params, headers),
    postLoading: (url, params = {}, headers = null) => __awaiter(void 0, void 0, void 0, function* () {
        const promise = yield axios.get(url, params, headers);
        return promise;
    }),
};
export default Request;
//# sourceMappingURL=request.js.map