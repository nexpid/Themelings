// app/modules/premium/powerups/hooks/useAvailableBoostCountForPowerup.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildPowerupType;
    var _closure1_slot6 = var7;
    var7 = var4.POWERUPS_INCLUDED_IN_LEVEL;
    var _closure1_slot7 = var7;
    var4 = var4.LEVEL_SKU_ID_TO_BOOSTING_TIER;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useAvailableBoostCountForPowerup.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAvailableBoostCountForPowerup(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var9 = arg2;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var9;
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 4;
            var2 = var10[var1];
            var8 = undefined;
            var12 = var5.bind(var8)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var11.bind(var12)(var7, var2);
            var1 = var10[var1];
            var11 = var5.bind(var8)(var1);
            var7 = var11.useStateFromStores;
            var1 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getStateForGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var7.bind(var11)(var5, var1);
            var _closure2_slot2 = var1;
            var7 = _closure1_slot1;
            var5 = 5;
            var5 = var10[var5];
            var5 = var7.bind(var8)(var5);
            var5 = var5.bind(var8)(var6);
            var7 = var5.spent;
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var4 = new Array(2);
            var4[0] = var9;
            var4[1] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = _closure2_slot1;
                    var6 = var1.type;
                    var5 = _closure1_slot6;
                    var5 = var5.LEVEL;
                    if(!(var6 === var5)) { _fun0002_ip = 2; continue _fun0002 }
case 4:
                    var5 = _closure2_slot2;
                    if(!(var4 != var5)) { _fun0002_ip = 2; continue _fun0002 }
case 5:
                    var5 = _closure1_slot8;
                    var3 = _closure2_slot1;
                    var3 = var3.skuId;
                    var3 = var5[var3];
                    var _closure3_slot0 = var3;
                    if(!(var4 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = global;
                    var5 = var3.Object;
                    var4 = var5.entries;
                    var3 = _closure1_slot7;
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.filter;
                    var3 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var5 = arg1;
                            var1 = var5[Symbol.iterator];
                            var5 = var1().next;
                            var2 = var5().value;
                            var3 = var1;
                            var7 = undefined;
                            var4 = var3 === var7;
                            var3 = undefined;
                            if(var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                            var3 = var2;
case 8:
                            var2 = undefined;
                            if(var4) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                            var6 = var5().value;
                            var5 = var1;
                            var5 = var5 === var7;
                            var2 = undefined;
                            var4 = var5;
                            if(var5) { _fun0003_ip = 10; continue _fun0003 }
case 12:
                            var2 = var6;
                            var4 = var5;
case 10:
                            if(var4) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                            var1.return();
case 13:
                            var1 = _closure3_slot0;
                            var1 = var2 === var1;
                            if(!var1) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                            var2 = _closure2_slot2;
                            var2 = var2.unlockedPowerups;
                            var3 = var2[var3];
                            var2 = null;
                            var1 = var2 != var3;
case 15:
                            return var1;
                        }
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.map;
                    var2 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var2 = arg1;
                            var1 = var2[Symbol.iterator];
                            var2 = var1().next;
                            var4 = var2().value;
                            var3 = var1;
                            var2 = undefined;
                            var3 = var3 === var2;
                            if(var3) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                            var2 = var4;
case 17:
                            if(var3) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                            var1.return();
case 19:
                            var1 = _closure2_slot2;
                            var1 = var1.allPowerups;
                            var1 = var1[var2];
                            return var1;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 6;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.isNotNullish;
                    var1 = var2.bind(var3)(var1);
                    _fun0002_ip = 21; continue _fun0002;
case 6:
                    var1 = new Array(0);
case 21:
                    return var1;
case 2:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var9 = var5.bind(var6)(var1, var4);
            var1 = null;
            var4 = var1 == var9;
            var6 = undefined;
            if(var4) { _fun0001_ip = 22; continue _fun0001 }
case 2:
            var5 = var9.reduce;
            var4 = function(arg1, arg2) {
                var1 = arg2;
                var2 = var1.cost;
                var1 = arg1;
                var1 = var1 + var2;
                return var1;
            };
            var3 = 0;
            var6 = var5.bind(var9)(var4, var3);
case 22:
            var3 = global;
            var4 = var3.Math;
            var3 = var4.max;
            var5 = var1 == var2;
            var8 = undefined;
            if(var5) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var8 = var2.premiumSubscriberCount;
case 23:
            var9 = var1 != var8;
            var2 = 0;
            var5 = 0;
            if(!var9) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var5 = var8;
case 25:
            var5 = var5 - var7;
            var7 = var1 != var6;
            var1 = 0;
            if(!var7) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var1 = var6;
case 27:
            var1 = var5 + var1;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();