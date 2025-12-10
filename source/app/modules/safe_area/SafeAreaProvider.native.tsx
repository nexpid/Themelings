// app/modules/safe_area/SafeAreaProvider.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function getSafeAreaInsets(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var5 = undefined;
            var3 = var3.bind(var5)(var2);
            var2 = var3.isAndroid;
            var2 = var2.bind(var3)();
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            return var4;
case 2:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 4;
            var1 = var6[var1];
            var2 = var3.bind(var5)(var1);
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var2 = var1.safeAreaInsets;
            var1 = 5;
            var1 = var6[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.getStableSafeAreaInsets;
            var5 = var1.bind(var3)();
            var3 = null;
            var1 = var4;
            if(!(var3 != var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var5.bottom;
            var3 = var2.bottom;
            if(!(var6 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.top;
            var3 = var2.top;
            if(!(var6 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var6 = var5.left;
            var3 = var2.left;
            if(!(var6 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 9:
            var6 = var5.right;
            var3 = var2.right;
            if(!(var6 !== var3)) { _fun0001_ip = 10; continue _fun0001 }
case 6:
            var3 = {};
            var6 = var5.bottom;
            var3['bottom'] = var6;
            var5 = var5.top;
            var3['top'] = var5;
            var5 = var4.left;
            var3['left'] = var5;
            var4 = var4.right;
            var3['right'] = var4;
            var2 = var3;
case 10:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = {'position': 'absolute', 'width': 0, 'height': 0};
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safe_area/SafeAreaProvider.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function SafeAreaReporter() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 6;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = var3.useSafeAreaInsets;
        var7 = var2.bind(var3)();
        var _closure2_slot0 = var7;
        var5 = _closure1_slot3;
        var8 = var5.useLayoutEffect;
        var3 = new Array(1);
        var3[0] = var7;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setState;
                var2 = function() {
                    var1 = {};
                    var4 = _closure1_slot7;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1['safeAreaInsets'] = var2;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var8.bind(var5)(var2, var3);
        var3 = var5.useRef;
        var2 = false;
        var2 = var3.bind(var5)(var2);
        var _closure2_slot1 = var2;
        var3 = var5.useCallback;
        var2 = new Array(1);
        var2[0] = var7;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot1;
                var2 = var2.current;
                if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var2 = _closure2_slot1;
                var1 = true;
                var2['current'] = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.batchUpdates;
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.setState;
                    var2 = function() {
                        var1 = {};
                        var4 = _closure1_slot7;
                        var3 = _closure2_slot0;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var1['safeAreaInsets'] = var2;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
case 11:
                var1 = undefined;
                return var1;
            }
        };
        var5 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot5;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = _closure1_slot6;
        var1['style'] = var6;
        var1['onLayout'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['SafeAreaReporter'] = var4;
    var2 = function(arg1) {
        var1 = arg1;
        var6 = var1.children;
        var5 = var1.style;
        var4 = _closure1_slot5;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 6;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var8.bind(var3)(var1);
        var2 = var1.SafeAreaProvider;
        var1 = {};
        var7 = 8;
        var7 = var9[var7];
        var7 = var8.bind(var3)(var7);
        var7 = var7.INITIAL_SAFE_AREA_METRICS;
        var1['initialMetrics'] = var7;
        var1['children'] = var6;
        var1['style'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['SafeAreaProvider'] = var2;
    return var1;
})();