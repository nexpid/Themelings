// app/modules/guild_tag/useGuildTagBadgeCollection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.useMemo;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.BADGE_PACKS;
    var _closure1_slot5 = var7;
    var7 = var4.BADGES;
    var _closure1_slot6 = var7;
    var4 = var4.BADGE_PACK_TO_SKU_ID;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_tag/useGuildTagBadgeCollection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildTagBadgeCollection() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var5 = 4;
            var2 = var7[var5];
            var4 = undefined;
            var10 = var6.bind(var4)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot3;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getGuild;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var9.bind(var10)(var8, var2);
            var _closure2_slot0 = var2;
            var5 = var7[var5];
            var8 = var6.bind(var4)(var5);
            var7 = var8.useStateFromStores;
            var5 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot4;
                    var4 = var5.getStateForGuild;
                    var1 = _closure2_slot0;
                    var3 = null;
                    var7 = var3 == var1;
                    var2 = undefined;
                    if(var7) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var6 = _closure2_slot0;
                    var2 = var6.id;
case 2:
                    var2 = var4.bind(var5)(var2);
                    var3 = var3 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = var2.allPowerups;
case 4:
                    return var1;
                }
            };
            var5 = var7.bind(var8)(var6, var5);
            var _closure2_slot1 = var5;
            var3 = _closure1_slot2;
            var6 = null;
            var7 = var6 == var2;
            var6 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var2.features;
case 6:
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = _closure1_slot6;
                    var3 = var5.map;
                    var2 = function(arg1) {
                        var1 = {};
                        var2 = arg1;
                        var1['kind'] = var2;
                        return var1;
                    };
                    var3 = var3.bind(var5)(var2);
                    var _closure3_slot0 = var3;
                    var2 = new Array(0);
                    var _closure3_slot1 = var2;
                    var5 = _closure2_slot0;
                    var6 = null;
                    var8 = var6 == var5;
                    var5 = undefined;
                    if(var8) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var7 = _closure2_slot0;
                    var5 = var7.features;
case 8:
                    if(!(var6 != var5)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var5 = global;
                    var6 = var5.Object;
                    var5 = var6.keys;
                    var4 = _closure1_slot5;
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.forEach;
                    var1 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var4 = arg1;
                            var2 = _closure1_slot5;
                            var6 = var2[var4];
                            var1 = _closure1_slot7;
                            var9 = var1[var4];
                            var1 = _closure2_slot1;
                            var5 = null;
                            var8 = var5 == var1;
                            var1 = undefined;
                            var7 = undefined;
                            if(var8) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                            var8 = _closure2_slot1;
                            var7 = var8[var9];
case 12:
                            var8 = var5 == var7;
                            var5 = undefined;
                            if(var8) { _fun0004_ip = 8; continue _fun0004 }
case 14:
                            var5 = var7.title;
case 8:
                            var _closure4_slot0 = var5;
                            var5 = var6.map;
                            var3 = function(arg1) {
                                var1 = {};
                                var2 = arg1;
                                var1['kind'] = var2;
                                var2 = _closure4_slot0;
                                var1['packName'] = var2;
                                return var1;
                            };
                            var6 = var5.bind(var6)(var3);
                            var2 = _closure2_slot0;
                            var3 = var2.features;
                            var2 = var3.has;
                            var3 = var2.bind(var3)(var4);
                            if(var3) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                            var5 = _closure3_slot1;
                            var4 = var5.push;
                            var3 = new Array(0);
                            var10 = 0;
                            var12 = var3;
                            var11 = var6;
                            var7 = arraySpread(var12, var11, var10);
                            var12 = var4;
                            var11 = var3;
                            var10 = var5;
                            var3 = apply(var12, var11, var10);
                            _fun0004_ip = 17; continue _fun0004;
case 15:
                            var4 = _closure3_slot0;
                            var3 = var4.push;
                            var2 = new Array(0);
                            var10 = 0;
                            var12 = var2;
                            var11 = var6;
                            var5 = arraySpread(var12, var11, var10);
                            var12 = var3;
                            var11 = var2;
                            var10 = var4;
                            var2 = apply(var12, var11, var10);
case 17:
                            return var1;
                        }
                    };
                    var1 = var4.bind(var5)(var1);
case 10:
                    var1 = {};
                    var1['unlockedBadges'] = var3;
                    var1['lockedBadges'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();