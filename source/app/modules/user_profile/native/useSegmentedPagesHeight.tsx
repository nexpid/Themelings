// app/modules/user_profile/native/useSegmentedPagesHeight.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = {};
    var7 = 'function useSegmentedPagesHeightTsx1(){const{pageHeights,visiblePageRange,fillHeight}=this.__closure;var _heights$lo,_heights$hi;const heights=pageHeights.get();const[lo,hi]=visiblePageRange.get();const contentHeight=Math.max((_heights$lo=heights[lo])!==null&&_heights$lo!==void 0?_heights$lo:0,(_heights$hi=heights[hi])!==null&&_heights$hi!==void 0?_heights$hi:0);const height=Math.max(contentHeight,fillHeight);return height>0?{height:height}:{};}';
    var4['code'] = var7;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/useSegmentedPagesHeight.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function usePageHeights() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useSharedValue;
        var3 = new Array(0);
        var3 = var4.bind(var5)(var3);
        var _closure2_slot0 = var3;
        var5 = _closure1_slot4;
        var4 = var5.useRef;
        var2 = new Array(0);
        var2 = var4.bind(var5)(var2);
        var _closure2_slot1 = var2;
        var4 = var5.useCallback;
        var2 = new Array(1);
        var2[0] = var3;
        var1 = function(arg1, arg2, arg3) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var6 = arg1;
                var4 = arg3;
                var5 = 0;
                var1 = var4 <= var5;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot1;
                var2 = var2.current;
                var2 = var2[var6];
                var1 = var2 === var4;
case 2:
                if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var1 = _closure2_slot1;
                var3 = var1.current;
                var3[var6] = var4;
                var3 = _closure2_slot0;
                var2 = var3.set;
                var8 = var1.current;
                var1 = new Array(0);
                var9 = var1;
                var7 = 0;
                var4 = arraySpread(var9, var8, var7);
                var1 = var2.bind(var3)(var1);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var1, var2);
        var1 = {};
        var1['pageHeights'] = var3;
        var1['handlePageContentSize'] = var2;
        return var1;
    };
    var3['usePageHeights'] = var4;
    var4 = function usePagerFillHeight() {
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 3;
        var2 = var5[var2];
        var9 = undefined;
        var2 = var4.bind(var9)(var2);
        var2 = var2.bind(var9)();
        var8 = var2.height;
        var _closure2_slot0 = var8;
        var2 = 4;
        var2 = var5[var2];
        var2 = var4.bind(var9)(var2);
        var2 = var2.bind(var9)();
        var7 = var2.bottom;
        var _closure2_slot1 = var7;
        var6 = _closure1_slot4;
        var4 = var6.useState;
        var2 = 0;
        var5 = var4.bind(var6)(var2);
        var4 = _closure1_slot3;
        var3 = 2;
        var4 = var4.bind(var9)(var5, var3);
        var3 = var4[var2];
        var2 = 1;
        var2 = var4[var2];
        var _closure2_slot2 = var2;
        var4 = var6.useRef;
        var2 = null;
        var4 = var4.bind(var6)(var2);
        var _closure2_slot3 = var4;
        var5 = var6.useCallback;
        var2 = new Array(2);
        var2[0] = var8;
        var2[1] = var7;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure2_slot3;
                var3 = var1.current;
                var1 = null;
                if(!(var1 != var3)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var2 = var3.measureInWindow;
                var1 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure2_slot0;
                        var1 = arg2;
                        var3 = var3 - var1;
                        var1 = _closure2_slot1;
                        var1 = var3 - var1;
                        var3 = _closure2_slot2;
                        var2 = 0;
                        if(!(var1 > var2)) { _fun0003_ip = 2; continue _fun0003 }
case 7:
                        var2 = var1;
case 2:
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
case 5:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var5.bind(var6)(var1, var2);
        var1 = {};
        var1['pagerRef'] = var4;
        var1['fillHeight'] = var3;
        var1['measureFill'] = var2;
        return var1;
    };
    var3['usePagerFillHeight'] = var4;
    var2 = function usePagesHeightStyle(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var8 = arg2;
            var6 = arguments[2];
            var _closure2_slot0 = var8;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0004_ip = 8; continue _fun0004 }
case 6:
            var6 = 0;
case 8:
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var5;
            var2 = arg1;
            var7 = var2.visiblePageRange;
            _closure2_slot2 = var7;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 2;
            var2 = var9[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function u() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = var3.get;
                    var9 = var1.bind(var3)();
                    var3 = _closure2_slot2;
                    var1 = var3.get;
                    var5 = var1.bind(var3)();
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var1 = 2;
                    var5 = var4.bind(var3)(var5, var1);
                    var1 = 0;
                    var4 = var5[var1];
                    var3 = 1;
                    var8 = var5[var3];
                    var3 = global;
                    var7 = var3.Math;
                    var6 = var7.max;
                    var10 = var9[var4];
                    var4 = null;
                    var11 = var4 != var10;
                    var5 = 0;
                    if(!var11) { _fun0005_ip = 9; continue _fun0005 }
case 10:
                    var5 = var10;
case 9:
                    var8 = var9[var8];
                    var9 = var4 != var8;
                    var4 = 0;
                    if(!var9) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                    var4 = var8;
case 11:
                    var5 = var6.bind(var7)(var5, var4);
                    var4 = var3.Math;
                    var3 = var4.max;
                    var2 = _closure2_slot1;
                    var3 = var3.bind(var4)(var5, var2);
                    if(!(!(var3 > var1))) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                    var1 = {};
                    _fun0005_ip = 15; continue _fun0005;
case 13:
                    var2 = {};
                    var2['height'] = var3;
                    var1 = var2;
case 15:
                    return var1;
                }
            };
            var5 = {};
            var5['pageHeights'] = var8;
            var5['visiblePageRange'] = var7;
            var5['fillHeight'] = var6;
            var1['__closure'] = var5;
            var5 = 7484186791578.0;
            var1['__workletHash'] = var5;
            var4 = _closure1_slot5;
            var1['__initData'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['usePagesHeightStyle'] = var2;
    return var1;
})();