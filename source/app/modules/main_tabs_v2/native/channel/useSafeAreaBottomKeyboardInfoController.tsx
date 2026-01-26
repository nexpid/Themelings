// app/modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Keyboard;
    var _closure1_slot4 = var4;
    var4 = {};
    var7 = "function useSafeAreaBottomKeyboardInfoControllerTsx1(e){const{runOnJS,KeyboardStateDebugging,keyboardOpenedHeight,keyboardOpenOrOpening}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onStart',e.height);if(e.height!==0){keyboardOpenedHeight.set(e.height);}keyboardOpenOrOpening.set(e.height!==0);}";
    var4['code'] = var7;
    var _closure1_slot5 = var4;
    var4 = {};
    var7 = "function useSafeAreaBottomKeyboardInfoControllerTsx2(e){const{runOnJS,KeyboardStateDebugging,keyboardOpenOrOpening}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onEnd',e.height);keyboardOpenOrOpening.set(e.height!==0);}";
    var4['code'] = var7;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSafeAreaBottomKeyboardInfoController() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = 2;
            var2 = var2[var4];
            var13 = undefined;
            var2 = var3.bind(var13)(var2);
            var3 = var2.KeyboardController;
            var2 = var3.state;
            var5 = var2.bind(var3)();
            var3 = null;
            var6 = var3 == var5;
            var2 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var5.height;
case 2:
            var5 = var3 != var2;
            var7 = 0;
            var3 = 0;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2;
