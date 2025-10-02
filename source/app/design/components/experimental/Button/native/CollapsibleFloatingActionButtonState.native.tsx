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
case 0:
            var7 = arguments[1];
            var1 = arg1;
            var5 = var1.collapseText;
            var _closure2_slot0 = var5;
            var6 = undefined;
            if(!(var7 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = 0;
case 2:
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
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = var1.contentOffset;
                    var3 = var2.y;
                    var2 = var1.contentSize;
                    var4 = var2.height;
                    var1 = var1.layoutMeasurement;
                    var2 = var1.height;
                    var5 = _closure2_slot1;
                    if(!(!(var3 < var5))) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var2 = var3 + var2;
                    if(!(!(var2 > var4))) { _fun0002_ip = 4; continue _fun0002 }
case 7:
                    var4 = _closure2_slot2;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var7 = var3 - var2;
                    var4 = 10;
                    if(!(!(var3 < var4))) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var2 = global;
                    var5 = var2.Math;
                    var2 = var5.abs;
                    var2 = var2.bind(var5)(var7);
                    if(!(var2 > var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var5 = _closure2_slot0;
                    var4 = var5.set;
                    var2 = 1;
                    var6 = 0;
                    if(!(var7 < var6)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var2 = 0;
case 12:
                    var2 = var4.bind(var5)(var2);
                    _fun0002_ip = 10; continue _fun0002;
case 8:
                    var5 = _closure2_slot0;
                    var4 = var5.set;
                    var2 = 0;
                    var2 = var4.bind(var5)(var2);
case 10:
                    var2 = _closure2_slot2;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
case 4:
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