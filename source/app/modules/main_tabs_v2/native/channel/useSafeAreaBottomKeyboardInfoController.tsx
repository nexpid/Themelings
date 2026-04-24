// app/modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var1 = function isKeyboardOverlappingAppEntry(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var6 = undefined;
            var2 = var2.bind(var6)(var1);
            var1 = var2.isAndroid;
            var1 = var1.bind(var2)();
            var1 = !var1;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 3;
            var2 = var7[var2];
            var7 = var5.bind(var6)(var2);
            var5 = var7.getImeInsets;
            var2 = false;
            var5 = var5.bind(var7)(var2, var8);
            var2 = 0;
            var2 = var5 > var2;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 4;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var5 = var4.APP_ENTRY_KEYS;
            var4 = var5.some;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = arg1;
                    var1 = _closure2_slot0;
                    var1 = var5 !== var1;
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getImeInsets;
                    var2 = false;
                    var3 = var3.bind(var4)(var2, var5);
                    var2 = 0;
                    var1 = var3 > var2;
case 6:
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var3 = !var3;
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = null;
case 8:
            var2 = var3;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var8 = "function useSafeAreaBottomKeyboardInfoControllerTsx1(e){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onStart',e.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;if(e.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e.height);}}";
    var5['code'] = var8;
    var _closure1_slot5 = var5;
    var5 = {};
    var8 = "function useSafeAreaBottomKeyboardInfoControllerTsx2(e){const{runOnJS,KeyboardStateDebugging,IS_SYSTEM_KEYBOARD_EXTERNAL,keyboardOverlapsCurrentAppEntry,keyboardOpenedHeight}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onEnd',e.height);if(IS_SYSTEM_KEYBOARD_EXTERNAL)return;if(e.height>0&&keyboardOverlapsCurrentAppEntry.get()){keyboardOpenedHeight.set(e.height);}}";
    var5['code'] = var8;
    var _closure1_slot6 = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useSafeAreaBottomKeyboardInfoController() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var13 = undefined;
            var3 = var3.bind(var13)(var2);
            var2 = var3.useAppEntryKey;
            var5 = var2.bind(var3)();
            var _closure2_slot0 = var5;
            var3 = _closure1_slot4;
            var4 = 0;
            var2 = 0;
            if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 6;
            var3 = var7[var3];
            var3 = var6.bind(var13)(var3);
            var6 = var3.KeyboardController;
            var3 = var6.state;
            var7 = var3.bind(var6)();
            var3 = null;
            var9 = var3 == var7;
            var6 = undefined;
            if(var9) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var6 = var7.height;
case 12:
            var7 = var3 != var6;
            var3 = 0;
            if(!var7) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var3 = var6;
case 14:
            var2 = var3;
case 10:
            var7 = var4 !== var2;
            if(!var7) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var3 = _closure1_slot7;
            var6 = var3.bind(var13)(var5);
            var3 = true;
            var7 = var3 === var6;
case 16:
            var4 = 0;
            if(!var7) { _fun0003_ip = 4; continue _fun0003 }
case 8:
            var4 = var2;
