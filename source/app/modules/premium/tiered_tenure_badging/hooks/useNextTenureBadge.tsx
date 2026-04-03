// app/modules/premium/tiered_tenure_badging/hooks/useNextTenureBadge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.TIERED_TENURE_BADGE_ORDER;
    var _closure1_slot2 = var7;
    var4 = var4.TENURE_BADGES;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/tiered_tenure_badging/hooks/useNextTenureBadge.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useNextTenureBadge() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var3 = 1;
            var1 = var1[var3];
            var8 = undefined;
            var2 = var2.bind(var8)(var1);
            var1 = var2.useTieredTenureBadgeData;
            var2 = var1.bind(var2)();
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var2.status;
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var3];
            var5 = var7.bind(var8)(var5);
            var5 = var5.TieredTenureBadgeStatus;
            var5 = var5.UPCOMING;
            if(!(var6 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot2;
            var7 = var5.indexOf;
            var6 = var2.id;
            var7 = var7.bind(var5)(var6);
            var3 = var7 + var3;
            var5 = var5[var3];
            var6 = var1 == var5;
            var3 = null;
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = -1;
            var3 = null;
            if(!(var6 !== var7)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var4 = _closure1_slot3;
            var3 = var4[var5];
case 6:
            return var3;
case 4:
            return var2;
case 2:
            return var1;
        }
    };
    var3['useNextTenureBadge'] = var2;
    return var1;
})();