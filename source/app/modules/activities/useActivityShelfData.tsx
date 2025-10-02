// app/modules/activities/useActivityShelfData.tsx
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
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/useActivityShelfData.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useActivityShelfData(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 4;
            var2 = var6[var3];
            var7 = undefined;
            var10 = var5.bind(var7)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = var2.getCurrentUser;
            var2 = var9.bind(var10)(var8, var2);
            var _closure2_slot1 = var2;
            var8 = var6[var3];
            var11 = var5.bind(var7)(var8);
            var10 = var11.useStateFromStoresArray;
            var8 = _closure1_slot6;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getShelfActivities;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var10.bind(var11)(var9, var8);
            var _closure2_slot2 = var10;
            var3 = var6[var3];
            var8 = var5.bind(var7)(var3);
            var6 = var8.useStateFromStores;
            var3 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var1 = _closure1_slot5;
                var1 = var1.testModeEmbeddedApplicationId;
                return var1;
            };
            var5 = var6.bind(var8)(var5, var3);
            var _closure2_slot3 = var5;
            var6 = var10.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.application_id;
                return var1;
            };
            var11 = var6.bind(var10)(var3);
            var8 = null;
            var6 = var11;
            if(!(var8 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = new Array(1);
            var3[0] = var5;
            var12 = 1;
            var14 = var3;
            var13 = var11;
            var9 = arraySpread(var14, var13, var12);
            var6 = var3;
case 2:
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 5;
            var3 = var11[var3];
            var3 = var9.bind(var7)(var3);
            var3 = var3.bind(var7)(var6);
            var _closure2_slot4 = var3;
            var4 = _closure1_slot3;
            var9 = var4.useMemo;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure2_slot4;
                var2 = var3.filter;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var9.bind(var4)(var3, var6);
            var _closure2_slot5 = var3;
            var9 = var4.useMemo;
            var6 = new Array(2);
            var6[0] = var3;
            var6[1] = var5;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = _closure2_slot5;
                    var1 = var1.length;
                    var4 = 0;
                    if(!(var1 > var4)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var1 = _closure2_slot5;
                    var1 = var1[var4];
                    var5 = var1.id;
                    var1 = _closure2_slot3;
                    if(!(var5 === var1)) { _fun0002_ip = 4; continue _fun0002 }
case 7:
                    var1 = _closure2_slot5;
                    var1 = var1[var4];
                    var1 = var1.embeddedActivityConfig;
                    if(!(var3 == var1)) { _fun0002_ip = 8; continue _fun0002 }
case 4:
                    var1 = new Array(0);
                    _fun0002_ip = 9; continue _fun0002;
case 8:
                    var3 = {};
                    var5 = _closure2_slot5;
                    var5 = var5[var4];
                    var5 = var5.embeddedActivityConfig;
                    var3['activity'] = var5;
                    var2 = _closure2_slot5;
                    var2 = var2[var4];
                    var3['application'] = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var1 = var2;
case 9:
                    return var1;
                }
            };
            var5 = var9.bind(var4)(var5, var6);
            var _closure2_slot6 = var5;
            var9 = var4.useMemo;
            var6 = new Array(2);
            var6[0] = var10;
            var6[1] = var3;
            var3 = function() {
                var3 = _closure2_slot2;
                var2 = var3.map;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = arg1;
                        var _closure4_slot0 = var4;
                        var3 = _closure2_slot5;
                        var2 = var3.find;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.id;
                            var1 = _closure4_slot0;
                            var1 = var1.application_id;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var3 = var2.bind(var3)(var1);
                        var1 = null;
                        var2 = var1 == var3;
                        if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var2 = {};
                        var2['activity'] = var4;
                        var2['application'] = var3;
                        var1 = var2;
case 10:
                        return var1;
                    }
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.isNotNullish;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var9.bind(var4)(var3, var6);
            var _closure2_slot7 = var6;
            var3 = var4.useMemo;
            var8 = var8 == var2;
            var7 = undefined;
            if(var8) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = var2.nsfwAllowed;
case 12:
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() {
                var7 = _closure2_slot6;
                var4 = new Array(0);
                var6 = 0;
                var8 = var4;
                var6 = arraySpread(var8, var7, var6);
                var7 = _closure2_slot7;
                var8 = var4;
                var2 = arraySpread(var8, var7, var6);
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.activity;
                        var3 = var1.supported_platforms;
                        var1 = null;
                        if(!(var1 == var3)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                        var3 = new Array(0);
case 14:
                        var2 = var3.includes;
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 7;
                        var4 = var7[var4];
                        var5 = undefined;
                        var4 = var6.bind(var5)(var4);
                        var6 = _closure1_slot0;
                        var1 = 8;
                        var1 = var7[var1];
                        var6 = var6.bind(var5)(var1);
                        var1 = var6.getOS;
                        var1 = var1.bind(var6)();
                        var1 = var4.bind(var5)(var1);
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.activity;
                        var1 = var1.requires_age_gate;
                        var1 = !var1;
                        if(var1) { _fun0005_ip = 16; continue _fun0005 }
case 15:
                        var4 = _closure2_slot1;
                        var3 = null;
                        var4 = var3 == var4;
                        var3 = undefined;
                        if(var4) { _fun0005_ip = 7; continue _fun0005 }
case 17:
                        var2 = _closure2_slot1;
                        var3 = var2.nsfwAllowed;
case 7:
                        var2 = true;
                        var1 = var2 === var3;
case 16:
                        if(var1) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                        var2 = _closure2_slot1;
                        var3 = null;
                        var5 = var3 == var2;
                        var2 = undefined;
                        if(var5) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                        var4 = _closure2_slot1;
                        var2 = var4.nsfwAllowed;
case 20:
                        var1 = var3 == var2;
case 18:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useActivityShelfData'] = var2;
    return var1;
})();