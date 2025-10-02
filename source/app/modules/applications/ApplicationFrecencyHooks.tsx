// app/modules/applications/ApplicationFrecencyHooks.tsx
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
    var4 = var4.UserSettingsTypes;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/ApplicationFrecencyHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSortApplicationsViaFrecency(arg1, arg2) {
        var2 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var2;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var8 = var4.useEffect;
        var7 = function() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 3;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var4 = var3.FrecencyUserSettingsActionCreators;
            var3 = var4.loadIfUncached;
            var2 = _closure1_slot5;
            var2 = var2.FRECENCY_AND_FAVORITES_SETTINGS;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6 = new Array(0);
        var6 = var8.bind(var4)(var7, var6);
        var8 = _closure1_slot0;
        var7 = _closure1_slot2;
        var6 = 4;
        var7 = var7[var6];
        var6 = undefined;
        var8 = var8.bind(var6)(var7);
        var7 = var8.useStateFromStores;
        var3 = _closure1_slot4;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            var2 = _closure1_slot4;
            var1 = var2.getApplicationFrecencyWithoutLoadingLatest;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6 = var7.bind(var8)(var6, var3);
        var _closure2_slot2 = var6;
        var8 = var4.useMemo;
        var7 = new Array(2);
        var7[0] = var2;
        var7[1] = var5;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot1;
                var1 = null;
                if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure2_slot1;
                var3 = var1.length;
                var1 = 0;
                if(!(var1 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var4 = _closure2_slot0;
                var3 = var4.map;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var1 = {};
                        var8 = var1;
                        var7 = var2;
                        var2 = copyDataProperties(var8, var7);
                        var2 = _closure2_slot1;
                        var3 = null;
                        var6 = var3 == var2;
                        var2 = undefined;
                        if(var6) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                        var6 = _closure2_slot1;
                        var5 = var6.some;
                        var4 = function(arg1) {
                            var1 = arg1;
                            var1 = var1.application;
                            var2 = var1.id;
                            var1 = _closure4_slot0;
                            var1 = var1.id;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var2 = var5.bind(var6)(var4);
case 5:
                        var3 = var3 != var2;
                        if(!var3) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                        var3 = var2;
case 7:
                        var2 = 'isUserApp';
                        var1[var2] = var3;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1);
                _fun0001_ip = 9; continue _fun0001;
case 2:
                var1 = _closure2_slot0;
case 9:
                return var1;
            }
        };
        var7 = var8.bind(var4)(var3, var7);
        var _closure2_slot3 = var7;
        var8 = var4.useMemo;
        var3 = new Array(2);
        var3[0] = var2;
        var3[1] = var5;
        var2 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure2_slot1;
                var1 = null;
                var3 = var1 == var3;
                var1 = undefined;
                if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var4 = _closure2_slot1;
                var3 = var4.filter;
                var2 = function(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var3 = _closure2_slot0;
                    var2 = var3.some;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var1.application;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 10:
                return var1;
            }
        };
        var2 = var8.bind(var4)(var2, var3);
        var _closure2_slot4 = var2;
        var8 = var4.useMemo;
        var3 = new Array(3);
        var3[0] = var7;
        var3[1] = var6;
        var3[2] = var2;
        var2 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = _closure2_slot4;
                var3 = null;
                if(!(var3 != var4)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                var6 = _closure2_slot4;
                var5 = var6.forEach;
                var4 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = arg1;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 5;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.extractTimestamp;
                        var3 = var2.id;
                        var6 = var4.bind(var5)(var3);
                        var7 = _closure2_slot2;
                        var5 = var7.getEntry;
                        var4 = var2.application;
                        var4 = var4.id;
                        var5 = var5.bind(var7)(var4);
                        var4 = null;
                        if(!(var4 == var5)) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                        var5 = _closure2_slot2;
                        var4 = var5.track;
                        var2 = var2.application;
                        var3 = var2.id;
                        var2 = {};
                        var2['timestamp'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
case 14:
                        return var1;
                    }
                };
                var4 = var5.bind(var6)(var4);
case 12:
                var5 = _closure2_slot2;
                var4 = var5.compute;
                var4 = var4.bind(var5)();
                var4 = _closure2_slot4;
                var4 = var3 == var4;
                var6 = undefined;
                if(var4) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var7 = _closure2_slot4;
                var5 = var7.map;
                var4 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getApplicationCommandSection;
                    var1 = arg1;
                    var2 = var1.application;
                    var1 = true;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var6 = var5.bind(var7)(var4);
