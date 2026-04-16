// app/modules/guild_mod_dash_member_safety/PrunePreviewStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var5 = function getPrunePreviewKey(arg1, arg2, arg3) {
        var2 = new Array(0);
        var10 = arg3;
        var9 = 0;
        var11 = var2;
        var1 = arraySpread(var11, var10, var9);
        var1 = var2.sort;
        var3 = var1.bind(var2)();
        var2 = var3.join;
        var1 = ',';
        var7 = var2.bind(var3)(var1);
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var12 = '';
        var11 = arg1;
        var2 = ':';
        var9 = arg2;
        var10 = var2;
        var8 = var2;
        var1 = var12[var5](var11, var10, var9, var8, var7, var6);
        return var1;
    };
    var _closure1_slot3 = var5;
    var1 = function isEntryValid(arg1) {
        var1 = global;
        var2 = var1.Date;
        var1 = var2.now;
        var2 = var1.bind(var2)();
        var1 = arg1;
        var1 = var1.cachedAt;
        var2 = var2 - var1;
        var1 = _closure1_slot1;
        var1 = var2 < var1;
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var9[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var6 = 3600000;
    var _closure1_slot1 = var6;
    var4 = 1;
    var4 = var9[var4];
    var10 = var8.bind(var1)(var4);
    var7 = var10.create;
    var4 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = {};
        var3 = {};
        var1['entries'] = var3;
        var3 = function setPreview(arg1, arg2, arg3, arg4, arg5) {
            var1 = arg4;
            var _closure3_slot0 = var1;
            var1 = arg5;
            var _closure3_slot1 = var1;
            var6 = _closure1_slot3;
            var1 = undefined;
            var5 = arg1;
            var4 = arg2;
            var3 = arg3;
            var3 = var6.bind(var1)(var5, var4, var3);
            var _closure3_slot2 = var3;
            var3 = _closure2_slot0;
            var2 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var5 = {};
                    var1 = arg1;
                    var15 = var1.entries;
                    var16 = var5;
                    var1 = copyDataProperties(var16, var15);
                    var2 = {};
                    var4 = global;
                    var3 = var4.Date;
                    var1 = var3.now;
                    var11 = var1.bind(var3)();
                    var3 = var4.Object;
                    var1 = var3.entries;
                    var10 = var1.bind(var3)(var5);
                    var1 = var10.length;
                    var9 = 0;
                    var1 = var9 < var1;
                    var7 = undefined;
                    var6 = 2;
                    var5 = 1;
                    var3 = 0;
                    if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var12 = var10[var3];
                    var1 = _closure1_slot0;
                    var1 = var1.bind(var7)(var12, var6);
                    var12 = var1[var9];
                    var1 = var1[var5];
                    var13 = var1.cachedAt;
                    var14 = var11 - var13;
                    var13 = _closure1_slot1;
                    if(!(var14 < var13)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var2[var12] = var1;
case 4:
                    var3 = var3 + 1;
                    var1 = var10.length;
                    if(var3 < var1) { _fun0001_ip = 3; continue _fun0001 }
case 2:
                    var1 = _closure3_slot2;
                    var6 = var2[var1];
                    var1 = null;
                    var1 = var1 == var6;
                    if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var7 = var6.count;
                    var3 = _closure3_slot0;
                    var3 = var7 <= var3;
                    if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var6 = var6.isFinished;
                    var3 = !var6;
case 8:
                    var1 = var3;
case 6:
                    if(!var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var3 = _closure3_slot2;
                    var1 = {};
                    var6 = _closure3_slot0;
                    var1['count'] = var6;
                    var5 = _closure3_slot1;
                    var1['isFinished'] = var5;
                    var5 = var4.Date;
                    var4 = var5.now;
                    var4 = var4.bind(var5)();
                    var1['cachedAt'] = var4;
                    var2[var3] = var1;
case 10:
                    var1 = {};
                    var1['entries'] = var2;
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['setPreview'] = var3;
        var2 = function clear() {
            var3 = _closure2_slot0;
            var2 = {};
            var1 = {};
            var2['entries'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['clear'] = var2;
        return var1;
    };
    var4 = var7.bind(var10)(var4);
    var _closure1_slot2 = var4;
    var7 = 2;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/guild_mod_dash_member_safety/PrunePreviewStore.tsx';
    var7 = var8.bind(var9)(var7);
    var3['CACHE_TTL_MS'] = var6;
    var3['getPrunePreviewKey'] = var5;
    var3['usePrunePreviewStore'] = var4;
    var4 = function setPrunePreview(arg1, arg2, arg3, arg4, arg5) {
        var2 = _closure1_slot2;
        var1 = var2.getState;
        var7 = var1.bind(var2)();
        var6 = var7.setPreview;
        var12 = arg1;
        var11 = arg2;
        var10 = arg3;
        var9 = arg4;
        var8 = arg5;
        var13 = var7;
        var1 = var13[var6](var12, var11, var10, var9, var8, var7);
        var1 = undefined;
        return var1;
    };
    var3['setPrunePreview'] = var4;
    var4 = function clearAllPrunePreviews() {
        var2 = _closure1_slot2;
        var1 = var2.getState;
        var2 = var1.bind(var2)();
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var3['clearAllPrunePreviews'] = var4;
    var4 = function usePrunePreview(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = arg3;
            var _closure2_slot2 = var2;
            var2 = _closure1_slot2;
            var3 = undefined;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var6 = _closure1_slot3;
                    var4 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var5 = undefined;
                    var2 = var6.bind(var5)(var4, var2, var1);
                    var1 = arg1;
                    var1 = var1.entries;
                    var2 = var1[var2];
                    var4 = null;
                    var6 = var4 != var2;
                    var1 = null;
                    if(!var6) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var3 = _closure1_slot4;
                    var3 = var3.bind(var5)(var2);
                    var1 = null;
                    if(!var3) { _fun0003_ip = 12; continue _fun0003 }
case 14:
                    var1 = var2;
case 12:
                    return var1;
                }
            };
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var4 = null;
            var6 = var4 == var2;
            var5 = undefined;
            if(var6) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var5 = var2.count;
case 15:
            var1['count'] = var5;
            var4 = var4 == var2;
            var3 = undefined;
            if(var4) { _fun0002_ip = 3; continue _fun0002 }
case 17:
            var3 = var2.isFinished;
case 3:
            var2 = false;
            var2 = var2 === var3;
            var1['isLoading'] = var2;
            return var1;
        }
    };
    var3['usePrunePreview'] = var4;
    var2 = function getPrunePreview(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = _closure1_slot2;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var7 = _closure1_slot3;
            var5 = undefined;
            var6 = arg1;
            var4 = arg2;
            var2 = arg3;
            var2 = var7.bind(var5)(var6, var4, var2);
            var1 = var1.entries;
            var2 = var1[var2];
            var4 = null;
            var6 = var4 != var2;
            var1 = null;
            if(!var6) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var3 = _closure1_slot4;
            var3 = var3.bind(var5)(var2);
            var1 = null;
            if(!var3) { _fun0004_ip = 18; continue _fun0004 }
case 20:
            var1 = var2.count;
case 18:
            return var1;
        }
    };
    var3['getPrunePreview'] = var2;
    return var1;
})();