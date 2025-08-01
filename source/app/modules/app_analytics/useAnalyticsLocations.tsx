// app/modules/app_analytics/useAnalyticsLocations.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = function mergeLocations(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = arg2;
            var2 = var5.length;
            var3 = 0;
            if(!(var3 !== var2)) { _fun0001_ip = 81; continue _fun0001 }
 17:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 3;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var6.bind(var2)(var4);
            var2 = var4.flatten;
            var4 = var2.bind(var4)(var5);
            var2 = new Array(0);
            var9 = var2;
            var8 = var1;
            var7 = 0;
            var7 = arraySpread(var9, var8, var7);
            var9 = var2;
            var8 = var4;
            var3 = arraySpread(var9, var8, var7);
            return var2;
 81:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var5 = var7[var4];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var5);
    var _closure1_slot3 = var8;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var5 = var8.createContext;
    var4 = new Array(0);
    var4 = var5.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_analytics/useAnalyticsLocations.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useAnalyticsLocations(arg1) {
        var4 = 0;
        var12 = 0;
        var9 = copyRestArgs(var12);
        var _closure2_slot0 = var9;
        var7 = _closure1_slot3;
        var3 = var7.useState;
        var8 = var3.bind(var7)(var9);
        var6 = _closure1_slot2;
        var5 = undefined;
        var3 = 2;
        var3 = var6.bind(var5)(var8, var3);
        var8 = var3[var4];
        var _closure2_slot1 = var8;
        var4 = 1;
        var3 = var3[var4];
        var _closure2_slot2 = var3;
        var3 = var7.useContext;
        var2 = _closure1_slot5;
        var2 = var3.bind(var7)(var2);
        var _closure2_slot3 = var2;
        var6 = var7.useMemo;
        var5 = new Array(2);
        var5[0] = var8;
        var5[1] = var2;
        var3 = function() {
            var4 = _closure1_slot6;
            var3 = _closure2_slot3;
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var3 = var6.bind(var7)(var3, var5);
        var6 = var7.useMemo;
        var5 = new Array(2);
        var5[0] = var8;
        var5[1] = var2;
        var2 = function() {
            var4 = _closure1_slot6;
            var3 = _closure2_slot3;
            var6 = _closure2_slot1;
            var5 = var6.slice;
            var2 = var6.length;
            var1 = 1;
            var2 = var2 - var1;
            var1 = 0;
            var2 = var5.bind(var6)(var1, var2);
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var5 = var6.bind(var7)(var2, var5);
        var6 = var7.useEffect;
        var2 = new Array(2);
        var2[0] = var9;
        var2[1] = var8;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var3 = var5.bind(var1)(var4, var3);
                if(var3) { _fun0002_ip = 58; continue _fun0002 }
 45:
                var3 = _closure2_slot2;
                var2 = _closure2_slot0;
                var2 = var3.bind(var1)(var2);
 58:
                return var1;
            }
        };
        var1 = var6.bind(var7)(var1, var2);
        var1 = {};
        var1['analyticsLocations'] = var3;
        var1['sourceAnalyticsLocations'] = var5;
        var2 = var5.length;
        var2 = var2 - var4;
        var2 = var5[var2];
        var1['parentAnalyticsLocation'] = var2;
        var2 = var3.length;
        var2 = var2 - var4;
        var2 = var3[var2];
        var1['newestAnalyticsLocation'] = var2;
        return var1;
    };
    var3['default'] = var5;
    var3['LocationContext'] = var4;
    var2 = function AnalyticsLocationProvider(arg1) {
        var2 = arg1;
        var1 = var2.children;
        var5 = var2.value;
        var4 = _closure1_slot4;
        var2 = _closure1_slot5;
        var3 = var2.Provider;
        var2 = {};
        var2['value'] = var5;
        var2['children'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['AnalyticsLocationProvider'] = var2;
    return var1;
})();