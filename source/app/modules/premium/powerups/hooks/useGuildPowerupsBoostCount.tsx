// app/modules/premium/powerups/hooks/useGuildPowerupsBoostCount.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useGuildPowerupsBoostCount.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useGuildAppliedBoostCount(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var11 = arg1;
            var _closure2_slot0 = var11;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var9 = 5;
            var3 = var3[var9];
            var6 = undefined;
            var7 = var4.bind(var6)(var3);
            var5 = var7.useStateFromStores;
            var3 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot3;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var2.premiumSubscriberCount;
case 2:
                    return var1;
                }
            };
            var3 = var5.bind(var7)(var4, var3);
            var4 = null;
            var4 = var4 != var3;
            var8 = 0;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var3;
case 4:
            var _closure2_slot1 = var8;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var5 = 4;
            var5 = var3[var5];
            var10 = var4.bind(var6)(var5);
            var7 = var10.usePortkeyEnabled;
            var5 = 'GuildPowerupsBoostCount';
            var5 = var7.bind(var10)(var11, var5);
            var _closure2_slot2 = var5;
            var7 = var3[var9];
            var12 = var4.bind(var6)(var7);
            var11 = var12.useStateFromStores;
            var7 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getStateForGuild;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var1 = var2.appliedBoosts;
case 6:
                    return var1;
                }
            };
            var7 = var11.bind(var12)(var10, var7);
            var _closure2_slot3 = var7;
            var3 = var3[var9];
            var9 = var4.bind(var6)(var3);
            var6 = var9.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot4;
                    var2 = var3.getStateForGuild;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                    var1 = var2.appliedBoosts;
case 6:
                    return var1;
                }
            };
            var6 = var6.bind(var9)(var4, var3);
            var _closure2_slot4 = var6;
            var4 = _closure1_slot2;
            var3 = var4.useMemo;
            var2 = new Array(4);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var2[3] = var5;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0005_ip = 8; continue _fun0005 }
case 9:
                    var1 = _closure2_slot2;
                    if(!var1) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                    var1 = _closure2_slot4;
                    if(!(var4 != var1)) { _fun0005_ip = 8; continue _fun0005 }
case 10:
                    var3 = _closure2_slot3;
                    var1 = _closure2_slot4;
                    var4 = var4 != var1;
                    var7 = 0;
                    var1 = 0;
                    if(!var4) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                    var1 = _closure2_slot4;
case 12:
                    var3 = var3 + var1;
                    var1 = {};
                    var4 = global;
                    var6 = var4.Math;
                    var5 = var6.max;
                    var4 = _closure2_slot1;
                    var4 = var4 - var3;
                    var4 = var5.bind(var6)(var7, var4);
                    var1['available'] = var4;
                    var1['spent'] = var3;
                    var3 = _closure2_slot1;
                    var1['total'] = var3;
                    return var1;
case 8:
                    var1 = {'available': 0, 'spent': 0};
                    var2 = _closure2_slot1;
                    var1['total'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function getGuildPowerupsBoostCount(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var9 = arg1;
            var2 = _closure1_slot3;
            var1 = var2.getGuild;
            var2 = var1.bind(var2)(var9);
            var1 = null;
            var5 = var1 == var2;
            var4 = undefined;
            var3 = undefined;
            if(var5) { _fun0006_ip = 14; continue _fun0006 }
case 15:
            var3 = var2.premiumSubscriberCount;
case 14:
            var5 = var1 != var3;
            var7 = 0;
            var2 = 0;
            if(!var5) { _fun0006_ip = 16; continue _fun0006 }
case 17:
            var2 = var3;
case 16:
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 4;
            var3 = var8[var3];
            var8 = var5.bind(var4)(var3);
            var5 = var8.getPortkeyEnabled;
            var3 = 'GuildPowerupsBoostCount';
            var5 = var5.bind(var8)(var9, var3);
            var8 = _closure1_slot5;
            var3 = var8.getStateForGuild;
            var8 = var3.bind(var8)(var9);
            var10 = var1 == var8;
            var3 = undefined;
            if(var10) { _fun0006_ip = 18; continue _fun0006 }
case 19:
            var3 = var8.appliedBoosts;
case 18:
            var8 = _closure1_slot4;
            var6 = var8.getStateForGuild;
            var6 = var6.bind(var8)(var9);
            var8 = var1 == var6;
            var4 = undefined;
            if(var8) { _fun0006_ip = 20; continue _fun0006 }
case 21:
            var4 = var6.appliedBoosts;
case 20:
            if(!(var1 != var3)) { _fun0006_ip = 22; continue _fun0006 }
case 23:
            if(!var5) { _fun0006_ip = 24; continue _fun0006 }
case 25:
            if(!(var1 != var4)) { _fun0006_ip = 22; continue _fun0006 }
case 24:
            var5 = var1 != var4;
            var1 = 0;
            if(!var5) { _fun0006_ip = 26; continue _fun0006 }
case 27:
            var1 = var4;
case 26:
            var3 = var3 + var1;
            var1 = {};
            var4 = global;
            var6 = var4.Math;
            var5 = var6.max;
            var4 = var2 - var3;
            var4 = var5.bind(var6)(var7, var4);
            var1['available'] = var4;
            var1['spent'] = var3;
            var1['total'] = var2;
            return var1;
case 22:
            var1 = {'available': 0, 'spent': 0};
            var1['total'] = var2;
            return var1;
        }
    };
    var3['getGuildPowerupsBoostCount'] = var2;
    return var1;
})();