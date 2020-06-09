"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Flyio = require('./../lib/flyio/wx.js');
var flyio = new Flyio();
flyio.config.timeout = 15000;
flyio.config.baseURL = '';
flyio.interceptors.request.use(function (request) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2, request];
    });
}); });
flyio.interceptors.response.use(function (response) {
    var data = response.data;
    var code = data.code, message = data.message;
    if (code === 200) {
        return data;
    }
    else {
        return Promise.reject(message);
    }
}, function (err) {
    return err;
});
exports.default = flyio;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtBQUU3QyxJQUFNLEtBQUssR0FBUSxJQUFJLEtBQUssRUFBRSxDQUFBO0FBTzlCLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtBQUc1QixLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUE7QUFHekIsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFFLFVBQU8sT0FBTzs7UUFRNUMsV0FBTyxPQUFPLEVBQUE7O0tBQ2YsQ0FBQyxDQUFBO0FBR0YsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFFLFVBQUMsUUFBUTtJQUM5QixJQUFBLElBQUksR0FBSyxRQUFRLEtBQWIsQ0FBYTtJQUNqQixJQUFBLElBQUksR0FBYyxJQUFJLEtBQWxCLEVBQUUsT0FBTyxHQUFLLElBQUksUUFBVCxDQUFTO0lBQzlCLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRTtRQUNoQixPQUFPLElBQUksQ0FBQTtLQUNaO1NBQU07UUFDTCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7S0FDL0I7QUFFSCxDQUFDLEVBQUUsVUFBQyxHQUFRO0lBT1YsT0FBTyxHQUFHLENBQUE7QUFDWixDQUFDLENBQ0YsQ0FBQTtBQUVELGtCQUFlLEtBQUssQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZseSB9IGZyb20gXCIuLi8uLi90eXBpbmdzL3R5cGVzL2ZseWlvXCJcclxuXHJcbmNvbnN0IEZseWlvID0gcmVxdWlyZSgnLi8uLi9saWIvZmx5aW8vd3guanMnKVxyXG5cclxuY29uc3QgZmx5aW86IEZseSA9IG5ldyBGbHlpbygpXHJcblxyXG4vLyB0b2tlbuivt+axgueZveWQjeWNlVxyXG4vLyBjb25zdCByZXF1ZXN0V2hpdGVsaXN0ID0gWycvYXBpL3d4L2xvZ2luJ11cclxuLy8gY29uc3QgdG9rZW4gPSAndG9rZW4nXHJcblxyXG4vLyDorr7nva7otoXml7ZcclxuZmx5aW8uY29uZmlnLnRpbWVvdXQgPSAxNTAwMFxyXG5cclxuLy8g6K6+572u6K+35rGC5Z+65Zyw5Z2AXHJcbmZseWlvLmNvbmZpZy5iYXNlVVJMID0gJydcclxuXHJcbi8vIOa3u+WKoOivt+axguaLpuaIquWZqFxyXG5mbHlpby5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoIGFzeW5jIChyZXF1ZXN0KSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2cocmVxdWVzdClcclxuICAvLyBBdXRob3JpemF0aW9uXHJcbiAgLy8g5re75YqgdG9rZW5cclxuICAvLyBpZiAoIXJlcXVlc3RXaGl0ZWxpc3QuaW5jbHVkZXMocmVxdWVzdC51cmwpICYmIHRva2VuKSB7XHJcbiAgLy8gICByZXF1ZXN0LmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IHRva2VuXHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gcmVxdWVzdFxyXG59KVxyXG5cclxuLy8g5re75Yqg5ZON5bqU5oum5oiq5ZmoXHJcbmZseWlvLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoIChyZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZVxyXG4gICAgY29uc3QgeyBjb2RlLCBtZXNzYWdlIH0gPSBkYXRhXHJcbiAgICBpZiAoY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgIHJldHVybiBkYXRhXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobWVzc2FnZSlcclxuICAgIH1cclxuXHJcbiAgfSwgKGVycjogYW55KSA9PiB7XHJcbiAgICAvLyBjb25zdCB7IGRhdGE6IHsgbWVzc2FnZSB9IH0gPSBlcnIucmVzcG9uc2VcclxuICAgIC8vIHd4LnNob3dUb2FzdCh7XHJcbiAgICAvLyAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgLy8gICBpY29uOiAnbm9uZScsXHJcbiAgICAvLyAgIG1hc2s6IHRydWVcclxuICAgIC8vIH0pXHJcbiAgICByZXR1cm4gZXJyXHJcbiAgfVxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmbHlpb1xyXG4iXX0=