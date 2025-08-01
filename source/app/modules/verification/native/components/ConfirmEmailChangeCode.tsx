// app/modules/verification/native/components/ConfirmEmailChangeCode.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.setEmailToken;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/verification/native/components/ConfirmEmailChangeCode.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConfirmEmailChangeCode(arg1) {
        var1 = arg1;
        var10 = var1.isChangeEmail;
        var _closure2_slot0 = var10;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 4;
        var1 = var9[var1];
        var4 = undefined;
        var2 = var8.bind(var4)(var1);
        var1 = var2.useNavigation;
        var1 = var1.bind(var2)();
        var _closure2_slot1 = var1;
        var7 = _closure1_slot4;
        var3 = var7.useCallback;
        var2 = new Array(2);
        var2[0] = var10;
        var2[1] = var1;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var4 = _closure1_slot5;
                var3 = null;
                var5 = var3 != var1;
                if(!var5) { _fun0001_ip = 22; continue _fun0001 }
 19:
                var3 = var1;
 22:
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = _closure2_slot0;
                var4 = _closure2_slot1;
                var3 = var4.push;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 5;
                var2 = var7[var2];
                var2 = var6.bind(var1)(var2);
                var2 = var2.VerificationModalScenes;
                if(var5) { _fun0001_ip = 87; continue _fun0001 }
 74:
                var5 = var2.ENTER_EMAIL;
                var5 = var3.bind(var4)(var5);
                _fun0001_ip = 98; continue _fun0001;
 87:
                var2 = var2.CHANGE_EMAIL_COLLECT_REASONS;
                var2 = var3.bind(var4)(var2);
 98:
                return var1;
            }
        };
        var7 = var3.bind(var7)(var1, var2);
        var3 = _closure1_slot6;
        var2 = _closure1_slot1;
        var1 = 6;
        var1 = var9[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var10 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 62; continue _fun0002 }
 7:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 7;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.confirmEmailChange;
                        var2 = arg1;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address=50);
 48:
                        return var2;
 50:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 59; continue _fun0002 }
 56:
                        return var2;
 59:
                        return var2;
 62:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var10 = var10.bind(var4)();
        var1['onFormSubmit'] = var10;
        var1['onSuccess'] = var7;
        var6 = _closure1_slot3;
        var5 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 58; continue _fun0003 }
 7:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var2 = var3[var2];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var2);
                    var2 = var4.sendConfirmationCode;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=46);
 44:
                    return var2;
 46:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 55; continue _fun0003 }
 52:
                    return var3;
 55:
                    return var2;
 58:
                    return var1;
                }
            };
            return var1;
        };
        var5 = var6.bind(var4)(var5);
        var1['onResend'] = var5;
        var5 = 8;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var6 = var6.t;
        var6 = var6.2x/2Ul;
        var6 = var7.bind(var10)(var6);
        var1['headerText'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.PDTjLC;
        var5 = var6.bind(var7)(var5);
        var1['confirmButtonText'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();