case 4:
            var16 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = 3;
            var2 = var14[var15];
            var5 = var16.bind(var13)(var2);
            var2 = var5.useSharedValue;
            var2 = var2.bind(var5)(var3);
            var _closure2_slot0 = var2;
            var5 = var14[var15];
            var6 = var16.bind(var13)(var5);
            var5 = var6.useSharedValue;
            var3 = var7 !== var3;
            var3 = var5.bind(var6)(var3);
            var _closure2_slot1 = var3;
            var6 = _closure1_slot3;
            var8 = var6.useEffect;
            var7 = new Array(2);
            var7[0] = var3;
            var7[1] = var2;
            var5 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 2;
                var6 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var9 = var6.KeyboardEvents;
                var8 = var9.addListener;
                var7 = 'keyboardWillShow';
                var6 = function(arg1) {
                    var2 = arg1;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.keyboardControllerKeyboardWillShow;
                    var3 = var2.height;
                    var3 = var4.bind(var5)(var3);
                    var6 = _closure2_slot1;
                    var5 = var6.set;
                    var4 = true;
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure2_slot0;
                    var3 = var4.set;
                    var2 = var2.height;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var6 = var8.bind(var9)(var7, var6);
                var _closure3_slot0 = var6;
                var6 = var5[var2];
                var6 = var4.bind(var3)(var6);
                var9 = var6.KeyboardEvents;
                var8 = var9.addListener;
                var7 = 'keyboardDidShow';
                var6 = function(arg1) {
                    var2 = arg1;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.keyboardControllerKeyboardDidShow;
                    var3 = var2.height;
                    var3 = var4.bind(var5)(var3);
                    var6 = _closure2_slot1;
                    var5 = var6.set;
                    var4 = true;
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure2_slot0;
                    var3 = var4.set;
                    var2 = var2.height;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var6 = var8.bind(var9)(var7, var6);
                var _closure3_slot1 = var6;
                var6 = var5[var2];
                var6 = var4.bind(var3)(var6);
                var9 = var6.KeyboardEvents;
                var8 = var9.addListener;
                var7 = 'keyboardWillHide';
                var6 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.keyboardControllerKeyboardWillHide;
                    var2 = var2.bind(var3)();
                    var4 = _closure2_slot1;
                    var3 = var4.set;
                    var2 = false;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var6 = var8.bind(var9)(var7, var6);
                var _closure3_slot2 = var6;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var5 = var2.KeyboardEvents;
                var4 = var5.addListener;
                var3 = 'keyboardDidHide';
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.keyboardControllerKeyboardDidHide;
                    var2 = var2.bind(var3)();
                    var4 = _closure2_slot1;
                    var3 = var4.set;
                    var2 = false;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot3 = var2;
                var1 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.remove;
                    var2 = var2.bind(var3)();
                    var3 = _closure3_slot1;
                    var2 = var3.remove;
                    var2 = var2.bind(var3)();
                    var3 = _closure3_slot2;
                    var2 = var3.remove;
                    var2 = var2.bind(var3)();
                    var2 = _closure3_slot3;
                    var1 = var2.remove;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var5 = var8.bind(var6)(var5, var7);
            var4 = var14[var4];
            var8 = var16.bind(var13)(var4);
            var7 = var8.useKeyboardHandler;
            var5 = {};
            var4 = function u(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 3;
                    var4 = var7[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.runOnJS;
                    var6 = _closure1_slot1;
                    var3 = 4;
                    var3 = var7[var3];
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.keyboardControllerWorkletEvent;
                    var5 = var4.bind(var5)(var3);
                    var4 = var2.height;
                    var3 = 'onStart';
                    var3 = var5.bind(var1)(var3, var4);
                    var3 = var2.height;
                    var5 = 0;
                    if(!(var5 !== var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var6 = _closure2_slot0;
                    var4 = var6.set;
                    var3 = var2.height;
                    var3 = var4.bind(var6)(var3);
case 6:
                    var4 = _closure2_slot1;
                    var3 = var4.set;
                    var2 = var2.height;
                    var2 = var5 !== var2;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var10 = {};
            var11 = var14[var15];
            var11 = var16.bind(var13)(var11);
            var11 = var11.runOnJS;
            var10['runOnJS'] = var11;
            var12 = _closure1_slot1;
            var11 = 4;
            var17 = var14[var11];
            var17 = var12.bind(var13)(var17);
            var10['KeyboardStateDebugging'] = var17;
            var10['keyboardOpenedHeight'] = var2;
            var10['keyboardOpenOrOpening'] = var3;
            var4['__closure'] = var10;
            var10 = 1979487876093.0;
            var4['__workletHash'] = var10;
            var10 = _closure1_slot5;
            var4['__initData'] = var10;
            var5['onStart'] = var4;
            var4 = function b(arg1) {
                var2 = arg1;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 3;
                var4 = var7[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.runOnJS;
                var6 = _closure1_slot1;
                var3 = 4;
                var3 = var7[var3];
                var3 = var6.bind(var1)(var3);
                var3 = var3.keyboardControllerWorkletEvent;
                var5 = var4.bind(var5)(var3);
                var4 = var2.height;
                var3 = 'onEnd';
                var3 = var5.bind(var1)(var3, var4);
                var4 = _closure2_slot1;
                var3 = var4.set;
                var5 = var2.height;
                var2 = 0;
                var2 = var2 !== var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var10 = {};
            var15 = var14[var15];
            var15 = var16.bind(var13)(var15);
            var15 = var15.runOnJS;
            var10['runOnJS'] = var15;
            var11 = var14[var11];
            var11 = var12.bind(var13)(var11);
            var10['KeyboardStateDebugging'] = var11;
            var10['keyboardOpenOrOpening'] = var3;
            var4['__closure'] = var10;
            var10 = 14994447043346.0;
            var4['__workletHash'] = var10;
            var9 = _closure1_slot6;
            var4['__initData'] = var9;
            var5['onEnd'] = var4;
            var4 = new Array(0);
            var4 = var7.bind(var8)(var5, var4);
            var7 = var6.useEffect;
            var5 = new Array(2);
            var5[0] = var3;
            var5[1] = var2;
            var4 = function() {
                var2 = global;
                var5 = var2.setInterval;
                var4 = undefined;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2);
                        var4 = var2.KeyboardController;
                        var2 = var4.state;
                        var4 = var2.bind(var4)();
                        var2 = null;
                        var6 = var2 == var4;
                        var5 = undefined;
                        if(var6) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var5 = var4.height;
case 8:
                        var6 = var2 != var5;
                        var4 = 0;
                        var2 = 0;
                        if(!var6) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var2 = var5;
case 10:
                        var7 = var4 !== var2;
                        var5 = _closure2_slot1;
                        var4 = var5.get;
                        var4 = var4.bind(var5)();
                        if(!(var7 !== var4)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 4;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.keyboardControllerPeriodicHealthCheck;
                        var8 = _closure2_slot1;
                        var4 = var8.get;
                        var4 = var4.bind(var8)();
                        var4 = var5.bind(var6)(var7, var4);
case 12:
                        var5 = _closure1_slot4;
                        var4 = var5.isVisible;
                        var5 = var4.bind(var5)();
                        var6 = _closure2_slot1;
                        var4 = var6.get;
                        var4 = var4.bind(var6)();
                        if(!(var5 !== var4)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 4;
                        var3 = var6[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.reactNativePeriodicHealthCheck;
                        var6 = _closure2_slot1;
                        var2 = var6.get;
                        var2 = var2.bind(var6)();
                        var2 = var3.bind(var4)(var5, var2);
case 14:
                        return var1;
                    }
                };
                var2 = 5000;
                var2 = var5.bind(var4)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearInterval;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var4 = var7.bind(var6)(var4, var5);
            var5 = var6.useEffect;
            var4 = function() {
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 4;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.keyboardControllerMountEvent;
                var4 = 'mount';
                var3 = 'chatInputHook';
                var3 = var5.bind(var6)(var4, var3);
                var5 = _closure1_slot4;
                var4 = var5.addListener;
                var3 = 'keyboardDidShow';
                var2 = function(arg1) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.reactNativeKeyboardDidShow;
                    var2 = arg1;
                    var2 = var2.endCoordinates;
                    var3 = var2.height;
                    var2 = 'chatInputHook';
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot0 = var2;
                var4 = var5.addListener;
                var3 = 'keyboardDidHide';
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.reactNativeKeyboardDidHide;
                    var2 = 'chatInputHook';
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot1 = var2;
                var1 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.remove;
                    var2 = var2.bind(var3)();
                    var2 = _closure3_slot1;
                    var1 = var2.remove;
                    var1 = var1.bind(var2)();
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.keyboardControllerMountEvent;
                    var3 = 'unmount';
                    var2 = 'chatInputHook';
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                return var1;
            };
            var1 = new Array(0);
            var1 = var5.bind(var6)(var4, var1);
            var1 = {};
            var1['keyboardOpenOrOpening'] = var3;
            var1['keyboardOpenedHeight'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();