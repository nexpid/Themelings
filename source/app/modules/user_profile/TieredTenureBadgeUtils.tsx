// app/modules/user_profile/TieredTenureBadgeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.TENURE_BADGES;
    var _closure1_slot2 = var4;
    var4 = function getTieredTenureBadgeData(arg1) {
        var2 = _closure1_slot2;
        var1 = arg1;
        var1 = var2[var1];
        return var1;
    };
    var _closure1_slot3 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/TieredTenureBadgeUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getTieredTenureBadgeData'] = var4;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot3;
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var1 = null;
            var3 = var1 == var3;
            if(var3) { _fun0001_ip = 29; continue _fun0001 }
 26:
            var1 = var2;
 29:
            return var1;
        }
    };
    var3['getTieredTenureBadge'] = var4;
    var2 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg2;
            var1 = null;
            if(!(var1 != var6)) { _fun0002_ip = 105; continue _fun0002 }
 9:
            var5 = _closure1_slot3;
            var4 = undefined;
            var2 = arg1;
            var2 = var5.bind(var4)(var2);
            if(!(var1 != var2)) { _fun0002_ip = 103; continue _fun0002 }
 30:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var5 = 1;
            var3 = var3[var5];
            var3 = var7.bind(var4)(var3);
            var3 = var3.bind(var4)(var6);
            var6 = var3.add;
            var4 = var2.tenureReqNumMonths;
            var2 = 'months';
            var2 = var6.bind(var3)(var4, var2);
            var4 = var3.add;
            var2 = 'days';
            var2 = var4.bind(var3)(var5, var2);
            var2 = var3.toDate;
            var2 = var2.bind(var3)();
            return var2;
 103:
            return var1;
 105:
            return var1;
        }
    };
    var3['getEarnedOnDate'] = var2;
    return var1;
})();