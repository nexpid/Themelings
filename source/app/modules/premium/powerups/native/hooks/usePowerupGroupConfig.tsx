// app/modules/premium/powerups/native/hooks/usePowerupGroupConfig.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET;
    var _closure1_slot5 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/hooks/usePowerupGroupConfig.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePowerupGroupConfig(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg2;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var6;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 3;
            var3 = var5[var3];
            var9 = undefined;
            var7 = var4.bind(var9)(var3);
            var5 = var7.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getStateForGuild;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var2.unlockedPowerups;
case 2:
                    return var1;
                }
            };
            var7 = var5.bind(var7)(var4, var3);
            var4 = null;
            var5 = var4 == var7;
            var3 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 4;
            var5 = var10[var5];
            var5 = var8.bind(var9)(var5);
            var5 = var5.GUILD_POWERUP_TAG_SKU_ID;
            var3 = var7[var5];
case 4:
            var5 = var4 != var3;
            var _closure2_slot2 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var2 = var1.group;
                    var1 = 'guildTagsBadgePacks';
                    if(!(var1 !== var2)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.assertNever;
                    var2 = _closure2_slot1;
                    var2 = var2.group;
                    var2 = var4.bind(var5)(var2);
                    return var1;
case 6:
                    var1 = {};
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 5;
                    var4 = var10[var5];
                    var8 = undefined;
                    var4 = var6.bind(var8)(var4);
                    var12 = var4.intl;
                    var11 = var12.string;
                    var7 = _closure1_slot1;
                    var9 = 6;
                    var4 = var10[var9];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.KC9HRW;
                    var4 = var11.bind(var12)(var4);
                    var1['title'] = var4;
                    var4 = var10[var5];
                    var4 = var6.bind(var8)(var4);
                    var11 = var4.intl;
                    var6 = var11.string;
                    var4 = var10[var9];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.GJiSmP;
                    var4 = var6.bind(var11)(var4);
                    var1['description'] = var4;
                    var4 = {};
                    var6 = 7;
                    var6 = var10[var6];
                    var6 = var7.bind(var8)(var6);
                    var4['staticUrl'] = var6;
                    var6 = 8;
                    var6 = var10[var6];
                    var6 = var7.bind(var8)(var6);
                    var4['animatedUrl'] = var6;
                    var1['image'] = var4;
                    var4 = _closure2_slot2;
                    var3 = undefined;
                    if(var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var5 = var4[var5];
                    var5 = var6.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var7 = _closure1_slot1;
                    var4 = var4[var9];
                    var4 = var7.bind(var8)(var4);
                    var4 = var4.lvk1Gc;
                    var3 = var5.bind(var6)(var4);
case 8:
                    var1['disabledReason'] = var3;
                    var3 = 'new';
                    var1['badge'] = var3;
                    var2 = _closure1_slot5;
                    var1['newPowerupSkuIdSet'] = var2;
                    var2 = true;
                    var1['forceStaticImages'] = var2;
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