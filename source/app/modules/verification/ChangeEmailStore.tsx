// app/modules/verification/ChangeEmailStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var4 = function setChangeEmailError(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot3;
            var2 = var3.setState;
            var1 = function(arg1) {
                var1 = {};
                var2 = {};
                var3 = arg1;
                var5 = var3.errors;
                var6 = var2;
                var3 = copyDataProperties(var6, var5);
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2[var4] = var3;
                var1['errors'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot4 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var6 = {};
    var1 = 'email';
    var6['EMAIL'] = var1;
    var1 = 'email_token';
    var6['EMAIL_TOKEN'] = var1;
    var1 = 'password';
    var6['PASSWORD'] = var1;
    var1 = {'errors': null, 'emailToken': null};
    var _closure1_slot2 = var1;
    var1 = 0;
    var5 = var9[var1];
    var1 = undefined;
    var10 = var8.bind(var1)(var5);
    var7 = var10.create;
    var5 = function() {
        var1 = _closure1_slot2;
        return var1;
    };
    var5 = var7.bind(var10)(var5);
    var _closure1_slot3 = var5;
    var7 = 2;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/verification/ChangeEmailStore.tsx';
    var7 = var8.bind(var9)(var7);
    var3['ChangeEmailFields'] = var6;
    var3['useChangeEmailStore'] = var5;
    var3['setChangeEmailError'] = var4;
    var4 = function useChangeEmailError(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot3;
        var3 = undefined;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var3 = var1.errors;
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot0;
                var1 = var3[var2];
case 2:
                return var1;
            }
        };
        var3 = var4.bind(var3)(var1);
        var1 = new Array(2);
        var1[0] = var3;
        var2 = function(arg1) {
            var4 = _closure1_slot4;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = arg1;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1[1] = var2;
        return var1;
    };
    var3['useChangeEmailError'] = var4;
    var4 = function setEmailToken(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot3;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure2_slot0;
            var1['emailToken'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setEmailToken'] = var4;
    var2 = function resetChangeEmailStore() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.batchUpdates;
        var2 = function() {
            var4 = _closure1_slot3;
            var3 = var4.setState;
            var2 = _closure1_slot2;
            var1 = true;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['resetChangeEmailStore'] = var2;
    return var1;
})();