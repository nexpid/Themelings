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
            var7 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 3;
            var2 = var3[var2];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.isMetaQuest;
            var5 = var2.bind(var4)();
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = 5;
            var5 = var4[var5];
            var6 = var2.bind(var3)(var5);
            var5 = var6.isAndroid;
            var5 = var5.bind(var6)();
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            return var7;
case 4:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 6;
            var1 = var8[var1];
            var5 = var6.bind(var3)(var1);
            var1 = var5.getState;
            var1 = var1.bind(var5)();
            var5 = var1.safeAreaInsets;
            var1 = 7;
            var1 = var8[var1];
            var6 = var6.bind(var3)(var1);
            var1 = var6.getStableSafeAreaInsets;
            var8 = var1.bind(var6)();
            var6 = null;
            var1 = var7;
            if(!(var6 != var8)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var8.bottom;
            var6 = var5.bottom;
            if(!(var9 === var6)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = var8.top;
            var6 = var5.top;
            if(!(var9 === var6)) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var9 = var8.left;
            var6 = var5.left;
            if(!(var9 === var6)) { _fun0001_ip = 8; continue _fun0001 }
case 11:
            var9 = var8.right;
            var6 = var5.right;
            if(!(var9 !== var6)) { _fun0001_ip = 12; continue _fun0001 }
case 8:
            var6 = {};
            var9 = var8.bottom;
            var6['bottom'] = var9;
            var8 = var8.top;
            var6['top'] = var8;
            var8 = var7.left;
            var6['left'] = var8;
            var7 = var7.right;
            var6['right'] = var7;
            var5 = var6;
case 12:
            var1 = var5;
case 6:
            return var1;
case 2:
            var1 = 4;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            var1 = var1.META_QUEST_SAFE_AREA_INSETS;
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
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safe_area/SafeAreaProvider.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function SafeAreaReporter() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 8;
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
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 6;
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
                if(var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var2 = _closure2_slot1;
                var1 = true;
                var2['current'] = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.batchUpdates;
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
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
case 13:
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
        var1 = 8;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var8.bind(var3)(var1);
        var2 = var1.SafeAreaProvider;
        var1 = {};
        var7 = 4;
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