case 16:
                if(!(var3 == var6)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var6 = new Array(0);
case 18:
                var9 = _closure2_slot3;
                var1 = new Array(0);
                var10 = var1;
                var8 = 0;
                var3 = arraySpread(var10, var9, var8);
                var4 = var1.push;
                var3 = new Array(0);
                var10 = var3;
                var9 = var6;
                var5 = arraySpread(var10, var9, var8);
                var10 = var4;
                var9 = var3;
                var8 = var1;
                var3 = apply(var10, var9, var8);
                var3 = var1.sort;
                var2 = function(arg1, arg2) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = arg1;
                        var2 = arg2;
                        var5 = _closure2_slot2;
                        var4 = var5.getScore;
                        var1 = var2.id;
                        var7 = var4.bind(var5)(var1);
                        var1 = null;
                        var8 = var1 != var7;
                        var4 = 0;
                        var5 = 0;
                        if(!var8) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                        var5 = var7;
case 20:
                        var8 = _closure2_slot2;
                        var7 = var8.getScore;
                        var6 = var3.id;
                        var6 = var7.bind(var8)(var6);
                        var7 = var1 != var6;
                        var1 = 0;
                        if(!var7) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                        var1 = var6;
case 22:
                        var1 = var5 - var1;
                        if(!(var4 === var1)) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                        var4 = var3.name;
                        var3 = var4.localeCompare;
                        var2 = var2.name;
                        var1 = var3.bind(var4)(var2);
case 24:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var8 = var8.bind(var4)(var2, var3);
        var _closure2_slot5 = var8;
        var3 = var4.useMemo;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = _closure2_slot1;
                var3 = null;
                if(!(var3 != var4)) { _fun0007_ip = 12; continue _fun0007 }
case 13:
                var6 = _closure2_slot1;
                var5 = var6.forEach;
                var4 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var4 = arg1;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var3 = var5.extractTimestamp;
                        var2 = var4.id;
                        var3 = var3.bind(var5)(var2);
                        var6 = _closure3_slot1;
                        var5 = null;
                        var5 = var5 == var6;
                        if(var5) { _fun0008_ip = 8; continue _fun0008 }
case 26:
                        var6 = _closure3_slot1;
                        var5 = var3 > var6;
case 8:
                        if(!var5) { _fun0008_ip = 27; continue _fun0008 }
case 7:
                        var _closure3_slot0 = var4;
                        var _closure3_slot1 = var3;
case 27:
                        return var1;
                    }
                };
                var4 = var5.bind(var6)(var4);
case 12:
                var6 = _closure2_slot3;
                var5 = var6.forEach;
                var4 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var4 = arg1;
                        var1 = global;
                        var5 = var1.Math;
                        var3 = var5.max;
                        var6 = _closure2_slot2;
                        var2 = var6.getEntry;
                        var1 = var4.id;
                        var2 = var2.bind(var6)(var1);
                        var6 = null;
                        var7 = var6 == var2;
                        var1 = undefined;
                        var8 = undefined;
                        if(var7) { _fun0009_ip = 28; continue _fun0009 }
case 29:
                        var8 = var2.recentUses;
case 28:
                        if(!(var6 == var8)) { _fun0009_ip = 30; continue _fun0009 }
case 31:
                        var8 = new Array(0);
case 30:
                        var2 = new Array(0);
                        var9 = 0;
                        var11 = var2;
                        var10 = var8;
                        var7 = arraySpread(var11, var10, var9);
                        var11 = var3;
                        var10 = var2;
                        var9 = var5;
                        var3 = apply(var11, var10, var9);
                        var5 = _closure3_slot1;
                        var5 = var6 == var5;
                        if(var5) { _fun0009_ip = 32; continue _fun0009 }
case 33:
                        var6 = _closure3_slot1;
                        var5 = var3 > var6;
case 32:
                        if(!var5) { _fun0009_ip = 34; continue _fun0009 }
case 35:
                        _closure3_slot0 = var4;
                        _closure3_slot1 = var3;
case 34:
                        return var1;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var5 = _closure3_slot0;
                var6 = var3 == var5;
                var4 = undefined;
                if(var6) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                var5 = var5.application;
                var6 = var3 == var5;
                var4 = undefined;
                if(var6) { _fun0007_ip = 36; continue _fun0007 }
case 16:
                var4 = var5.id;
case 36:
                var5 = var3 != var4;
                var3 = '';
                if(!var5) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                var3 = var4;
case 38:
                var _closure3_slot2 = var3;
                var5 = _closure2_slot5;
                var3 = var5.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot2;
                    var1 = var2 === var1;
                    return var1;
                };
                var9 = var3.bind(var5)(var1);
                var1 = new Array(0);
                var8 = 0;
                var10 = var1;
                var8 = arraySpread(var10, var9, var8);
                var4 = var5.filter;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot2;
                    var1 = var2 !== var1;
                    return var1;
                };
                var9 = var4.bind(var5)(var2);
                var10 = var1;
                var2 = arraySpread(var10, var9, var8);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useSortApplicationsViaFrecency'] = var2;
    return var1;
})();