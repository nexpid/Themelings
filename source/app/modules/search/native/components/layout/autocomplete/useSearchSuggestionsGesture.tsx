// app/modules/search/native/components/layout/autocomplete/useSearchSuggestionsGesture.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = {};
    var7 = 'function inBoundingBox_useSearchSuggestionsGestureTsx1(e,coordinates,safeAreaTop){const touch=e.allTouches[0];if(touch==null)return false;return coordinates.left<touch.absoluteX&&touch.absoluteX<coordinates.right&&coordinates.top<touch.absoluteY+safeAreaTop&&touch.absoluteY+safeAreaTop<coordinates.bottom;}';
    var4['code'] = var7;
    var _closure1_slot5 = var4;
    var4 = function() {
        var1 = function inBoundingBox(arg1, arg2, arg3) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = arg2;
                var5 = arg3;
                var1 = arg1;
                var2 = var1.allTouches;
                var1 = 0;
                var4 = var2[var1];
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0001_ip = 110; continue _fun0001 }
 30:
                var6 = var3.left;
                var2 = var4.absoluteX;
                var2 = var6 < var2;
                if(!var2) { _fun0001_ip = 63; continue _fun0001 }
 48:
                var7 = var4.absoluteX;
                var6 = var3.right;
                var2 = var7 < var6;
 63:
                if(!var2) { _fun0001_ip = 85; continue _fun0001 }
 66:
                var7 = var3.top;
                var6 = var4.absoluteY;
                var6 = var6 + var5;
                var2 = var7 < var6;
 85:
                if(!var2) { _fun0001_ip = 107; continue _fun0001 }
 88:
                var4 = var4.absoluteY;
                var4 = var4 + var5;
                var3 = var3.bottom;
                var2 = var4 < var3;
 107:
                var1 = var2;
 110:
                return var1;
            }
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 14606221606756.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot5;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 'function useSearchSuggestionsGestureTsx2(e,manager){const{coordinates,inBoundingBox,safeAreaTop,dismissed}=this.__closure;manager.fail();const _coordinates=coordinates.get();if(_coordinates==null||inBoundingBox(e,_coordinates,safeAreaTop))return;dismissed.set(true);}';
    var4['code'] = var7;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/layout/autocomplete/useSearchSuggestionsGesture.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSearchSuggestionsGesture(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var12 = arg1;
            var _closure2_slot0 = var12;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 2;
            var3 = var9[var2];
            var6 = undefined;
            var8 = var7.bind(var6)(var3);
            var5 = var8.useSharedValue;
            var3 = false;
            var8 = var5.bind(var8)(var3);
            var _closure2_slot1 = var8;
            var2 = var9[var2];
            var5 = var7.bind(var6)(var2);
            var3 = var5.useSharedValue;
            var2 = null;
            var2 = var3.bind(var5)(var2);
            var _closure2_slot2 = var2;
            var11 = _closure1_slot3;
            var10 = var11.useCallback;
            var5 = new Array(1);
            var5[0] = var8;
            var3 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = arg1;
                    var1 = arg2;
                    if(!(var2 !== var1)) { _fun0003_ip = 29; continue _fun0003 }
 10:
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
 29:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var10.bind(var11)(var3, var5);
            var _closure2_slot3 = var3;
            var10 = var11.useEffect;
            var5 = new Array(3);
            var5[0] = var8;
            var5[1] = var12;
            var5[2] = var3;
            var3 = function() {
                var4 = _closure1_slot4;
                var3 = var4.subscribeTextInputValue;
                var2 = _closure2_slot0;
                var1 = _closure2_slot3;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var10.bind(var11)(var3, var5);
            var5 = _closure1_slot1;
            var3 = 3;
            var3 = var9[var3];
            var3 = var5.bind(var6)(var3);
            var3 = var3.bind(var6)();
            var5 = var3.top;
            var3 = 4;
            var3 = var9[var3];
            var6 = var7.bind(var6)(var3);
            var3 = var6.isAndroid;
            var6 = var3.bind(var6)();
            var3 = 0;
            if(!var6) { _fun0002_ip = 199; continue _fun0002 }
 196:
            var3 = var5;
 199:
            var _closure2_slot4 = var3;
            var4 = _closure1_slot3;
            var6 = var4.useMemo;
            var5 = new Array(3);
            var5[0] = var2;
            var5[1] = var3;
            var5[2] = var8;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.Gesture;
                var1 = var2.Manual;
                var3 = var1.bind(var2)();
                var2 = var3.manualActivation;
                var1 = true;
                var3 = var2.bind(var3)(var1);
                var2 = var3.onTouchesDown;
                var1 = function e(arg1, arg2) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = arg2;
                        var1 = var2.fail;
                        var1 = var1.bind(var2)();
                        var3 = _closure2_slot2;
                        var2 = var3.get;
                        var7 = var2.bind(var3)();
                        var2 = null;
                        var2 = var2 == var7;
                        if(var2) { _fun0004_ip = 61; continue _fun0004 }
 38:
                        var6 = _closure1_slot6;
                        var5 = _closure2_slot4;
                        var4 = undefined;
                        var3 = arg1;
                        var2 = var6.bind(var4)(var3, var7, var5);
 61:
                        if(var2) { _fun0004_ip = 80; continue _fun0004 }
 64:
                        var3 = _closure2_slot1;
                        var2 = var3.set;
                        var1 = true;
                        var1 = var2.bind(var3)(var1);
 80:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = {};
                var7 = _closure2_slot2;
                var5['coordinates'] = var7;
                var7 = _closure1_slot6;
                var5['inBoundingBox'] = var7;
                var7 = _closure2_slot4;
                var5['safeAreaTop'] = var7;
                var6 = _closure2_slot1;
                var5['dismissed'] = var6;
                var1['__closure'] = var5;
                var5 = 2369649298113.0;
                var1['__workletHash'] = var5;
                var4 = _closure1_slot7;
                var1['__initData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var4)(var3, var5);
            var _closure2_slot5 = var6;
            var5 = var4.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function(arg1) {
                var3 = _closure2_slot2;
                var2 = var3.set;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var5 = var5.bind(var4)(var2, var3);
            var _closure2_slot6 = var5;
            var7 = var4.useCallback;
            var3 = new Array(1);
            var3[0] = var8;
            var2 = function() {
                var3 = _closure2_slot1;
                var2 = var3.set;
                var1 = true;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var7 = var7.bind(var4)(var2, var3);
            var _closure2_slot7 = var7;
            var3 = var4.useMemo;
            var2 = new Array(4);
            var2[0] = var8;
            var2[1] = var7;
            var2[2] = var6;
            var2[3] = var5;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot5;
                var1['gesture'] = var3;
                var3 = _closure2_slot1;
                var1['dismissed'] = var3;
                var3 = _closure2_slot6;
                var1['onLayoutMeasure'] = var3;
                var2 = _closure2_slot7;
                var1['setDismissed'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useSearchSuggestionsGesture'] = var2;
    return var1;
})();