// app/modules/fastest_list/props/useFastestListPropsScrollReporting.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = {};
    var6 = 'function useFastestListPropsScrollReportingNativeTsx1(event){const{scrollPosition,horizontal}=this.__closure;if(scrollPosition!=null){scrollPosition.set(horizontal?event.contentOffset.x:event.contentOffset.y);}}';
    var1['code'] = var6;
    var _closure1_slot2 = var1;
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/fastest_list/props/useFastestListPropsScrollReporting.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFastestListPropsScrollReporting(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var9 = arg2;
            var _closure2_slot0 = var9;
            var2 = var3.scrollReporting;
            var5 = undefined;
            var1 = 'animatedScrollPosition';
            var10 = undefined;
            if(!(var1 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = var3.scrollPosition;
case 2:
            var _closure2_slot1 = var10;
            var4 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 0;
            var2 = var8[var2];
            var5 = var4.bind(var5)(var2);
            var4 = var5.useAnimatedScrollHandler;
            var2 = {};
            var6 = function n(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var1 = _closure2_slot0;
                    var4 = arg1;
                    var4 = var4.contentOffset;
                    if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 2:
                    var1 = var4.y;
                    _fun0002_ip = 7; continue _fun0002;
case 6:
                    var1 = var4.x;
case 7:
                    var1 = var2.bind(var3)(var1);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = {};
            var8['scrollPosition'] = var10;
            var8['horizontal'] = var9;
            var6['__closure'] = var8;
            var8 = 14196294214838.0;
            var6['__workletHash'] = var8;
            var7 = _closure1_slot2;
            var6['__initData'] = var7;
            var2['onScroll'] = var6;
            var2 = var4.bind(var5)(var2);
            var4 = var3.scrollReporting;
            if(!(var1 !== var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = 'animatedCallbacks';
            if(!(var1 !== var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = {};
            var4 = var3.onScroll;
            var1['onScroll'] = var4;
            var4 = var3.onScrollBeginDrag;
            var1['onScrollBeginDrag'] = var4;
            var4 = var3.onScrollEndDrag;
            var1['onScrollEndDrag'] = var4;
            return var1;
case 10:
            var1 = {};
            var3 = var3.scrollHandlerAnimated;
            var1['onScroll'] = var3;
            return var1;
case 8:
            var1 = {};
            var1['onScroll'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();