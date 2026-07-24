// app/modules/premium_marketing/native/hooks/useBuyNitroListData.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium_marketing/native/hooks/useBuyNitroListData.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useBuyNitroListData(arg1) {
        var1 = arg1;
        var1 = var1.selection;
        var4 = var1.tier;
        var1 = var1.setTier;
        var _closure2_slot0 = var1;
        var7 = _closure1_slot0;
        var6 = _closure1_slot1;
        var3 = 4;
        var3 = var6[var3];
        var6 = undefined;
        var3 = var7.bind(var6)(var3);
        var3 = var3.bind(var6)(var4);
        var9 = _closure1_slot2;
        var4 = var9.useRef;
        var2 = null;
        var2 = var4.bind(var9)(var2);
        var _closure2_slot1 = var2;
        var7 = var9.useRef;
        var4 = false;
        var4 = var7.bind(var9)(var4);
        var _closure2_slot2 = var4;
        var7 = var9.useCallback;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function(arg1) {
            var3 = _closure2_slot2;
            var2 = true;
            var3['current'] = var2;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var4 = var7.bind(var9)(var1, var4);
        var8 = var9.useEffect;
        var7 = new Array(1);
        var7[0] = var3;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot2;
                var3 = var3.current;
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = undefined;
                return var3;
case 2:
                var3 = _closure2_slot2;
                var2 = false;
                var3['current'] = var2;
                var2 = global;
                var4 = var2.requestAnimationFrame;
                var3 = undefined;
                var2 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = _closure2_slot1;
                        var4 = var1.current;
                        var1 = null;
                        var2 = var1 == var4;
                        var1 = undefined;
                        if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var3 = var4.scrollToTop;
                        var2 = {};
                        var5 = true;
                        var2['animated'] = var5;
                        var1 = var3.bind(var4)(var2);
case 4:
                        return var1;
                    }
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.cancelAnimationFrame;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            }
        };
        var1 = var8.bind(var9)(var1, var7);
        var1 = {};
        var5 = function useBuyNitroListScrollTracking() {
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 2;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var3 = var3.analyticsLocations;
            var _closure3_slot0 = var3;
            var4 = _closure1_slot2;
            var3 = var4.useRef;
            var1 = false;
            var1 = var3.bind(var4)(var1);
            var _closure3_slot1 = var1;
            var1 = {};
            var2 = function onScroll(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var5 = var1.layoutMeasurement;
                    var4 = var1.contentOffset;
                    var3 = var1.contentSize;
                    var2 = _closure3_slot1;
                    var2 = var2.current;
                    var2 = !var2;
                    if(!var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var5 = var5.height;
                    var4 = var4.y;
                    var4 = var5 + var4;
                    var3 = var3.height;
                    var2 = var4 >= var3;
case 6:
                    if(!var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 3;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.track;
                    var2 = _closure1_slot3;
                    var3 = var2.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM;
                    var2 = {};
                    var6 = _closure3_slot0;
                    var2['location_stack'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = _closure3_slot1;
                    var1 = true;
                    var2['current'] = var1;
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onScroll'] = var2;
            return var1;
        };
        var5 = var5.bind(var6)();
        var5 = var5.onScroll;
        var1['onScroll'] = var5;
        var1['onSelectNitroTier'] = var4;
        var1['listData'] = var3;
        var1['listRef'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();