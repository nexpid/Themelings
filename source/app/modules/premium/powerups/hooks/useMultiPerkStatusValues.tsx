// app/modules/premium/powerups/hooks/useMultiPerkStatusValues.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.PowerupActiveStatusType;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useMultiPerkStatusValues.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMultiPerkStatusValues(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = var2.guildId;
            var2 = var2.powerups;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 1;
            var3 = var7[var3];
            var8 = undefined;
            var5 = var5.bind(var8)(var3);
            var3 = var5.usePowerupsActiveStatuses;
            var10 = var3.bind(var5)(var6, var2);
            var5 = var10.some;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot3;
                var1 = var1.INACTIVE;
                var1 = var2 !== var1;
                return var1;
            };
            var9 = var5.bind(var10)(var3);
            var2 = var2.length;
            var7 = 0;
            if(!(!(var2 <= var7))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var10.reduce;
            var2 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var1 = arg2;
                    var1 = var1.sourceEntitlement;
                    var2 = null;
                    var5 = var2 == var1;
                    var3 = undefined;
                    if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = var1.ends_at;
case 4:
                    var1 = var4;
                    if(!(var2 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    if(!(var2 != var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = var4;
                    if(!(var3 < var4)) { _fun0002_ip = 10; continue _fun0002 }
case 8:
                    var2 = var3;
case 10:
                    var1 = var2;
case 6:
                    return var1;
                }
            };
            var5 = var3.bind(var10)(var2, var8);
            var3 = null;
            if(!(var3 == var5)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var6 = undefined;
            if(!var9) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var2 = {};
            var11 = 'active';
            var2['type'] = var11;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 2;
            var11 = var14[var11];
            var11 = var12.bind(var8)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var13 = _closure1_slot1;
            var4 = 3;
            var4 = var14[var4];
            var4 = var13.bind(var8)(var4);
            var4 = var4.FFLkmx;
            var4 = var11.bind(var12)(var4);
            var2['statusText'] = var4;
            var6 = var2;
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var2 = {};
            var4 = 'expiring';
            var2['type'] = var4;
            var2['expiringAt'] = var5;
            var6 = var2;
case 13:
            var4 = var10.reduce;
            var2 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    var5 = var1.type;
                    var2 = var1.powerup;
                    var1 = _closure1_slot3;
                    var4 = var1.POWERUP_ACTIVATED;
                    var1 = var3;
                    if(!(var5 === var4)) { _fun0003_ip = 8; continue _fun0003 }
case 15:
                    var2 = var2.cost;
                    var1 = var3 + var2;
case 8:
                    return var1;
                }
            };
            var4 = var4.bind(var10)(var2, var7);
            var11 = var10.reduce;
            var12 = var10[var7];
            var13 = var3 == var12;
            var2 = undefined;
            if(var13) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var12 = var12.powerup;
            var13 = var3 == var12;
            var2 = undefined;
            if(var13) { _fun0001_ip = 16; continue _fun0001 }
case 18:
            var2 = var12.cost;
case 16:
            var12 = var3 != var2;
            var3 = 0;
            if(!var12) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var3 = var2;
case 19:
            var2 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var2 = arg2;
                    var5 = var2.powerup;
                    var4 = null;
                    var2 = var4 == var5;
                    var7 = undefined;
                    if(var2) { _fun0004_ip = 4; continue _fun0004 }
case 5:
                    var7 = var5.cost;
case 4:
                    var8 = var4 != var7;
                    var6 = 0;
                    if(!var8) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var6 = var7;
case 21:
                    if(!(!(var1 < var6))) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var6 = var4 == var5;
                    var3 = undefined;
                    if(var6) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var3 = var5.cost;
case 25:
                    var4 = var4 != var3;
                    var2 = 0;
                    if(!var4) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var2 = var3;
case 27:
                    var1 = var2;
case 23:
                    return var1;
                }
            };
            var3 = var11.bind(var10)(var2, var3);
            var2 = var10.reduce;
            var1 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg2;
                    var3 = var1.powerup;
                    var2 = null;
                    var4 = var2 == var3;
                    var1 = undefined;
                    if(var4) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                    var1 = var3.cost;
case 29:
                    var3 = var2 != var1;
                    var2 = 0;
                    if(!var3) { _fun0005_ip = 22; continue _fun0005 }
case 31:
                    var2 = var1;
case 22:
                    var1 = arg1;
                    var1 = var1 + var2;
                    return var1;
                }
            };
            var2 = var2.bind(var10)(var1, var7);
            var7 = var3;
            if(!var9) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var7 = var4;
case 32:
            var1 = {};
            var1['isActive'] = var9;
            var1['status'] = var6;
            var1['cost'] = var7;
            var6 = undefined;
            if(var9) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var7 = var2 > var7;
            var6 = undefined;
            if(!var7) { _fun0001_ip = 34; continue _fun0001 }
case 36:
            var6 = '+';
case 34:
            var1['costDecorator'] = var6;
            var1['expiringAt'] = var5;
            var1['activeCost'] = var4;
            var1['minCost'] = var3;
            var1['totalCost'] = var2;
            return var1;
case 2:
            var1 = null;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();