case 4:
            var16 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = 7;
            var2 = var14[var15];
            var3 = var16.bind(var13)(var2);
            var2 = var3.useSharedValue;
            var3 = var2.bind(var3)(var4);
            var _closure2_slot1 = var3;
            var2 = var14[var15];
            var4 = var16.bind(var13)(var2);
            var2 = var4.useSharedValue;
            var4 = var2.bind(var4)(var7);
            var _closure2_slot2 = var4;
            var2 = var14[var15];
            var6 = var16.bind(var13)(var2);
            var2 = var6.useSharedValue;
            var2 = var2.bind(var6)(var7);
            var _closure2_slot3 = var2;
            var9 = _closure1_slot3;
            var7 = var9.useEffect;
            var6 = new Array(4);
            var6[0] = var5;
            var6[1] = var4;
            var6[2] = var3;
            var6[3] = var2;
            var5 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = function handleKeyboardShow(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var3 = arg1;
                            var1 = 0;
                            if(!(!(var3 <= var1))) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                            var5 = _closure1_slot7;
                            var4 = _closure2_slot0;
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var4 = null;
                            if(!(var4 != var2)) { _fun0005_ip = 3; continue _fun0005 }
case 20:
                            var5 = _closure2_slot3;
                            var4 = var5.set;
                            var4 = var4.bind(var5)(var2);
case 3:
                            var6 = false;
                            if(!(var6 === var2)) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                            var5 = _closure2_slot2;
                            var4 = var5.set;
                            var4 = var4.bind(var5)(var6);
                            _fun0005_ip = 18; continue _fun0005;
case 21:
                            var5 = true;
                            if(!(var5 === var2)) { _fun0005_ip = 18; continue _fun0005 }
case 23:
                            var4 = _closure2_slot2;
                            var2 = var4.set;
                            var2 = var2.bind(var4)(var5);
                            var2 = _closure2_slot1;
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var3);
case 18:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure3_slot5 = var2;
                    var3 = _closure1_slot4;
                    if(var3) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var3 = false;
                    var _closure3_slot0 = var3;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
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
                        var1 = 8;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.keyboardControllerKeyboardWillShow;
                        var3 = var2.height;
                        var3 = var4.bind(var5)(var3);
                        var4 = true;
                        _closure3_slot0 = var4;
                        var3 = _closure3_slot5;
                        var2 = var2.height;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var6 = var8.bind(var9)(var7, var6);
                    var _closure3_slot1 = var6;
                    var6 = var5[var2];
                    var6 = var4.bind(var3)(var6);
                    var9 = var6.KeyboardEvents;
                    var8 = var9.addListener;
                    var7 = 'keyboardDidShow';
                    var6 = function(arg1) {
                        var2 = arg1;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 8;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.keyboardControllerKeyboardDidShow;
                        var3 = var2.height;
                        var3 = var4.bind(var5)(var3);
                        var4 = false;
                        _closure3_slot0 = var4;
                        var3 = _closure3_slot5;
                        var2 = var2.height;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var6 = var8.bind(var9)(var7, var6);
                    var _closure3_slot2 = var6;
                    var6 = var5[var2];
                    var6 = var4.bind(var3)(var6);
                    var9 = var6.KeyboardEvents;
                    var8 = var9.addListener;
                    var7 = 'keyboardWillHide';
                    var6 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 8;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.keyboardControllerKeyboardWillHide;
                            var2 = var2.bind(var3)();
                            var4 = _closure2_slot3;
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            if(!var3) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                            var3 = _closure3_slot0;
                            if(var3) { _fun0006_ip = 26; continue _fun0006 }
case 28:
                            var4 = _closure2_slot2;
                            var3 = var4.set;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
case 26:
                            return var1;
                        }
                    };
                    var6 = var8.bind(var9)(var7, var6);
                    var _closure3_slot3 = var6;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.KeyboardEvents;
                    var4 = var5.addListener;
                    var3 = 'keyboardDidHide';
                    var2 = function() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 8;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.keyboardControllerKeyboardDidHide;
                            var2 = var2.bind(var3)();
                            var4 = _closure2_slot3;
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            if(!var3) { _fun0007_ip = 29; continue _fun0007 }
case 27:
                            var4 = false;
                            _closure3_slot0 = var4;
                            var3 = _closure2_slot2;
                            var2 = var3.set;
                            var2 = var2.bind(var3)(var4);
