// app/modules/user_profile/native/useSegmentedPagesHeight.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = {};
    var7 = 'function useSegmentedPagesHeightTsx1(){const{pageHeights,visiblePageRange}=this.__closure;var _heights$lo,_heights$hi;const heights=pageHeights.get();const[lo,hi]=visiblePageRange.get();const height=Math.max((_heights$lo=heights[lo])!==null&&_heights$lo!==void 0?_heights$lo:0,(_heights$hi=heights[hi])!==null&&_heights$hi!==void 0?_heights$hi:0);return height>0?{height:height}:{};}';
    var4['code'] = var7;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/useSegmentedPagesHeight.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function usePageHeights() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useSharedValue;
        var3 = new Array(0);
        var3 = var4.bind(var5)(var3);
        var _closure2_slot0 = var3;
        var5 = _closure1_slot3;
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
    var2 = function usePagesHeightStyle(arg1, arg2) {
        var7 = arg2;
        var _closure2_slot0 = var7;
        var2 = arg1;
        var6 = var2.visiblePageRange;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var5.bind(var2)(var3);
        var2 = var3.useAnimatedStyle;
        var1 = function u() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = var3.get;
                var7 = var2.bind(var3)();
                var2 = _closure2_slot1;
                var1 = var2.get;
                var4 = var1.bind(var2)();
                var3 = _closure1_slot2;
                var2 = undefined;
                var1 = 2;
                var4 = var3.bind(var2)(var4, var1);
                var1 = 0;
                var2 = var4[var1];
                var3 = 1;
                var6 = var4[var3];
                var3 = global;
                var5 = var3.Math;
                var4 = var5.max;
                var8 = var7[var2];
                var2 = null;
                var9 = var2 != var8;
                var3 = 0;
                if(!var9) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var3 = var8;
case 6:
                var6 = var7[var6];
                var7 = var2 != var6;
                var2 = 0;
                if(!var7) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var2 = var6;
case 8:
                var3 = var4.bind(var5)(var3, var2);
                if(!(!(var3 > var1))) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var1 = {};
                _fun0002_ip = 12; continue _fun0002;
case 10:
                var2 = {};
                var2['height'] = var3;
                var1 = var2;
case 12:
                return var1;
            }
        };
        var5 = {};
        var5['pageHeights'] = var7;
        var5['visiblePageRange'] = var6;
        var1['__closure'] = var5;
        var5 = 15297270890226.0;
        var1['__workletHash'] = var5;
        var4 = _closure1_slot4;
        var1['__initData'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['usePagesHeightStyle'] = var2;
    return var1;
})();