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
var Fly = require('./../lib/wx.js');
var flyio = new Fly();
flyio.config.timeout = 15000;
flyio.config.baseURL = 'https://blo.gjz.com';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUVyQyxJQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFBO0FBT3ZCLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtBQUc1QixLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQTtBQUc1QyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUUsVUFBTyxPQUFZOztRQVFqRCxXQUFPLE9BQU8sRUFBQTs7S0FDZixDQUFDLENBQUE7QUFHRixLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUUsVUFBQyxRQUFhO0lBQ25DLElBQUEsSUFBSSxHQUFLLFFBQVEsS0FBYixDQUFhO0lBQ2pCLElBQUEsSUFBSSxHQUFjLElBQUksS0FBbEIsRUFBRSxPQUFPLEdBQUssSUFBSSxRQUFULENBQVM7SUFDOUIsSUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFO1FBQ2hCLE9BQU8sSUFBSSxDQUFBO0tBQ1o7U0FBTTtRQUNMLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUMvQjtBQUVILENBQUMsRUFBRSxVQUFDLEdBQVE7SUFPVixPQUFPLEdBQUcsQ0FBQTtBQUNaLENBQUMsQ0FDRixDQUFBO0FBRUQsa0JBQWUsS0FBSyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRmx5ID0gcmVxdWlyZSgnLi8uLi9saWIvd3guanMnKVxyXG5cclxuY29uc3QgZmx5aW8gPSBuZXcgRmx5KClcclxuXHJcbi8vIHRva2Vu6K+35rGC55m95ZCN5Y2VXHJcbi8vIGNvbnN0IHJlcXVlc3RXaGl0ZWxpc3QgPSBbJy9hcGkvd3gvbG9naW4nXVxyXG4vLyBjb25zdCB0b2tlbiA9ICcxMjM0J1xyXG5cclxuLy8g6K6+572u6LaF5pe2XHJcbmZseWlvLmNvbmZpZy50aW1lb3V0ID0gMTUwMDBcclxuXHJcbi8vIOiuvue9ruivt+axguWfuuWcsOWdgFxyXG5mbHlpby5jb25maWcuYmFzZVVSTCA9ICdodHRwczovL2Jsby5nanouY29tJ1xyXG5cclxuLy8g5re75Yqg6K+35rGC5oum5oiq5ZmoXHJcbmZseWlvLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZSggYXN5bmMgKHJlcXVlc3Q6IGFueSk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2cocmVxdWVzdClcclxuICAvLyBBdXRob3JpemF0aW9uXHJcbiAgLy8g5re75YqgdG9rZW5cclxuICAvLyBpZiAoIXJlcXVlc3RXaGl0ZWxpc3QuaW5jbHVkZXMocmVxdWVzdC51cmwpICYmIHRva2VuKSB7XHJcbiAgLy8gICByZXF1ZXN0LmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IHRva2VuXHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gcmVxdWVzdFxyXG59KVxyXG5cclxuLy8g5re75Yqg5ZON5bqU5oum5oiq5ZmoXHJcbmZseWlvLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoIChyZXNwb25zZTogYW55KTogYW55ID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2VcclxuICAgIGNvbnN0IHsgY29kZSwgbWVzc2FnZSB9ID0gZGF0YVxyXG4gICAgaWYgKGNvZGUgPT09IDIwMCkge1xyXG4gICAgICByZXR1cm4gZGF0YVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG1lc3NhZ2UpXHJcbiAgICB9XHJcblxyXG4gIH0sIChlcnI6IGFueSkgPT4ge1xyXG4gICAgLy8gY29uc3QgeyBkYXRhOiB7IG1lc3NhZ2UgfSB9ID0gZXJyLnJlc3BvbnNlXHJcbiAgICAvLyB3eC5zaG93VG9hc3Qoe1xyXG4gICAgLy8gICB0aXRsZTogbWVzc2FnZSxcclxuICAgIC8vICAgaWNvbjogJ25vbmUnLFxyXG4gICAgLy8gICBtYXNrOiB0cnVlXHJcbiAgICAvLyB9KVxyXG4gICAgcmV0dXJuIGVyclxyXG4gIH1cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmx5aW9cclxuIl19