// app/modules/keyboard/native/KeyboardUIStore.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var8 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var8;
        var _closure1_slot2 = var7;
        var1 = function getCustomKeyboardHeight(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var8 = arg1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 4;
                var1 = var1[var7];
                var6 = undefined;
                var1 = var2.bind(var6)(var1);
                var5 = var1.Storage;
                var4 = var5.get;
                var2 = _closure1_slot6;
                var1 = 253;
                var2 = var4.bind(var5)(var2, var1);
                var4 = null;
                var4 = var4 != var2;
                if(!var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var1 = var2;
case 2:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var2 = var4.bind(var6)(var2);
                var2 = var2.KeyboardTypes;
                var4 = var2.SYSTEM;
                var2 = arg2;
                if(!(var2 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = 0;
                if(!(var2 !== var8)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                var2 = global;
                var5 = var2.Math;
                var4 = var5.max;
                var2 = 200;
                var2 = var4.bind(var5)(var8, var2);
                if(!(var2 !== var1)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var5.bind(var6)(var4);
                var5 = var4.Storage;
                var4 = var5.set;
                var3 = _closure1_slot6;
                var3 = var4.bind(var5)(var3, var2);
case 7:
                return var2;
case 4:
                return var1;
            }
        };
        var _closure1_slot10 = var1;
        var1 = function getSystemKeyboardHeight(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var6 = var1.keyboardHeight;
                var4 = var1.excludeSafeAreaInsets;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var5 = undefined;
                var3 = var3.bind(var5)(var1);
                var1 = var3.isAndroid;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var1 = 0;
                if(!(var1 !== var6)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var3 = 0;
                if(!var4) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 8;
                var7 = var9[var7];
                var8 = var8.bind(var5)(var7);
                var7 = var8.getSafeAreaInsets;
                var7 = var7.bind(var8)();
                var3 = var7.bottom;
case 13:
                var1 = var6 - var3;
case 11:
                _fun0003_ip = 8; continue _fun0003;
case 9:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 7;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.getImeInsets;
                var1 = var2.bind(var3)(var4);
case 8:
                return var1;
            }
        };
        var _closure1_slot11 = var1;
        var1 = function updateSystemKeyboardStoreState(arg1) {
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot9;
                var2 = var3.setState;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = arg1;
                        var2 = _closure2_slot0;
                        var9 = var2.keyboardDuration;
                        var11 = null;
                        if(!(var11 == var9)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                        var9 = var1.keyboardDuration;
case 15:
                        var4 = _closure1_slot11;
                        var3 = {};
                        var5 = _closure2_slot0;
                        var5 = var5.keyboardHeight;
                        if(!(var11 == var5)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                        var5 = var1.keyboardHeight;
case 17:
                        var3['keyboardHeight'] = var5;
                        var16 = false;
                        var3['excludeSafeAreaInsets'] = var16;
                        var12 = undefined;
                        var8 = var4.bind(var12)(var3);
                        var4 = _closure1_slot11;
                        var3 = {};
                        var5 = _closure2_slot0;
                        var5 = var5.keyboardHeight;
                        if(!(var11 == var5)) { _fun0004_ip = 11; continue _fun0004 }
case 19:
                        var5 = var1.keyboardHeight;
case 11:
                        var3['keyboardHeight'] = var5;
                        var5 = true;
                        var3['excludeSafeAreaInsets'] = var5;
                        var7 = var4.bind(var12)(var3);
                        var3 = _closure2_slot0;
                        var3 = var3.keyboardType;
                        var4 = var11 == var3;
                        var5 = undefined;
                        if(var4) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                        var5 = var3.type;
case 20:
                        if(!(var11 == var5)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                        var5 = var1.keyboardType;
case 22:
                        var3 = var1.keyboardType;
                        if(!(var5 === var3)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                        var4 = var1.keyboardTypePrevious;
                        _fun0004_ip = 26; continue _fun0004;
case 24:
                        var4 = var1.keyboardType;
case 26:
                        var10 = _closure1_slot10;
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var3 = 6;
                        var3 = var14[var3];
                        var13 = var13.bind(var12)(var3);
                        var3 = var13.isIOS;
                        var13 = var3.bind(var13)();
                        var3 = var7;
                        if(!var13) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                        var3 = var8;
case 27:
                        var3 = var10.bind(var12)(var3, var5);
                        var10 = var1.keyboardContexts;
                        var15 = var10[var5];
                        var10 = _closure2_slot0;
                        var13 = var10.keyboardType;
                        var14 = var11 == var13;
                        var10 = undefined;
                        if(var14) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                        var10 = var13.context;
case 29:
                        var13 = var15;
                        if(!(var11 != var10)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                        var13 = var10;
case 31:
                        var14 = 'object';
                        var10 = typeof var15;
                        if(!(var14 === var10)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                        var10 = typeof var13;
                        if(!(var14 !== var10)) { _fun0004_ip = 35; continue _fun0004 }
case 33:
                        var10 = var15 !== var13;
                        _fun0004_ip = 36; continue _fun0004;
case 35:
                        var17 = _closure1_slot1;
                        var18 = _closure1_slot2;
                        var14 = 10;
                        var14 = var18[var14];
                        var14 = var17.bind(var12)(var14);
                        var14 = var14.bind(var12)(var15, var13);
                        var10 = !var14;
case 36:
                        var6 = _closure2_slot0;
                        var6 = var6.systemKeyboardOpen;
                        if(!(var11 == var6)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                        var6 = var1.systemKeyboardOpen;
case 37:
                        if(!var6) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                        var14 = var1.keyboardContexts;
                        var15 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var19 = 5;
                        var11 = var11[var19];
                        var11 = var15.bind(var12)(var11);
                        var11 = var11.KeyboardTypes;
                        var11 = var11.SYSTEM;
                        var11 = var14[var11];
                        var11 = var11.keyboardWillOpen;
                        if(var11) { _fun0004_ip = 41; continue _fun0004 }
case 39:
                        var14 = var1.keyboardContexts;
                        if(var10) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                        var10 = var14;
                        _fun0004_ip = 44; continue _fun0004;
case 42:
                        var11 = {};
                        var21 = var11;
                        var20 = var14;
                        var14 = copyDataProperties(var21, var20);
                        var11[var5] = var13;
                        var10 = var11;
case 44:
                        _fun0004_ip = 45; continue _fun0004;
case 41:
                        var11 = {};
                        var20 = var1.keyboardContexts;
                        var21 = var11;
                        var13 = copyDataProperties(var21, var20);
                        var18 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var13 = var15[var19];
                        var13 = var18.bind(var12)(var13);
                        var13 = var13.KeyboardTypes;
                        var14 = var13.SYSTEM;
                        var13 = {};
                        var17 = var1.keyboardContexts;
                        var15 = var15[var19];
                        var15 = var18.bind(var12)(var15);
                        var15 = var15.KeyboardTypes;
                        var15 = var15.SYSTEM;
                        var20 = var17[var15];
                        var21 = var13;
                        var15 = copyDataProperties(var21, var20);
                        var15 = 'keyboardWillOpen';
                        var13[var15] = var16;
                        var11[var14] = var13;
                        var10 = var11;
case 45:
                        var11 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var2 = 10;
                        var2 = var13[var2];
                        var11 = var11.bind(var12)(var2);
                        var2 = var1.keyboardContexts;
                        var2 = var11.bind(var12)(var2, var10);
                        var2 = !var2;
                        var11 = var1.keyboardDuration;
                        if(!(var11 === var9)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
                        if(var2) { _fun0004_ip = 46; continue _fun0004 }
case 48:
                        var2 = var1.keyboardHeight;
                        if(!(var2 === var8)) { _fun0004_ip = 46; continue _fun0004 }
case 49:
                        var2 = var1.keyboardHeightExcludingSafeAreaInsets;
                        if(!(var2 === var7)) { _fun0004_ip = 46; continue _fun0004 }
case 50:
                        var2 = var1.keyboardType;
                        if(!(var2 === var5)) { _fun0004_ip = 46; continue _fun0004 }
case 51:
                        var2 = var1.customKeyboardHeight;
                        if(!(var2 === var3)) { _fun0004_ip = 46; continue _fun0004 }
case 52:
                        var2 = var1.systemKeyboardOpen;
                        if(!(var2 !== var6)) { _fun0004_ip = 53; continue _fun0004 }
case 46:
                        var2 = {};
                        var2['keyboardContexts'] = var10;
                        var2['keyboardDuration'] = var9;
                        var2['keyboardHeight'] = var8;
                        var2['keyboardHeightExcludingSafeAreaInsets'] = var7;
                        var2['systemKeyboardOpen'] = var6;
                        var2['keyboardType'] = var5;
                        var2['keyboardTypePrevious'] = var4;
                        var2['customKeyboardHeight'] = var3;
                        var1 = var2;
case 53:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var _closure1_slot12 = var1;
        var4 = global;
        var10 = var4.Object;
        var9 = var10.defineProperty;
        var5 = {};
        var1 = true;
        var5['value'] = var1;
        var1 = '__esModule';
        var1 = var9.bind(var10)(var3, var1, var5);
        var1 = 0;
        var5 = var7[var1];
        var1 = undefined;
        var5 = var6.bind(var1)(var5);
        var11 = var5.Keyboard;
        var5 = 1;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.AppLauncherRouteName;
        var _closure1_slot3 = var5;
        var5 = 2;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.ExpressionPickerViewType;
        var _closure1_slot4 = var5;
        var5 = 3;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaKeyboardTarget;
        var _closure1_slot5 = var5;
        var5 = 'customKeyboardHeight';
        var _closure1_slot6 = var5;
        var5 = var4.Set;
        var9 = var5.prototype;
        var9 = Object.create(var9, {constructor: {value: var5}});
        var16 = var9;
        var5 = new var16[var5](var15);
        var5 = var5 instanceof Object ? var5 : var9;
        var _closure1_slot7 = var5;
        var4 = var4.Set;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var16 = var5;
        var4 = new var16[var4](var15);
        var4 = var4 instanceof Object ? var4 : var5;
        var _closure1_slot8 = var4;
        var4 = 6;
        var5 = var7[var4];
        var9 = var6.bind(var1)(var5);
        var5 = var9.isAndroid;
        var5 = var5.bind(var9)();
        var12 = 'keyboardWillShow';
        if(!var5) { _fun0001_ip = 54; continue _fun0001 }
case 55:
        var12 = 'keyboardDidShow';
case 54:
        var4 = var7[var4];
        var5 = var6.bind(var1)(var4);
        var4 = var5.isAndroid;
        var4 = var4.bind(var5)();
        var10 = 'keyboardWillHide';
        if(!var4) { _fun0001_ip = 56; continue _fun0001 }
case 57:
        var10 = 'keyboardDidHide';
case 56:
        var4 = 11;
        var4 = var7[var4];
        var9 = var6.bind(var1)(var4);
        var5 = var9.create;
        var4 = function() {
            var1 = {};
            var9 = _closure1_slot10;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 5;
            var6 = var5[var2];
            var3 = undefined;
            var6 = var4.bind(var3)(var6);
            var6 = var6.KeyboardTypes;
            var6 = var6.SYSTEM;
            var8 = 0;
            var6 = var9.bind(var3)(var8, var6);
            var1['customKeyboardHeight'] = var6;
            var9 = {};
            var6 = var5[var2];
            var6 = var4.bind(var3)(var6);
            var6 = var6.KeyboardTypes;
            var11 = var6.SYSTEM;
            var10 = {};
            var6 = false;
            var10['keyboardWillOpen'] = var6;
            var9[var11] = var10;
            var10 = var5[var2];
            var10 = var4.bind(var3)(var10);
            var10 = var10.KeyboardTypes;
            var11 = var10.EXPRESSION;
            var10 = _closure1_slot4;
            var10 = var10.EMOJI;
            var9[var11] = var10;
            var10 = var5[var2];
            var10 = var4.bind(var3)(var10);
            var10 = var10.KeyboardTypes;
            var11 = var10.MEDIA;
            var10 = {};
            var12 = _closure1_slot5;
            var12 = var12.CHAT;
            var10['target'] = var12;
            var9[var11] = var10;
            var10 = var5[var2];
            var10 = var4.bind(var3)(var10);
            var10 = var10.KeyboardTypes;
            var11 = var10.APP_LAUNCHER;
            var10 = {};
            var12 = _closure1_slot3;
            var12 = var12.HOME;
            var10['initialRouteName'] = var12;
            var9[var11] = var10;
            var1['keyboardContexts'] = var9;
            var1['keyboardDuration'] = var8;
            var8 = _closure1_slot11;
            var7 = {'keyboardHeight': 0, 'excludeSafeAreaInsets': false};
            var7 = var8.bind(var3)(var7);
            var1['keyboardHeight'] = var7;
            var7 = {'keyboardHeight': 0, 'excludeSafeAreaInsets': true};
            var7 = var8.bind(var3)(var7);
            var1['keyboardHeightExcludingSafeAreaInsets'] = var7;
            var1['systemKeyboardOpen'] = var6;
            var6 = var5[var2];
            var6 = var4.bind(var3)(var6);
            var6 = var6.KeyboardTypes;
            var6 = var6.SYSTEM;
            var1['keyboardType'] = var6;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.KeyboardTypes;
            var2 = var2.SYSTEM;
            var1['keyboardTypePrevious'] = var2;
            return var1;
        };
        var4 = var5.bind(var9)(var4);
        var _closure1_slot9 = var4;
        var9 = var11.addListener;
        var5 = function(arg1) {
            var2 = arg1;
            var1 = var2.duration;
            var2 = var2.endCoordinates;
            var5 = var2.height;
            var4 = _closure1_slot12;
            var3 = {};
            var3['keyboardHeight'] = var5;
            var3['keyboardDuration'] = var1;
            var5 = true;
            var3['systemKeyboardOpen'] = var5;
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 12;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.onKeyboardChanged;
            var3 = var3.bind(var4)(var5);
            var4 = _closure1_slot8;
            var3 = var4.forEach;
            var2 = function(arg1) {
                var3 = arg1;
                var2 = undefined;
                var1 = false;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5 = var9.bind(var11)(var12, var5);
        var9 = var11.addListener;
        var5 = function() {
            var4 = _closure1_slot12;
            var5 = false;
            var1 = undefined;
            var3 = {'keyboardHeight': 0, 'systemKeyboardOpen': false};
            var3 = var4.bind(var1)(var3);
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 12;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.onKeyboardChanged;
            var3 = var3.bind(var4)(var5);
            var4 = _closure1_slot8;
            var3 = var4.forEach;
            var2 = function(arg1) {
                var3 = arg1;
                var2 = undefined;
                var1 = false;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5 = var9.bind(var11)(var10, var5);
        var5 = 13;
        var5 = var7[var5];
        var8 = var8.bind(var1)(var5);
        var5 = function(arg1) {
            var1 = arg1;
            var1 = var1.bottom;
            var3 = _closure1_slot12;
            var2 = {};
            var2['keyboardImeInsetBottom'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5 = var8.bind(var1)(var5);
        var5 = 14;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/keyboard/native/KeyboardUIStore.native.tsx';
        var5 = var6.bind(var7)(var5);
        var3['default'] = var4;
        var4 = function setKeyboardType(arg1) {
            var1 = arg1;
            var _closure2_slot0 = var1;
            var6 = _closure1_slot7;
            var5 = var6.forEach;
            var4 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = arg1;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var5 = _closure1_slot8;
            var4 = var5.forEach;
            var3 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var4 = var2.type;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.KeyboardTypes;
                    var2 = var2.SYSTEM;
                    var2 = var4 === var2;
                    if(!var2) { _fun0005_ip = 58; continue _fun0005 }
case 59:
                    var1 = _closure2_slot0;
                    var1 = var1.context;
                    var4 = null;
                    var5 = var4 == var1;
                    var4 = undefined;
                    if(var5) { _fun0005_ip = 60; continue _fun0005 }
case 61:
                    var4 = var1.keyboardWillOpen;
case 60:
                    var1 = true;
                    var2 = var1 === var4;
case 58:
                    var1 = arg1;
                    var1 = var1.bind(var3)(var2);
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot12;
            var2 = {};
            var2['keyboardType'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var3['setKeyboardType'] = var4;
        var4 = function addKeyboardWillOpenChangedListener(arg1) {
            var4 = arg1;
            var _closure2_slot0 = var4;
            var3 = _closure1_slot8;
            var2 = var3.add;
            var2 = var2.bind(var3)(var4);
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.delete;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            return var1;
        };
        var3['addKeyboardWillOpenChangedListener'] = var4;
        var2 = function addKeyboardTypeChangedListener(arg1) {
            var4 = arg1;
            var _closure2_slot0 = var4;
            var3 = _closure1_slot7;
            var2 = var3.add;
            var2 = var2.bind(var3)(var4);
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.delete;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            return var1;
        };
        var3['addKeyboardTypeChangedListener'] = var2;
        return var1;
    }
})();