// app/design/components/experimental/Button/native/CollapsibleFloatingActionButtonState.native.tsx
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = {};
    var7 = 'function CollapsibleFloatingActionButtonStateNativeTsx1({nativeEvent:nativeEvent}){const{initialScrollStart,previousOffset,MINIMUM_SCROLL_DISTANCE_TO_CLOSE,collapseText,SCROLL_OFFSET_THRESHOLD}=this.__closure;if(nativeEvent==null)return;const{contentOffset:{y:currentOffset},contentSize:{height:contentHeight},layoutMeasurement:{height:layoutHeight}}=nativeEvent;if(currentOffset<initialScrollStart)return;const contentHeightAsOffset=currentOffset+layoutHeight;if(contentHeightAsOffset>contentHeight)return;const offsetChanged=currentOffset-previousOffset.get();if(currentOffset<MINIMUM_SCROLL_DISTANCE_TO_CLOSE){collapseText.set(0);}else{if(Math.abs(offsetChanged)>SCROLL_OFFSET_THRESHOLD){collapseText.set(offsetChanged<0?0:1);}}previousOffset.set(currentOffset);}';
    var4['code'] = var7;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/experimental/Button/native/CollapsibleFloatingActionButtonState.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useCollapsibleFloatingActionButtonState() {
        var1 = {};
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useSharedValue;
        var2 = 0;
        var2 = var3.bind(var4)(var2);
        var1['collapseText'] = var2;
        return var1;
    };
    var3['useCollapsibleFloatingActionButtonState'] = var4;
    var2 = function useCollapsibleFloatingActionButtonScroll(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arguments[1];
            var1 = arg1;
            var5 = var1.collapseText;
            var _closure2_slot0 = var5;
            var6 = undefined;
            if(!(var7 === var6)) { _fun0001_ip = 26; continue _fun0001 }
 24:
            var7 = 0;
 26:
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var6;
            var4 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 1;
            var3 = var8[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.useSharedValue;
            var6 = var3.bind(var4)(var7);
            _closure2_slot2 = var6;
            var4 = _closure1_slot2;
            var3 = var4.useCallback;
            var2 = function s(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0002_ip = 174; continue _fun0002 }
 18:
                    var2 = var1.contentOffset;
                    var3 = var2.y;
                    var2 = var1.contentSize;
                    var4 = var2.height;
                    var1 = var1.layoutMeasurement;
                    var2 = var1.height;
                    var5 = _closure2_slot1;
                    if(!(!(var3 < var5))) { _fun0002_ip = 174; continue _fun0002 }
 62:
                    var2 = var3 + var2;
                    if(!(!(var2 > var4))) { _fun0002_ip = 174; continue _fun0002 }
 70:
                    var4 = _closure2_slot2;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var7 = var3 - var2;
                    var4 = 10;
                    if(!(!(var3 < var4))) { _fun0002_ip = 144; continue _fun0002 }
 94:
                    var2 = global;
                    var5 = var2.Math;
                    var2 = var5.abs;
                    var2 = var2.bind(var5)(var7);
                    if(!(var2 > var4)) { _fun0002_ip = 160; continue _fun0002 }
 117:
                    var5 = _closure2_slot0;
                    var4 = var5.set;
                    var2 = 1;
                    var6 = 0;
                    if(!(var7 < var6)) { _fun0002_ip = 137; continue _fun0002 }
 135:
                    var2 = 0;
 137:
                    var2 = var4.bind(var5)(var2);
                    _fun0002_ip = 160; continue _fun0002;
 144:
                    var5 = _closure2_slot0;
                    var4 = var5.set;
                    var2 = 0;
                    var2 = var4.bind(var5)(var2);
 160:
                    var2 = _closure2_slot2;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
 174:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = {};
            var8['initialScrollStart'] = var7;
            var8['previousOffset'] = var6;
            var9 = 10;
            var8['MINIMUM_SCROLL_DISTANCE_TO_CLOSE'] = var9;
            var8['collapseText'] = var5;
            var8['SCROLL_OFFSET_THRESHOLD'] = var9;
            var2['__closure'] = var8;
            var8 = 10435259247914.0;
            var2['__workletHash'] = var8;
            var1 = _closure1_slot3;
            var2['__initData'] = var1;
            var1 = new Array(3);
            var1[0] = var7;
            var1[1] = var6;
            var1[2] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['useCollapsibleFloatingActionButtonScroll'] = var2;
    return var1;
})();