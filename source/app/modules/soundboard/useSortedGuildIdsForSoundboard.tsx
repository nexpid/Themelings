// app/modules/soundboard/useSortedGuildIdsForSoundboard.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/soundboard/useSortedGuildIdsForSoundboard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSortedGuildIdsForSoundboard(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var8 = arg2;
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var8;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var10 = 6;
            var3 = var3[var10];
            var5 = undefined;
            var9 = var6.bind(var5)(var3);
            var7 = var9.useStateFromStores;
            var3 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var7.bind(var9)(var6, var3);
            var _closure2_slot2 = var9;
            var3 = null;
            var6 = var3 == var4;
            var7 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var4.guild_id;
case 2:
            if(!(var3 == var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot7;
case 4:
            var _closure2_slot3 = var7;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = var3[var10];
            var13 = var4.bind(var5)(var6);
            var12 = var13.useStateFromStores;
            var6 = _closure1_slot5;
            var11 = new Array(1);
            var11[0] = var6;
            var6 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getFlattenedGuildIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var12.bind(var13)(var11, var6);
            var _closure2_slot4 = var6;
            var3 = var3[var10];
            var10 = var4.bind(var5)(var3);
            var5 = var10.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    var1 = var4 == var1;
                    if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure2_slot0;
                    var3 = var3.guild_id;
                    var1 = var4 == var3;
case 6:
                    if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var5 = _closure1_slot4;
                    var4 = var5.can;
                    var3 = _closure1_slot8;
                    var3 = var3.USE_EXTERNAL_SOUNDS;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
case 8:
                    return var1;
                }
            };
            var5 = var5.bind(var10)(var4, var3);
            var _closure2_slot5 = var5;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(5);
            var2[0] = var9;
            var2[1] = var8;
            var2[2] = var7;
            var2[3] = var6;
            var2[4] = var5;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.canUseSoundboardEverywhere;
                    var1 = _closure2_slot2;
                    var1 = var3.bind(var4)(var1);
                    if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0003_ip = 12; continue _fun0003 }
case 10:
                    var1 = _closure2_slot5;
                    if(var1) { _fun0003_ip = 13; continue _fun0003 }
case 12:
                    var3 = _closure2_slot3;
                    var1 = new Array(1);
                    var1[0] = var3;
                    return var1;
case 13:
                    var3 = _closure2_slot3;
                    var1 = '';
                    var3 = var1 !== var3;
                    var6 = _closure2_slot4;
                    if(var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var1 = var6;
                    _fun0003_ip = 16; continue _fun0003;
case 14:
                    var5 = var6.filter;
                    var4 = function(arg1) {
                        var2 = _closure2_slot3;
                        var1 = arg1;
                        var1 = var1 !== var2;
                        return var1;
                    };
                    var1 = var5.bind(var6)(var4);
case 16:
                    if(!var3) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var3 = var1.unshift;
                    var2 = _closure2_slot3;
                    var2 = var3.bind(var1)(var2);
case 17:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useSortedGuildIdsForSoundboard'] = var2;
    return var1;
})();