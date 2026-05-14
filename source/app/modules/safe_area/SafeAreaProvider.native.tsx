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
                var3 = _closure2_slot0;
                var1 = _closure2_slot1;
                var8 = var3;
                var5 = var1;
                var1 = undefined;
                var10 = undefined;
                var9 = undefined;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 3;
                var4 = var7[var4];
                var6 = var6.bind(var1)(var4);
                var4 = var6.isMetaQuest;
                var4 = var4.bind(var6)();
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = 5;
                var4 = var7[var4];
                var11 = var6.bind(var1)(var4);
                var4 = var11.isAndroid;
                var4 = var4.bind(var11)();
                if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = var8;
                _fun0001_ip = 6; continue _fun0001;
case 4:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 6;
                var11 = var13[var11];
                var12 = var12.bind(var1)(var11);
                var11 = var12.getState;
                var11 = var11.bind(var12)();
                var12 = var11.byAppEntry;
                var11 = var5;
                var11 = var12[var11];
                var9 = var11.safeAreaInsets;
case 7: // try_start_0
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 7;
                var11 = var13[var11];
                var12 = var12.bind(var1)(var11);
                var11 = var12.getStableSafeAreaInsets;
                var10 = var11.bind(var12)(var5);
case 8: // try_end0
                _fun0001_ip = 9; continue _fun0001;
case 10: // catch_target0
                CatchBlockStart(arg_register=4);
                var10 = null;
case 9:
                var11 = var10;
                var5 = null;
                if(!(var5 != var11)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
                var5 = var10;
                var11 = var5.bottom;
                var5 = var9;
                var5 = var5.bottom;
                if(!(var11 === var5)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                var5 = var10;
                var11 = var5.top;
                var5 = var9;
                var5 = var5.top;
                if(!(var11 === var5)) { _fun0001_ip = 13; continue _fun0001 }
case 15:
                var5 = var10;
                var11 = var5.left;
                var5 = var9;
                var5 = var5.left;
                if(!(var11 === var5)) { _fun0001_ip = 13; continue _fun0001 }
case 16:
                var5 = var10;
                var11 = var5.right;
                var5 = var9;
                var5 = var5.right;
                if(!(var11 !== var5)) { _fun0001_ip = 17; continue _fun0001 }
case 13:
                var5 = {};
                var11 = var10.bottom;
                var5['bottom'] = var11;
                var10 = var10.top;
                var5['top'] = var10;
                var10 = var8;
                var11 = var10.left;
                var5['left'] = var11;
                var10 = var10.right;
                var5['right'] = var10;
                _fun0001_ip = 18; continue _fun0001;
case 17:
                var5 = var9;
case 18:
                _fun0001_ip = 19; continue _fun0001;
case 11:
                var5 = var8;
case 19:
                var4 = var5;
                _fun0001_ip = 6; continue _fun0001;
case 2:
                var5 = 4;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var4 = var5.META_QUEST_SAFE_AREA_INSETS;
case 6:
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
                        if(!(var3 !== var2)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
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
case 20:
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
                if(var2) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var3 = _closure2_slot2;
                var2 = true;
                var3['current'] = var2;
                var4 = _closure1_slot7;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
case 22:
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