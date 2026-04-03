// app/modules/premium/tiered_tenure_badging/hooks/useTimeUntilNextBadge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function computeDaysUntilNextBadgeDate(arg1, arg2) {
        var1 = global;
        var4 = var1.Math;
        var3 = var4.max;
        var7 = _closure1_slot5;
        var2 = undefined;
        var6 = arg1;
        var5 = arg2;
        var6 = var7.bind(var2)(var6, var5);
        var5 = var6.diff;
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 1;
        var1 = var8[var1];
        var1 = var7.bind(var2)(var1);
        var2 = var1.bind(var2)();
        var1 = 'days';
        var2 = var5.bind(var6)(var2, var1);
        var1 = 0;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot4 = var4;
    var1 = function computeNextBadgeDate(arg1, arg2) {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var4 = 1;
        var1 = var1[var4];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = arg1;
        var5 = var2.bind(var3)(var1);
        var3 = var5.add;
        var2 = arg2;
        var1 = 'months';
        var3 = var3.bind(var5)(var2, var1);
        var2 = var3.add;
        var1 = 'day';
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.useMemo;
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/tiered_tenure_badging/hooks/useTimeUntilNextBadge.tsx';
    var5 = var6.bind(var7)(var5);
    var3['computeDaysUntilNextBadgeDate'] = var4;
    var2 = function useTimeUntilNextBadge() {
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 2;
        var3 = var7[var3];
        var4 = undefined;
        var6 = var5.bind(var4)(var3);
        var3 = var6.useNextTenureBadge;
        var6 = var3.bind(var6)();
        var _closure2_slot0 = var6;
        var3 = 3;
        var3 = var7[var3];
        var5 = var5.bind(var4)(var3);
        var3 = var5.usePremiumSince;
        var5 = var3.bind(var5)();
        var _closure2_slot1 = var5;
        var3 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot1;
                if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var2 = _closure2_slot0;
                var6 = var2.tenureReqNumMonths;
                var2 = _closure1_slot5;
                var5 = _closure2_slot1;
                var8 = undefined;
                var11 = var2.bind(var8)(var5, var6);
                var2 = {};
                var4 = _closure1_slot4;
                var4 = var4.bind(var8)(var5, var6);
                var2['days'] = var4;
                var4 = global;
                var6 = var4.Math;
                var5 = var6.max;
                var7 = var4.Math;
                var4 = var7.round;
                var10 = var11.diff;
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var3 = 1;
                var3 = var12[var3];
                var3 = var9.bind(var8)(var3);
                var9 = var3.bind(var8)();
                var8 = 'months';
                var3 = true;
                var3 = var10.bind(var11)(var9, var8, var3);
                var4 = var4.bind(var7)(var3);
                var3 = 0;
                var3 = var5.bind(var6)(var3, var4);
                var2['months'] = var3;
                return var2;
case 2:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useTimeUntilNextBadge'] = var2;
    return var1;
})();