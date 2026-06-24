// app/modules/premium/tiered_tenure_badging/hooks/useTenureBadgeRequirementString.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var2 = function getTenureBadgeRequirementString(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = arg2;
            var2 = _closure1_slot2;
            var2 = var2.PREMIUM_TENURE_1_MONTH;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot2;
            var2 = var2.PREMIUM_TENURE_3_MONTH;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = _closure1_slot2;
            var2 = var2.PREMIUM_TENURE_6_MONTH;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var2 = _closure1_slot2;
            var2 = var2.PREMIUM_TENURE_12_MONTH;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = _closure1_slot2;
            var2 = var2.PREMIUM_TENURE_24_MONTH;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var2 = _closure1_slot2;
            var2 = var2.PREMIUM_TENURE_36_MONTH;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 9:
            var2 = _closure1_slot2;
            var2 = var2.PREMIUM_TENURE_60_MONTH;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 10:
            var2 = _closure1_slot2;
            var2 = var2.PREMIUM_TENURE_72_MONTH;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 11:
            var2 = null;
            return var2;
case 6:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 3;
            var4 = var8[var2];
            var3 = undefined;
            var4 = var7.bind(var3)(var4);
            var6 = var4.intl;
            var4 = var6.formatToPlainString;
            var2 = var8[var2];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.qOdyDe;
            var2 = {};
            var7 = 12;
            var7 = var5 / var7;
            var2['years'] = var7;
            var2 = var4.bind(var6)(var3, var2);
            return var2;
case 2:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 3;
            var3 = var7[var1];
            var2 = undefined;
            var3 = var6.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var7[var1];
            var1 = var6.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.erUSmA;
            var1 = {};
            var1['months'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot3 = var2;
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
    var5 = var5.TieredTenureBadge;
    var _closure1_slot2 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/tiered_tenure_badging/hooks/useTenureBadgeRequirementString.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useTenureBadgeRequirementString() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 1;
            var1 = var4[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.useTieredTenureBadge;
            var6 = var1.bind(var2)();
            var1 = null;
            if(!(var1 != var6)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 2;
            var2 = var7[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.getTieredTenureBadgeData;
            var2 = var2.bind(var4)(var6);
            var4 = _closure1_slot3;
            var3 = var2.id;
            var2 = var2.tenureReqNumMonths;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 12:
            return var1;
        }
    };
    var3['useTenureBadgeRequirementString'] = var4;
    var3['getTenureBadgeRequirementString'] = var2;
    return var1;
})();