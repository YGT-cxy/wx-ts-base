"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiLogin = void 0;
var request_1 = require("./../utils/request");
function apiLogin() {
    return request_1.default.post('/api/wx/login', {
        code: 'asdfasdjfl1234ajklf222'
    });
}
exports.apiLogin = apiLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQXdDO0FBS3hDLFNBQWdCLFFBQVE7SUFDdEIsT0FBTyxpQkFBTyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7UUFDbkMsSUFBSSxFQUFFLHdCQUF3QjtLQUMvQixDQUFDLENBQUE7QUFDSixDQUFDO0FBSkQsNEJBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICcuLy4uL3V0aWxzL3JlcXVlc3QnXHJcblxyXG4vKipcclxuICog55So5oi355m75b2VXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXBpTG9naW4oKTogUHJvbWlzZTxhbnk+IHtcclxuICByZXR1cm4gcmVxdWVzdC5wb3N0KCcvYXBpL3d4L2xvZ2luJywge1xyXG4gICAgY29kZTogJ2FzZGZhc2RqZmwxMjM0YWprbGYyMjInXHJcbiAgfSlcclxufVxyXG4iXX0=