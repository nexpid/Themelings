// app/modules/verification/ChangeEmailActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _confirmEmailChange() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 142; continue _fun0001 }
 10:
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 2;
                    var2 = var9[var2];
                    var8 = undefined;
                    var4 = var3.bind(var8)(var2);
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot4;
                    var5 = var5.USER_EMAIL_VERIFY_CODE;
                    var2['url'] = var5;
                    var5 = {};
                    var7 = arg1;
                    var5['code'] = var7;
                    var2['body'] = var5;
                    var5 = {};
                    var7 = _closure1_slot0;
                    var6 = 3;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.NetworkActionNames;
                    var6 = var6.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE;
                    var5['event'] = var6;
                    var2['trackedActionData'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=125);
 123:
                    return var2;
 125:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 139; continue _fun0001 }
 131:
                    var3 = var2.body;
                    return var3;
 139:
                    return var2;
 142:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/verification/ChangeEmailActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function sendConfirmationCode() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arguments[0];
            var8 = undefined;
            if(!(var6 === var8)) { _fun0002_ip = 11; continue _fun0002 }
 9:
            var6 = false;
 11:
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 2;
            var1 = var9[var1];
            var3 = var2.bind(var8)(var1);
            var2 = var3.put;
            var1 = {};
            var4 = _closure1_slot4;
            var4 = var4.USER_EMAIL;
            var1['url'] = var4;
            var4 = {};
            var7 = _closure1_slot0;
            var5 = 3;
            var5 = var9[var5];
            var5 = var7.bind(var8)(var5);
            var5 = var5.NetworkActionNames;
            var5 = var5.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE;
            var4['event'] = var5;
            var5 = {};
            var5['is_resend'] = var6;
            var4['properties'] = var5;
            var1['trackedActionData'] = var4;
            var4 = false;
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['sendConfirmationCode'] = var4;
    var2 = function confirmEmailChange() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['confirmEmailChange'] = var2;
    return var1;
})();