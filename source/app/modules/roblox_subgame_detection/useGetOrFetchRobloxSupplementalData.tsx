// app/modules/roblox_subgame_detection/useGetOrFetchRobloxSupplementalData.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var5 = function useGetOrFetchRobloxSupplementalDataForUniverseIds(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var6 = _closure1_slot3;
        var5 = var6.useRef;
        var4 = new Array(0);
        var4 = var5.bind(var6)(var4);
        var _closure2_slot1 = var4;
        var6 = _closure1_slot3;
        var5 = var6.useEffect;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var2);
                var6 = var7.areArraysShallowEqual;
                var4 = _closure2_slot1;
                var5 = var4.current;
                var4 = _closure2_slot0;
                var4 = var6.bind(var7)(var5, var4);
                if(var4) { _fun0001_ip = 101; continue _fun0001 }
 56:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 4;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.fetchRobloxSupplementalData;
                var3 = _closure2_slot0;
                var4 = var4.bind(var5)(var3);
                var2 = _closure2_slot1;
                var2['current'] = var3;
 101:
                return var1;
            }
        };
        var3 = var5.bind(var6)(var3, var4);
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 5;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStoresArray;
        var5 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var3 = _closure2_slot0;
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = arg1;
                    var1 = null;
                    var2 = var1 != var4;
                    var1 = undefined;
                    if(!var2) { _fun0002_ip = 32; continue _fun0002 }
 14:
                    var3 = _closure1_slot4;
                    var2 = var3.getSupplementalData;
                    var1 = var2.bind(var3)(var4);
 32:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot5 = var5;
    var4 = function useGetOrFetchRobloxSupplementalDataForUniverseId(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var3 = _closure1_slot5;
            var1 = null;
            if(!(var1 == var4)) { _fun0003_ip = 22; continue _fun0003 }
 16:
            var2 = new Array(0);
            _fun0003_ip = 33; continue _fun0003;
 22:
            var1 = new Array(1);
            var1[0] = var4;
            var2 = var1;
 33:
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = 0;
            var1 = var2[var1];
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var10 = var8[var6];
    var6 = metroImportAll;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/roblox_subgame_detection/useGetOrFetchRobloxSupplementalData.tsx';
    var6 = var7.bind(var8)(var6);
    var3['useGetOrFetchRobloxSupplementalDataForUniverseIds'] = var5;
    var3['useGetOrFetchRobloxSupplementalDataForUniverseId'] = var4;
    var2 = function usePlayOnRoblox(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot6;
        var3 = undefined;
        var6 = var4.bind(var3)(var5);
        var _closure2_slot1 = var6;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var3 = _closure1_slot2;
            var2 = undefined;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 165; continue _fun0004 }
 10:
                        var3 = _closure2_slot0;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0004_ip = 157; continue _fun0004 }
 26:
                        var3 = _closure2_slot1;
                        if(!(var4 != var3)) { _fun0004_ip = 48; continue _fun0004 }
 34:
                        var3 = _closure2_slot1;
                        var3 = var3.rootPlaceId;
                        if(!(var4 == var3)) { _fun0004_ip = 101; continue _fun0004 }
 48:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var3 = 6;
                        var4 = var4[var3];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.playOnRobloxUniverse;
                        var3 = _closure2_slot0;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address=92);
 90:
                        return var3;
 92:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(!var4) { _fun0004_ip = 157; continue _fun0004 }
 98:
                        return var3;
 101:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var3 = 6;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.openRobloxURLWithRootPlaceId;
                        var2 = _closure2_slot1;
                        var2 = var2.rootPlaceId;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address=151);
 149:
                        return var2;
 151:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0004_ip = 162; continue _fun0004 }
 157:
                        var3 = undefined;
                        return var3;
 162:
                        return var2;
 165:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['usePlayOnRoblox'] = var2;
    return var1;
})();