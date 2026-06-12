// app/modules/forums/ForumTagHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var6 = function useAvailableTags(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            var3 = var3 == var2;
            var5 = undefined;
            var6 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var2.parent_id;
case 2:
            var _closure2_slot0 = var6;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 4;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.useStateFromStoresObject;
            var2 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot3;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var4 = undefined;
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = var2.availableTags;
case 4:
                    if(!(var1 == var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = new Array(0);
case 6:
                    var3 = var4.reduce;
                    var2 = function(arg1, arg2) {
                        var3 = arg2;
                        var1 = {};
                        var4 = arg1;
                        var5 = var1;
                        var2 = copyDataProperties(var5, var4);
                        var2 = var3.id;
                        var1[1] = var3;
                        return var1;
                    };
                    var1 = {};
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var3, var1, var2);
            return var1;
        }
    };
    var _closure1_slot7 = var6;
    var5 = function useAppliedTags(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot7;
        var3 = undefined;
        var6 = var4.bind(var3)(var5);
        var _closure2_slot1 = var6;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure2_slot0;
                var6 = null;
                var1 = var6 == var1;
                var5 = undefined;
                var4 = undefined;
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var1 = _closure2_slot0;
                var7 = var1.appliedTags;
                var1 = var6 == var7;
                var4 = undefined;
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 10:
                var3 = var7.map;
                var1 = function(arg1) {
                    var2 = _closure2_slot1;
                    var1 = arg1;
                    var1 = var2[var1];
                    return var1;
                };
                var7 = var3.bind(var7)(var1);
                var1 = var6 == var7;
                var4 = undefined;
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 11:
                var3 = var7.filter;
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 5;
                var1 = var9[var1];
                var1 = var8.bind(var5)(var1);
                var1 = var1.isNotNullish;
                var4 = var3.bind(var7)(var1);
case 8:
                if(!(var6 == var4)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var4 = _closure1_slot6;
case 12:
                var3 = _closure2_slot0;
                var1 = var4;
                if(!(var6 != var3)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var3 = _closure2_slot0;
                var2 = var3.isModeratorReportChannel;
                var2 = var2.bind(var3)();
                var1 = var4;
                if(!var2) { _fun0003_ip = 14; continue _fun0003 }
case 16:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 6;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.sortedModeratorReportTags;
                var1 = var2.bind(var3)(var4);
case 14:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var5;
    var4 = function useVisibleForumTags(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 4;
            var3 = var5[var3];
            var5 = undefined;
            var8 = var4.bind(var5)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var4 = _closure1_slot4;
                var3 = var4.can;
                var1 = _closure1_slot5;
                var2 = var1.MANAGE_THREADS;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7 = var7.bind(var8)(var4, var3);
            var _closure2_slot1 = var7;
            var4 = _closure1_slot2;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var7;
            var7 = null;
            var7 = var7 == var6;
            if(var7) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var5 = var6.availableTags;
case 17:
            var2[1] = var5;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    var4 = var2 == var3;
                    var3 = undefined;
                    if(var4) { _fun0005_ip = 19; continue _fun0005 }
case 3:
                    var4 = _closure2_slot0;
                    var3 = var4.availableTags;
case 19:
                    if(!(var2 == var3)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var3 = new Array(0);
case 20:
                    var4 = new Array(0);
                    var5 = 0;
                    var7 = var4;
                    var6 = var3;
                    var2 = arraySpread(var7, var6, var5);
                    var2 = _closure2_slot1;
                    var1 = var4;
                    if(var2) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.moderated;
                        var1 = !var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 22:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var11 = var9[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var11);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.Permissions;
    var _closure1_slot5 = var7;
    var7 = new Array(0);
    var _closure1_slot6 = var7;
    var7 = 7;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/forums/ForumTagHooks.tsx';
    var7 = var8.bind(var9)(var7);
    var3['useAvailableTags'] = var6;
    var3['useAppliedTags'] = var5;
    var5 = function useSomeAppliedTags(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arguments[1];
            var6 = undefined;
            if(!(var5 === var6)) { _fun0006_ip = 24; continue _fun0006 }
case 25:
            var5 = 1;
case 24:
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var6;
            var4 = _closure1_slot8;
            var3 = arg1;
            var6 = var4.bind(var6)(var3);
            _closure2_slot1 = var6;
            var4 = _closure1_slot2;
            var3 = var4.useMemo;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var5;
            var1 = function() {
                var3 = _closure2_slot1;
                var1 = var3.slice;
                var6 = _closure2_slot0;
                var5 = 0;
                var3 = var1.bind(var3)(var5, var6);
                var1 = new Array(2);
                var1[0] = var3;
                var3 = global;
                var4 = var3.Math;
                var3 = var4.max;
                var2 = _closure2_slot1;
                var2 = var2.length;
                var2 = var2 - var6;
                var2 = var3.bind(var4)(var5, var2);
                var1[1] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useSomeAppliedTags'] = var5;
    var3['useVisibleForumTags'] = var4;
    var2 = function useVisibleAppliedForumTags(arg1, arg2) {
        var5 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var7;
        var6 = _closure1_slot9;
        var8 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 4;
        var3 = var4[var3];
        var4 = undefined;
        var11 = var8.bind(var4)(var3);
        var10 = var11.useStateFromStores;
        var3 = _closure1_slot3;
        var9 = new Array(1);
        var9[0] = var3;
        var8 = new Array(1);
        var8[0] = var5;
        var3 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var5 = _closure2_slot0;
                var1 = null;
                var5 = var1 == var5;
                var1 = undefined;
                if(var5) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                var4 = _closure2_slot0;
                var1 = var4.parent_id;
case 26:
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var3 = var10.bind(var11)(var9, var3, var8);
        var6 = var6.bind(var4)(var3);
        var _closure2_slot2 = var6;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = _closure2_slot1;
                var3 = var4.filter;
                var1 = function(arg1) {
                    var3 = _closure2_slot2;
                    var2 = var3.includes;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4 = var3.bind(var4)(var1);
                var5 = _closure2_slot0;
                var3 = null;
                var1 = var4;
                if(!(var3 != var5)) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                var3 = _closure2_slot0;
                var2 = var3.isModeratorReportChannel;
                var2 = var2.bind(var3)();
                var1 = var4;
                if(!var2) { _fun0008_ip = 28; continue _fun0008 }
case 30:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.sortedModeratorReportTags;
                var1 = var2.bind(var3)(var4);
case 28:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useVisibleAppliedForumTags'] = var2;
    return var1;
})();