case 29:
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    var _closure3_slot4 = var2;
                    var1 = function() {
                        var3 = _closure3_slot1;
                        var2 = var3.remove;
                        var2 = var2.bind(var3)();
                        var3 = _closure3_slot2;
                        var2 = var3.remove;
                        var2 = var2.bind(var3)();
                        var3 = _closure3_slot3;
                        var2 = var3.remove;
                        var2 = var2.bind(var3)();
                        var2 = _closure3_slot4;
                        var1 = var2.remove;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
case 24:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var7.bind(var9)(var5, var6);
            var5 = 6;
            var5 = var14[var5];
            var7 = var16.bind(var13)(var5);
            var6 = var7.useKeyboardHandler;
            var5 = {};
            var9 = function b(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = arg1;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 7;
                    var4 = var8[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.runOnJS;
                    var7 = _closure1_slot1;
                    var4 = 8;
                    var4 = var8[var4];
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.keyboardControllerWorkletEvent;
                    var6 = var5.bind(var6)(var4);
                    var5 = var2.height;
                    var4 = 'onStart';
                    var4 = var6.bind(var1)(var4, var5);
                    var3 = _closure1_slot4;
                    if(var3) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                    var4 = var2.height;
                    var3 = 0;
                    var3 = var4 > var3;
                    if(!var3) { _fun0008_ip = 15; continue _fun0008 }
case 32:
                    var5 = _closure2_slot3;
                    var4 = var5.get;
                    var3 = var4.bind(var5)();
case 15:
                    if(!var3) { _fun0008_ip = 30; continue _fun0008 }
case 14:
                    var4 = _closure2_slot1;
                    var3 = var4.set;
                    var2 = var2.height;
                    var2 = var3.bind(var4)(var2);
case 30:
                    return var1;
                }
            };
            var17 = {};
            var10 = var14[var15];
            var10 = var16.bind(var13)(var10);
            var10 = var10.runOnJS;
            var17['runOnJS'] = var10;
            var12 = _closure1_slot1;
            var11 = 8;
            var10 = var14[var11];
            var10 = var12.bind(var13)(var10);
            var17['KeyboardStateDebugging'] = var10;
            var10 = _closure1_slot4;
            var17['IS_SYSTEM_KEYBOARD_EXTERNAL'] = var10;
            var17['keyboardOverlapsCurrentAppEntry'] = var2;
            var17['keyboardOpenedHeight'] = var3;
            var9['__closure'] = var17;
            var17 = 11726427166555.0;
            var9['__workletHash'] = var17;
            var17 = _closure1_slot5;
            var9['__initData'] = var17;
            var5['onStart'] = var9;
            var1 = function y(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = arg1;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 7;
                    var4 = var8[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.runOnJS;
                    var7 = _closure1_slot1;
                    var4 = 8;
                    var4 = var8[var4];
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.keyboardControllerWorkletEvent;
                    var6 = var5.bind(var6)(var4);
                    var5 = var2.height;
                    var4 = 'onEnd';
                    var4 = var6.bind(var1)(var4, var5);
                    var3 = _closure1_slot4;
                    if(var3) { _fun0009_ip = 30; continue _fun0009 }
case 31:
                    var4 = var2.height;
                    var3 = 0;
                    var3 = var4 > var3;
                    if(!var3) { _fun0009_ip = 15; continue _fun0009 }
case 32:
                    var5 = _closure2_slot3;
                    var4 = var5.get;
                    var3 = var4.bind(var5)();
case 15:
                    if(!var3) { _fun0009_ip = 30; continue _fun0009 }
case 14:
                    var4 = _closure2_slot1;
                    var3 = var4.set;
                    var2 = var2.height;
                    var2 = var3.bind(var4)(var2);
case 30:
                    return var1;
                }
            };
            var9 = {};
            var15 = var14[var15];
            var15 = var16.bind(var13)(var15);
            var15 = var15.runOnJS;
            var9['runOnJS'] = var15;
            var11 = var14[var11];
            var11 = var12.bind(var13)(var11);
            var9['KeyboardStateDebugging'] = var11;
            var9['IS_SYSTEM_KEYBOARD_EXTERNAL'] = var10;
            var9['keyboardOverlapsCurrentAppEntry'] = var2;
            var9['keyboardOpenedHeight'] = var3;
            var1['__closure'] = var9;
            var9 = 15110866363831.0;
            var1['__workletHash'] = var9;
            var8 = _closure1_slot6;
            var1['__initData'] = var8;
            var5['onEnd'] = var1;
            var1 = new Array(0);
            var1 = var6.bind(var7)(var5, var1);
            var1 = {};
            var1['keyboardOpenOrOpening'] = var4;
            var1['keyboardOpenedHeight'] = var3;
            var1['keyboardOverlapsCurrentAppEntry'] = var2;
            return var1;
        }
    };
    var3['default'] = var4;
    var3['IS_SYSTEM_KEYBOARD_EXTERNAL'] = var2;
    return var1;
})();