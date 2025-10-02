// app/actions/native/EmailVerificationModalActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot3 = var2;
    var2 = {};
    var7 = function open() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[0];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = false;
case 2:
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 1;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.track;
            var3 = _closure1_slot3;
            var3 = var3.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED;
            var3 = var4.bind(var5)(var3);
case 4:
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var5 = 2;
            var5 = var3[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.pushLazy;
            var7 = _closure1_slot0;
            var4 = 4;
            var4 = var3[var4];
            var7 = var7.bind(var1)(var4);
            var4 = 3;
            var4 = var3[var4];
            var3 = var3.paths;
            var4 = var7.bind(var1)(var4, var3);
            var3 = {};
            var3['isChangeEmail'] = var2;
            var2 = 'EMAIL_VERIFICATION_MODAL_KEY';
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        }
    };
    var2['open'] = var7;
    var4 = function close() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.wait;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.popWithKey;
            var2 = 'EMAIL_VERIFICATION_MODAL_KEY';
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['close'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/native/EmailVerificationModalActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();