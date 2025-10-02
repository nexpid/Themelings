// app/modules/verification/native/ChangeEmailUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _saveEmail() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var6 = arg2;
                    var8 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 2;
                    var2 = var4[var2];
                    var10 = undefined;
                    var7 = var3.bind(var10)(var2);
                    var4 = var7.saveAccountChanges;
                    var3 = {};
                    var2 = false;
                    var3['close'] = var2;
                    var2 = arg1;
                    var2 = var4.bind(var7)(var2, var3);
                    SaveGenerator(address=69);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = var2.ok;
                    if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var7 = var2.body;
                    var3 = null;
                    var9 = var3 == var7;
                    var4 = undefined;
                    if(var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var4 = var7.username;
case 10:
                    if(!(var3 != var4)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 3;
                    var4 = var9[var4];
                    var7 = var7.bind(var10)(var4);
                    var4 = var7.showInvalidUsernameToast;
                    var4 = var4.bind(var7)();
case 12:
                    var7 = var2.body;
                    var9 = var3 == var7;
                    var4 = undefined;
                    if(var9) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var4 = var7.email;
case 14:
                    if(!(var3 == var4)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var7 = var2.body;
                    var9 = var3 == var7;
                    var4 = undefined;
                    if(var9) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var4 = var7.email_token;
case 18:
                    if(!(var3 != var4)) { _fun0001_ip = 8; continue _fun0001 }
case 20:
                    var9 = _closure1_slot4;
                    var4 = _closure1_slot5;
                    var7 = var4.EMAIL_TOKEN;
                    var4 = var2.body;
                    var11 = var4.email_token;
                    var4 = 0;
                    var4 = var11[var4];
                    var4 = var9.bind(var10)(var7, var4);
                    var4 = var6.getState;
                    var4 = var4.bind(var6)();
                    var4 = var4.routes;
                    var9 = var4.length;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var13 = 4;
                    var4 = var4[var13];
                    var4 = var7.bind(var10)(var4);
                    var4 = var4.VerificationModalScenes;
                    var4 = var4.CONFIRM_EMAIL_CHANGE_CODE;
                    var4 = var8.bind(var10)(var4);
                    var7 = -1;
                    if(!(var7 === var4)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var11 = var6.replace;
                    var12 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var13];
                    var7 = var12.bind(var10)(var7);
                    var7 = var7.VerificationModalScenes;
                    var7 = var7.CONFIRM_EMAIL_CHANGE_CODE;
                    var7 = var11.bind(var6)(var7);
                    _fun0001_ip = 8; continue _fun0001;
case 21:
                    var7 = var6.pop;
                    var9 = var9 - var4;
                    var4 = 1;
                    var4 = var9 - var4;
                    var4 = var7.bind(var6)(var4);
                    _fun0001_ip = 8; continue _fun0001;
case 16:
                    var9 = _closure1_slot4;
                    var4 = _closure1_slot5;
                    var7 = var4.EMAIL;
                    var4 = var2.body;
                    var11 = var4.email;
                    var4 = 0;
                    var4 = var11[var4];
                    var4 = var9.bind(var10)(var7, var4);
                    var4 = var6.getState;
                    var4 = var4.bind(var6)();
                    var4 = var4.routes;
                    var7 = var4.length;
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var11 = 4;
                    var4 = var4[var11];
                    var4 = var9.bind(var10)(var4);
                    var4 = var4.VerificationModalScenes;
                    var4 = var4.ENTER_EMAIL;
                    var4 = var8.bind(var10)(var4);
                    var8 = -1;
                    if(!(var8 === var4)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
                    var8 = var6.replace;
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var11];
                    var5 = var9.bind(var10)(var5);
                    var5 = var5.VerificationModalScenes;
                    var5 = var5.ENTER_EMAIL;
                    var5 = var8.bind(var6)(var5);
                    _fun0001_ip = 25; continue _fun0001;
case 23:
                    var5 = var6.pop;
                    var7 = var7 - var4;
                    var4 = 1;
                    var4 = var7 - var4;
                    var4 = var5.bind(var6)(var4);
case 25:
                    return var3;
case 8:
                    return var2;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
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
    var7 = var4.setChangeEmailError;
    var _closure1_slot4 = var7;
    var4 = var4.ChangeEmailFields;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/verification/native/ChangeEmailUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function saveEmail() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['saveEmail'] = var4;
    var4 = function finishChangeEmailFlow(arg1, arg2) {
        var5 = arg1;
        var4 = var5.replace;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var2 = var2.VerificationModalScenes;
        var3 = var2.CHANGE_EMAIL_COMPLETE;
        var2 = {};
        var6 = arg2;
        var2['email'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['finishChangeEmailFlow'] = var4;
    var2 = function finishVerifyEmailFlow(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var1 = var4.getState;
            var1 = var1.bind(var4)();
            var1 = var1.routes;
            var5 = var1.length;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 4;
            var2 = var1[var8];
            var1 = undefined;
            var2 = var6.bind(var1)(var2);
            var2 = var2.VerificationModalScenes;
            var6 = var2.RESEND_EMAIL;
            var2 = arg2;
            var2 = var2.bind(var1)(var6);
            var6 = -1;
            if(!(var6 === var2)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var6 = var4.replace;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var7.bind(var1)(var3);
            var3 = var3.VerificationModalScenes;
            var3 = var3.RESEND_EMAIL;
            var3 = var6.bind(var4)(var3);
            _fun0002_ip = 28; continue _fun0002;
case 26:
            var3 = var4.pop;
            var2 = var5 - var2;
            var2 = var3.bind(var4)(var2);
case 28:
            return var1;
        }
    };
    var3['finishVerifyEmailFlow'] = var2;
    return var1;
})();