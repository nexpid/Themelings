// app/modules/pomelo/useIsEligibleForPomelo.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function eligible(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 25; continue _fun0001 }
 12:
            var2 = var3.hasUniqueUsername;
            var2 = var2.bind(var3)();
            var1 = !var2;
 25:
            if(!var1) { _fun0001_ip = 59; continue _fun0001 }
 28:
            var2 = var3.hasVerifiedEmailOrPhone;
            var2 = var2.bind(var3)();
            var3 = !var2;
            var2 = !var3;
            if(var3) { _fun0001_ip = 56; continue _fun0001 }
 47:
            var3 = arg2;
            var3 = !var3;
            var2 = !var3;
 56:
            var1 = var2;
 59:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/pomelo/useIsEligibleForPomelo.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = _closure1_slot2;
        var2 = var3.getCurrentUser;
        var3 = var2.bind(var3)();
        var5 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var1 = var2[var1];
        var2 = undefined;
        var5 = var5.bind(var2)(var1);
        var1 = var5.getPomeloEligibility;
        var1 = var1.bind(var5)();
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var3['isEligibleForPomelo'] = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var2 = 2;
        var2 = var6[var2];
        var3 = undefined;
        var8 = var5.bind(var3)(var2);
        var7 = var8.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var2 = _closure1_slot2;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            return var1;
        };
        var2 = var7.bind(var8)(var2, var1);
        var1 = 1;
        var1 = var6[var1];
        var5 = var5.bind(var3)(var1);
        var1 = var5.usePomeloEligibility;
        var1 = var1.bind(var5)();
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['useIsEligibleForPomelo'] = var2;
    return var1;
})();