// app/modules/safe_area/SafeAreaProvider.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function updateSafeAreaStoreEntry(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 8;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var10 = _closure2_slot0;
                var11 = _closure2_slot1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 3;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.isMetaQuest;
                var4 = var4.bind(var5)();
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = 5;
                var4 = var7[var4];
                var5 = var6.bind(var1)(var4);
                var4 = var5.isAndroid;
                var5 = var4.bind(var5)();
                var4 = var10;
                if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var5 = 6;
                var5 = var12[var5];
                var8 = var9.bind(var1)(var5);
                var5 = var8.getState;
                var5 = var5.bind(var8)();
                var5 = var5.byAppEntry;
                var5 = var5[var11];
                var8 = var5.safeAreaInsets;
                var5 = 7;
                var5 = var12[var5];
                var9 = var9.bind(var1)(var5);
                var5 = var9.getStableSafeAreaInsets;
                var11 = var5.bind(var9)(var11);
                var9 = null;
                var5 = var10;
                if(!(var9 != var11)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var12 = var11.bottom;
                var9 = var8.bottom;
                if(!(var12 === var9)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var12 = var11.top;
                var9 = var8.top;
                if(!(var12 === var9)) { _fun0001_ip = 8; continue _fun0001 }
case 10:
                var12 = var11.left;
                var9 = var8.left;
                if(!(var12 === var9)) { _fun0001_ip = 8; continue _fun0001 }
case 11:
                var12 = var11.right;
                var9 = var8.right;
                if(!(var12 !== var9)) { _fun0001_ip = 12; continue _fun0001 }
case 8:
                var9 = {};
                var12 = var11.bottom;
                var9['bottom'] = var12;
                var11 = var11.top;
                var9['top'] = var11;
                var11 = var10.left;
                var9['left'] = var11;
                var10 = var10.right;
                var9['right'] = var10;
                var8 = var9;
case 12:
                var5 = var8;
case 6:
                var4 = var5;
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var5 = 4;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var4 = var5.META_QUEST_SAFE_AREA_INSETS;
case 4:
                var _closure3_slot0 = var4;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 6;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.setState;
                var2 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var5 = arg1;
                        var2 = var5.byAppEntry;
                        var1 = _closure2_slot1;
                        var1 = var2[var1];
                        var3 = var1.safeAreaInsets;
                        var2 = _closure3_slot0;
                        var1 = var5;
                        if(!(var3 !== var2)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                        var2 = {};
                        var3 = {};
                        var7 = var5.byAppEntry;
                        var8 = var3;
                        var5 = copyDataProperties(var8, var7);
                        var5 = _closure2_slot1;
                        var4 = {};
                        var6 = _closure3_slot0;
                        var4['safeAreaInsets'] = var6;
                        var3[4] = var4;
                        var2['byAppEntry'] = var3;
                        var1 = var2;
case 13:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
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
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safe_area/SafeAreaProvider.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function SafeAreaReporter() {
        var3 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 9;
        var2 = var5[var2];
        var4 = undefined;
        var7 = var3.bind(var4)(var2);
        var2 = var7.useSafeAreaInsets;
        var8 = var2.bind(var7)();
        var _closure2_slot0 = var8;
        var2 = 10;
        var2 = var5[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useAppEntryKey;
        var7 = var2.bind(var3)();
        var _closure2_slot1 = var7;
        var5 = _closure1_slot3;
        var9 = var5.useLayoutEffect;
        var3 = new Array(2);
        var3[0] = var8;
        var3[1] = var7;
        var2 = function() {
            var4 = _closure1_slot7;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var2 = var9.bind(var5)(var2, var3);
        var3 = var5.useRef;
        var2 = false;
        var2 = var3.bind(var5)(var2);
        var _closure2_slot2 = var2;
        var3 = var5.useCallback;
        var2 = new Array(2);
        var2[0] = var8;
        var2[1] = var7;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure2_slot2;
                var2 = var2.current;
                if(var2) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var3 = _closure2_slot2;
                var2 = true;
                var3['current'] = var2;
                var4 = _closure1_slot7;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
case 15:
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
    var2 = function SafeAreaProvider(arg1) {
        var1 = arg1;
        var6 = var1.children;
        var5 = var1.style;
        var4 = _closure1_slot5;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 9;
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