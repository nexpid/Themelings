// app/modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var5 = var6.bind(var1)(var2);
    var2 = var5.isMetaQuest;
    var2 = var2.bind(var5)();
    var _closure1_slot4 = var2;
    var5 = {};
    var8 = "function useSafeAreaBottomKeyboardInfoControllerTsx1(e){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOpenedHeight,keyboardOpenOrOpening}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onStart',e.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;if(e.height!==0){keyboardOpenedHeight.set(e.height);}keyboardOpenOrOpening.set(e.height!==0);}";
    var5['code'] = var8;
    var _closure1_slot5 = var5;
    var5 = {};
    var8 = "function useSafeAreaBottomKeyboardInfoControllerTsx2(e){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOpenOrOpening}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onEnd',e.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;keyboardOpenOrOpening.set(e.height!==0);}";
    var5['code'] = var8;
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useSafeAreaBottomKeyboardInfoController() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot4;
            var6 = 0;
            var3 = 0;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 2;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var5 = var2.KeyboardController;
            var2 = var5.state;
            var5 = var2.bind(var5)();
            var2 = null;
            var8 = var2 == var5;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var5.height;
case 4:
            var5 = var2 != var4;
            var2 = 0;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var4;
case 6:
            var3 = var2;
case 2:
            var15 = _closure1_slot0;
            var13 = _closure1_slot2;
            var14 = 3;
            var2 = var13[var14];
            var12 = undefined;
            var4 = var15.bind(var12)(var2);
            var2 = var4.useSharedValue;
            var2 = var2.bind(var4)(var3);
            var _closure2_slot0 = var2;
            var4 = var13[var14];
            var5 = var15.bind(var12)(var4);
            var4 = var5.useSharedValue;
            var3 = var6 !== var3;
            var3 = var4.bind(var5)(var3);
            var _closure2_slot1 = var3;
            var8 = _closure1_slot3;
            var6 = var8.useEffect;
            var5 = new Array(2);
            var5[0] = var3;
            var5[1] = var2;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot4;
                    if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
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
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var6.bind(var8)(var4, var5);
            var4 = 2;
            var4 = var13[var4];
            var6 = var15.bind(var12)(var4);
            var5 = var6.useKeyboardHandler;
            var4 = {};
            var8 = function s(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 3;
                    var4 = var8[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.runOnJS;
                    var7 = _closure1_slot1;
                    var4 = 4;
                    var4 = var8[var4];
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.keyboardControllerWorkletEvent;
                    var6 = var5.bind(var6)(var4);
                    var5 = var2.height;
                    var4 = 'onStart';
                    var4 = var6.bind(var1)(var4, var5);
                    var3 = _closure1_slot4;
                    if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 2:
                    var3 = var2.height;
                    var5 = 0;
                    if(!(var5 !== var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var6 = _closure2_slot0;
                    var4 = var6.set;
                    var3 = var2.height;
                    var3 = var4.bind(var6)(var3);
case 11:
                    var4 = _closure2_slot1;
                    var3 = var4.set;
                    var2 = var2.height;
                    var2 = var5 !== var2;
                    var2 = var3.bind(var4)(var2);
case 10:
                    return var1;
                }
            };
            var16 = {};
            var9 = var13[var14];
            var9 = var15.bind(var12)(var9);
            var9 = var9.runOnJS;
            var16['runOnJS'] = var9;
            var11 = _closure1_slot1;
            var10 = 4;
            var9 = var13[var10];
            var9 = var11.bind(var12)(var9);
            var16['KeyboardStateDebugging'] = var9;
            var9 = _closure1_slot4;
            var16['IS_SYSTEM_KEYBOARD_EXTERNAL'] = var9;
            var16['keyboardOpenedHeight'] = var2;
            var16['keyboardOpenOrOpening'] = var3;
            var8['__closure'] = var16;
            var16 = 145566412462.0;
            var8['__workletHash'] = var16;
            var16 = _closure1_slot5;
            var8['__initData'] = var16;
            var4['onStart'] = var8;
            var1 = function h(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 3;
                    var4 = var8[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.runOnJS;
                    var7 = _closure1_slot1;
                    var4 = 4;
                    var4 = var8[var4];
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.keyboardControllerWorkletEvent;
                    var6 = var5.bind(var6)(var4);
                    var5 = var2.height;
                    var4 = 'onEnd';
                    var4 = var6.bind(var1)(var4, var5);
                    var3 = _closure1_slot4;
                    if(var3) { _fun0004_ip = 13; continue _fun0004 }
case 2:
                    var4 = _closure2_slot1;
                    var3 = var4.set;
                    var5 = var2.height;
                    var2 = 0;
                    var2 = var2 !== var5;
                    var2 = var3.bind(var4)(var2);
case 13:
                    return var1;
                }
            };
            var8 = {};
            var14 = var13[var14];
            var14 = var15.bind(var12)(var14);
            var14 = var14.runOnJS;
            var8['runOnJS'] = var14;
            var10 = var13[var10];
            var10 = var11.bind(var12)(var10);
            var8['KeyboardStateDebugging'] = var10;
            var8['IS_SYSTEM_KEYBOARD_EXTERNAL'] = var9;
            var8['keyboardOpenOrOpening'] = var3;
            var1['__closure'] = var8;
            var8 = 13092682123873.0;
            var1['__workletHash'] = var8;
            var7 = _closure1_slot6;
            var1['__initData'] = var7;
            var4['onEnd'] = var1;
            var1 = new Array(0);
            var1 = var5.bind(var6)(var4, var1);
            var1 = {};
            var1['keyboardOpenOrOpening'] = var3;
            var1['keyboardOpenedHeight'] = var2;
            return var1;
        }
    };
    var3['default'] = var4;
    var3['IS_SYSTEM_KEYBOARD_EXTERNAL'] = var2;
    return var1;
})();