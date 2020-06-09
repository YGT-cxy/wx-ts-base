"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiLogin = void 0;
var request_1 = __importDefault(require("./../utils/request"));
function apiLogin() {
    return request_1.default.post('/api/wx/login', {
        code: 'asdfasdjfl1234ajklf222'
    });
}
exports.apiLogin = apiLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsK0RBQXdDO0FBS3hDLFNBQWdCLFFBQVE7SUFDdEIsT0FBTyxpQkFBTyxDQUFDLElBQUksQ0FBTSxlQUFlLEVBQUU7UUFDeEMsSUFBSSxFQUFFLHdCQUF3QjtLQUMvQixDQUFDLENBQUE7QUFDSixDQUFDO0FBSkQsNEJBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICcuLy4uL3V0aWxzL3JlcXVlc3QnXHJcblxyXG4vKipcclxuICog55So5oi355m75b2VXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXBpTG9naW4oKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3QucG9zdDxhbnk+KCcvYXBpL3d4L2xvZ2luJywge1xyXG4gICAgY29kZTogJ2FzZGZhc2RqZmwxMjM0YWprbGYyMjInXHJcbiAgfSlcclxufVxyXG4iXX0=