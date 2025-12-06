// app/modules/premium/powerups/utils/useCalculatePowerupCardStatus.tsx
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
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PowerupActiveStatusType;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/utils/useCalculatePowerupCardStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCalculatePowerupCardStatus(arg1, arg2, arg3) {
        var5 = arg1;
        var7 = arg2;
        var6 = arg3;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var6;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot1;
                var2 = var1.sourceEntitlement;
                var10 = null;
                var4 = var10 == var2;
                var13 = undefined;
                var1 = undefined;
                if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = var2.ends_at;
case 2:
                if(!(var10 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = _closure2_slot2;
                if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var1 = _closure2_slot0;
                var1 = var1.storeRemovalDate;
                if(!(var10 == var1)) { _fun0001_ip = 8; continue _fun0001 }
case 6:
                var1 = _closure2_slot1;
                var2 = var1.type;
                var1 = _closure1_slot4;
                var1 = var1.LEVEL_ACTIVATED;
                if(!(var2 !== var1)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var1 = _closure2_slot1;
                var4 = var1.type;
                var1 = _closure1_slot4;
                var2 = var1.POWERUP_ACTIVATED;
                var1 = undefined;
                if(!(var4 === var2)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                var2 = {};
                var4 = 'active';
                var2['type'] = var4;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 2;
                var4 = var8[var4];
                var4 = var5.bind(var13)(var4);
                var6 = var4.intl;
                var5 = var6.string;
                var7 = _closure1_slot1;
                var4 = 3;
                var4 = var8[var4];
                var4 = var7.bind(var13)(var4);
                var4 = var4.FFLkmx;
                var4 = var5.bind(var6)(var4);
                var2['statusText'] = var4;
                var1 = var2;
case 11:
                _fun0001_ip = 13; continue _fun0001;
case 9:
                var2 = {};
                var4 = 'active';
                var2['type'] = var4;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var14 = 2;
                var4 = var8[var14];
                var4 = var5.bind(var13)(var4);
                var7 = var4.intl;
                var6 = var7.formatToPlainString;
                var5 = _closure1_slot1;
                var4 = 3;
                var4 = var8[var4];
                var4 = var5.bind(var13)(var4);
                var5 = var4.WRRYUT;
                var4 = {};
                var8 = _closure2_slot1;
                var11 = var8.sourcePowerup;
                var12 = var10 == var11;
                var8 = undefined;
                if(var12) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                var8 = var11.title;
case 14:
                if(!(var10 == var8)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var10 = var9[var14];
                var10 = var12.bind(var13)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var9[var14];
                var9 = var12.bind(var13)(var9);
                var9 = var9.t;
                var9 = var9.BfF6ED;
                var8 = var10.bind(var11)(var9);
case 16:
                var4['perkName'] = var8;
                var4 = var6.bind(var7)(var5, var4);
                var2['statusText'] = var4;
                var1 = var2;
case 13:
                _fun0001_ip = 18; continue _fun0001;
case 8:
                var2 = {};
                var4 = 'removing';
                var2['type'] = var4;
                var4 = _closure2_slot0;
                var4 = var4.storeRemovalDate;
                var2['removingAt'] = var4;
                var1 = var2;
case 18:
                _fun0001_ip = 19; continue _fun0001;
case 4:
                var2 = {};
                var4 = 'expiring';
                var2['type'] = var4;
                var3 = _closure2_slot1;
                var3 = var3.sourceEntitlement;
                var3 = var3.ends_at;
                var2['expiringAt'] = var3;
                var1 = var2;
case 19:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useCalculatePowerupCardStatus'] = var2;
    return var1;
})();