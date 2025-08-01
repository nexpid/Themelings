// app/modules/voice_panel/native/hooks/useTapGestures.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = {};
    var7 = "function useTapGesturesTsx1(){const{runOnJS,handleEvent}=this.__closure;return runOnJS(handleEvent)('double');}";
    var4['code'] = var7;
    var _closure1_slot4 = var4;
    var4 = {};
    var7 = 'function useTapGesturesTsx2(event,manager){const{isFocusedVideoZoomed}=this.__closure;if(isFocusedVideoZoomed.get()){manager.fail();}}';
    var4['code'] = var7;
    var _closure1_slot5 = var4;
    var4 = {};
    var7 = "function useTapGesturesTsx3(){const{runOnJS,handleEvent}=this.__closure;return runOnJS(handleEvent)('single');}";
    var4['code'] = var7;
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = "function useTapGesturesTsx4(){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,handleEvent}=this.__closure;runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);runOnJS(handleEvent)('long');}";
    var4['code'] = var7;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/hooks/useTapGestures.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTapGestures(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot3;
        var5 = var4.useContext;
        var7 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 1;
        var6 = var6[var3];
        var3 = undefined;
        var3 = var7.bind(var3)(var6);
        var3 = var5.bind(var4)(var3);
        var5 = var3.isFocusedVideoZoomed;
        var _closure2_slot1 = var5;
        var3 = var4.useRef;
        var3 = var3.bind(var4)(var2);
        var _closure2_slot2 = var3;
        var3 = var2.onSingleTap;
        var6 = null;
        var9 = var6 != var3;
        var _closure2_slot3 = var9;
        var3 = var2.onDoubleTap;
        var8 = var6 != var3;
        var _closure2_slot4 = var8;
        var3 = var2.onLongPress;
        var7 = var6 != var3;
        var _closure2_slot5 = var7;
        var6 = var2.gesturesEnabled;
        var _closure2_slot6 = var6;
        var3 = var4.useLayoutEffect;
        var2 = function() {
            var2 = _closure2_slot2;
            var1 = _closure2_slot0;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var3 = var4.useMemo;
        var2 = new Array(5);
        var2[0] = var9;
        var2[1] = var8;
        var2[2] = var7;
        var2[3] = var6;
        var2[4] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var10 = function handleEvent(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var2 = arg1;
                        var1 = 'single';
                        if(!(var1 !== var2)) { _fun0002_ip = 120; continue _fun0002 }
 11:
                        var1 = 'double';
                        if(!(var1 !== var2)) { _fun0002_ip = 75; continue _fun0002 }
 19:
                        var1 = 'long';
                        if(!(var1 === var2)) { _fun0002_ip = 163; continue _fun0002 }
 30:
                        var2 = _closure2_slot2;
                        var2 = var2.current;
                        var3 = var2.onLongPress;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 163; continue _fun0002 }
 54:
                        var1 = _closure2_slot2;
                        var2 = var1.current;
                        var1 = var2.onLongPress;
                        var1 = var1.bind(var2)();
                        _fun0002_ip = 163; continue _fun0002;
 75:
                        var2 = _closure2_slot2;
                        var2 = var2.current;
                        var3 = var2.onDoubleTap;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 163; continue _fun0002 }
 99:
                        var1 = _closure2_slot2;
                        var2 = var1.current;
                        var1 = var2.onDoubleTap;
                        var1 = var1.bind(var2)();
                        _fun0002_ip = 163; continue _fun0002;
 120:
                        var2 = _closure2_slot2;
                        var2 = var2.current;
                        var3 = var2.onSingleTap;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 163; continue _fun0002 }
 144:
                        var1 = _closure2_slot2;
                        var2 = var1.current;
                        var1 = var2.onSingleTap;
                        var1 = var1.bind(var2)();
 163:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot0 = var10;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var9 = 2;
                var4 = var2[var9];
                var13 = undefined;
                var4 = var3.bind(var13)(var4);
                var5 = var4.Gesture;
                var4 = var5.Exclusive;
                var2 = var2[var9];
                var2 = var3.bind(var13)(var2);
                var3 = var2.Gesture;
                var2 = var3.Tap;
                var6 = var2.bind(var3)();
                var3 = var6.enabled;
                var2 = _closure2_slot6;
                if(!var2) { _fun0001_ip = 94; continue _fun0001 }
 90:
                var2 = _closure2_slot4;
 94:
                var3 = var3.bind(var6)(var2);
                var2 = var3.maxDistance;
                var7 = 30;
                var3 = var2.bind(var3)(var7);
                var2 = var3.numberOfTaps;
                var6 = var2.bind(var3)(var9);
                var3 = var6.onTouchesDown;
                var2 = function O(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = arg2;
                        var3 = _closure2_slot1;
                        var1 = var3.get;
                        var1 = var1.bind(var3)();
                        if(!var1) { _fun0003_ip = 32; continue _fun0003 }
 22:
                        var1 = var2.fail;
                        var1 = var1.bind(var2)();
 32:
                        var1 = undefined;
                        return var1;
                    }
                };
                var11 = {};
                var14 = _closure2_slot1;
                var11['isFocusedVideoZoomed'] = var14;
                var2['__closure'] = var11;
                var11 = 3236469126950.0;
                var2['__workletHash'] = var11;
                var11 = _closure1_slot5;
                var2['__initData'] = var11;
                var15 = var3.bind(var6)(var2);
                var14 = var15.onStart;
                var3 = function h() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 3;
                    var1 = var3[var1];
                    var3 = undefined;
                    var4 = var2.bind(var3)(var1);
                    var2 = var4.runOnJS;
                    var1 = _closure3_slot0;
                    var2 = var2.bind(var4)(var1);
                    var1 = 'double';
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var16 = {};
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var11 = 3;
                var17 = var2[var11];
                var17 = var6.bind(var13)(var17);
                var17 = var17.runOnJS;
                var16['runOnJS'] = var17;
                var16['handleEvent'] = var10;
                var3['__closure'] = var16;
                var16 = 13571114432746.0;
                var3['__workletHash'] = var16;
                var16 = _closure1_slot4;
                var3['__initData'] = var16;
                var3 = var14.bind(var15)(var3);
                var2 = var2[var9];
                var2 = var6.bind(var13)(var2);
                var6 = var2.Gesture;
                var2 = var6.Tap;
                var14 = var2.bind(var6)();
                var6 = var14.enabled;
                var2 = _closure2_slot6;
                if(!var2) { _fun0001_ip = 312; continue _fun0001 }
 308:
                var2 = _closure2_slot3;
 312:
                var6 = var6.bind(var14)(var2);
                var2 = var6.maxDistance;
                var15 = var2.bind(var6)(var7);
                var14 = var15.onStart;
                var2 = function c() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 3;
                    var1 = var3[var1];
                    var3 = undefined;
                    var4 = var2.bind(var3)(var1);
                    var2 = var4.runOnJS;
                    var1 = _closure3_slot0;
                    var2 = var2.bind(var4)(var1);
                    var1 = 'single';
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var16 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var17 = var6[var11];
                var17 = var7.bind(var13)(var17);
                var17 = var17.runOnJS;
                var16['runOnJS'] = var17;
                var16['handleEvent'] = var10;
                var2['__closure'] = var16;
                var16 = 14109132753191.0;
                var2['__workletHash'] = var16;
                var16 = _closure1_slot6;
                var2['__initData'] = var16;
                var2 = var14.bind(var15)(var2);
                var6 = var6[var9];
                var6 = var7.bind(var13)(var6);
                var7 = var6.Gesture;
                var6 = var7.LongPress;
                var9 = var6.bind(var7)();
                var7 = var9.enabled;
                var6 = _closure2_slot6;
                if(!var6) { _fun0001_ip = 452; continue _fun0001 }
 448:
                var6 = _closure2_slot5;
 452:
                var7 = var7.bind(var9)(var6);
                var6 = var7.onStart;
                var1 = function n() {
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 3;
                    var5 = var4[var2];
                    var1 = undefined;
                    var8 = var3.bind(var1)(var5);
                    var7 = var8.runOnJS;
                    var5 = 4;
                    var6 = var4[var5];
                    var6 = var3.bind(var1)(var6);
                    var6 = var6.triggerHapticFeedback;
                    var6 = var7.bind(var8)(var6);
                    var5 = var4[var5];
                    var5 = var3.bind(var1)(var5);
                    var5 = var5.HapticFeedbackTypes;
                    var5 = var5.IMPACT_MEDIUM;
                    var5 = var6.bind(var1)(var5);
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure3_slot0;
                    var3 = var3.bind(var4)(var2);
                    var2 = 'long';
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var9 = {};
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = var14[var11];
                var11 = var12.bind(var13)(var11);
                var11 = var11.runOnJS;
                var9['runOnJS'] = var11;
                var11 = 4;
                var15 = var14[var11];
                var15 = var12.bind(var13)(var15);
                var15 = var15.triggerHapticFeedback;
                var9['triggerHapticFeedback'] = var15;
                var11 = var14[var11];
                var11 = var12.bind(var13)(var11);
                var11 = var11.HapticFeedbackTypes;
                var9['HapticFeedbackTypes'] = var11;
                var9['handleEvent'] = var10;
                var1['__closure'] = var9;
                var9 = 1947700378974.0;
                var1['__workletHash'] = var9;
                var8 = _closure1_slot7;
                var1['__initData'] = var8;
                var1 = var6.bind(var7)(var1);
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();