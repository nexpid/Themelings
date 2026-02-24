// app/modules/keyboard/KeyboardStateDebugging.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var7 = var6[var1];
    var2 = metroImportDefault;
    var1 = undefined;
    var8 = var2.bind(var1)(var7);
    var2 = var8.prototype;
    var7 = Object.create(var2, {constructor: {value: var8}});
    var11 = 'KeyboardStateDebugging';
    var12 = var7;
    var2 = new var12[var8](var11, var10);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot2 = var2;
    var2 = {};
    var7 = function channelSafeAreaBottomLayoutHeightChanged(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot2;
            var4 = var5.info;
            var3 = {};
            var2 = arg1;
            var3['layoutHeight'] = var2;
            var2 = 'ChannelSafeAreaBottom layout height changed.';
            var2 = var4.bind(var5)(var2, var3);
case 2:
            return var1;
        }
    };
    var2['channelSafeAreaBottomLayoutHeightChanged'] = var7;
    var7 = function channelSafeAreaBottomLayoutHeightMismatch(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 3:
            var5 = _closure1_slot2;
            var4 = var5.warn;
            var3 = {};
            var2 = arg1;
            var3['layoutHeight'] = var2;
            var2 = arg2;
            var3['reportedKeyboardHeight'] = var2;
            var2 = 'ChannelSafeAreaBottom layout height mismatch.';
            var2 = var4.bind(var5)(var2, var3);
case 4:
            return var1;
        }
    };
    var2['channelSafeAreaBottomLayoutHeightMismatch'] = var7;
    var7 = function keyboardControllerKeyboardWillShow(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            if(var3) { _fun0003_ip = 5; continue _fun0003 }
case 3:
            var5 = _closure1_slot2;
            var4 = var5.info;
            var3 = {};
            var2 = arg1;
            var3['height'] = var2;
            var2 = 'KeyboardController keyboardWillShow.';
            var2 = var4.bind(var5)(var2, var3);
case 5:
            return var1;
        }
    };
    var2['keyboardControllerKeyboardWillShow'] = var7;
    var7 = function keyboardControllerKeyboardDidShow(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0004_ip = 6; continue _fun0004 }
case 7:
            var2 = false;
case 6:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 1;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.isIOS;
            var4 = var4.bind(var5)();
            if(var4) { _fun0004_ip = 8; continue _fun0004 }
case 9:
            var5 = _closure1_slot2;
            var4 = var5.info;
            var3 = {};
            var6 = arg1;
            var3['height'] = var6;
            var3['rootProvider'] = var2;
            var2 = 'KeyboardController keyboardDidShow.';
            var2 = var4.bind(var5)(var2, var3);
case 8:
            return var1;
        }
    };
    var2['keyboardControllerKeyboardDidShow'] = var7;
    var7 = function keyboardControllerWorkletEvent(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arguments[2];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0005_ip = 6; continue _fun0005 }
case 7:
            var6 = false;
case 6:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 1;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            if(var3) { _fun0005_ip = 10; continue _fun0005 }
case 9:
            var5 = _closure1_slot2;
            var4 = var5.info;
            var2 = global;
            var2 = var2.HermesInternal;
            var8 = var2.concat;
            var7 = 'KeyboardController worklet ';
            var3 = arg1;
            var2 = '.';
            var3 = var8.bind(var7)(var3, var2);
            var2 = {};
            var7 = arg2;
            var2['height'] = var7;
            var2['rootProvider'] = var6;
            var2 = var4.bind(var5)(var3, var2);
case 10:
            return var1;
        }
    };
    var2['keyboardControllerWorkletEvent'] = var7;
    var7 = function keyboardControllerKeyboardWillHide() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            if(var3) { _fun0006_ip = 11; continue _fun0006 }
case 3:
            var4 = _closure1_slot2;
            var3 = var4.info;
            var2 = 'KeyboardController keyboardWillHide.';
            var2 = var3.bind(var4)(var2);
case 11:
            return var1;
        }
    };
    var2['keyboardControllerKeyboardWillHide'] = var7;
    var7 = function keyboardControllerKeyboardDidHide() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arguments[0];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0007_ip = 6; continue _fun0007 }
case 7:
            var2 = false;
case 6:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 1;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.isIOS;
            var4 = var4.bind(var5)();
            if(var4) { _fun0007_ip = 12; continue _fun0007 }
case 9:
            var5 = _closure1_slot2;
            var4 = var5.info;
            var3 = {};
            var3['rootProvider'] = var2;
            var2 = 'KeyboardController keyboardDidHide.';
            var2 = var4.bind(var5)(var2, var3);
case 12:
            return var1;
        }
    };
    var2['keyboardControllerKeyboardDidHide'] = var7;
    var7 = function reactNativeKeyboardDidShow(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            if(var3) { _fun0008_ip = 12; continue _fun0008 }
case 3:
            var5 = _closure1_slot2;
            var4 = var5.info;
            var3 = {};
            var2 = arg1;
            var3['height'] = var2;
            var2 = arg2;
            var3['location'] = var2;
            var2 = 'ReactNativeKeyboard didShow.';
            var2 = var4.bind(var5)(var2, var3);
case 12:
            return var1;
        }
    };
    var2['reactNativeKeyboardDidShow'] = var7;
    var7 = function reactNativeKeyboardDidHide(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            if(var3) { _fun0009_ip = 5; continue _fun0009 }
case 3:
            var5 = _closure1_slot2;
            var4 = var5.info;
            var3 = {};
            var2 = arg1;
            var3['location'] = var2;
            var2 = 'ReactNativeKeyboard didHide.';
            var2 = var4.bind(var5)(var2, var3);
case 5:
            return var1;
        }
    };
    var2['reactNativeKeyboardDidHide'] = var7;
    var4 = function markPotentialBadState() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isIOS;
            var3 = var3.bind(var4)();
            if(var3) { _fun0010_ip = 13; continue _fun0010 }
case 3:
            var4 = _closure1_slot2;
            var3 = var4.warn;
            var2 = 'Marking potential bad state from user, check logs above.';
            var2 = var3.bind(var4)(var2);
case 13:
            return var1;
        }
    };
    var2['markPotentialBadState'] = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyboard/KeyboardStateDebugging.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();