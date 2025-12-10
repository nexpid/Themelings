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
        var1 = function getCustomKeyboardHeight(arg1, arg2, arg3) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var10 = arg1;
                var4 = arg3;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var9 = 4;
                var1 = var1[var9];
                var5 = undefined;
                var1 = var2.bind(var5)(var1);
                var7 = var1.Storage;
                var6 = var7.get;
                var1 = _closure1_slot6;
                var2 = 253;
                var1 = var6.bind(var7)(var1, var2);
                var6 = null;
                var6 = var6 != var1;
                if(!var6) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var2 = var1;
case 2:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 5;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.KeyboardTypes;
                var6 = var1.SYSTEM;
                var1 = arg2;
                if(!(var1 === var6)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var6 = 0;
                if(!(var6 !== var10)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                var1 = global;
                var8 = var1.Math;
                var7 = var8.max;
                var1 = 200;
                var1 = var7.bind(var8)(var10, var1);
                if(!(var1 !== var2)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var9];
                var7 = var8.bind(var5)(var7);
                var9 = var7.Storage;
                var8 = var9.set;
                var7 = _closure1_slot6;
                var7 = var8.bind(var9)(var7, var1);
case 7:
                var6 = 0;
                if(!var4) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 6;
                var7 = var9[var7];
                var8 = var8.bind(var5)(var7);
                var7 = var8.getSafeAreaInsets;
                var7 = var7.bind(var8)();
                var6 = var7.bottom;
case 9:
                var1 = var1 - var6;
                return var1;
case 4:
                var1 = 0;
                if(!var4) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 6;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.getSafeAreaInsets;
                var3 = var3.bind(var4)();
                var1 = var3.bottom;
case 11:
                var1 = var2 - var1;
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
                var1 = 7;
                var1 = var5[var1];
                var5 = undefined;
                var3 = var3.bind(var5)(var1);
                var1 = var3.isAndroid;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var1 = 0;
                if(!(var1 !== var6)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var3 = 0;
                if(!var4) { _fun0003_ip = 17; continue _fun0003 }
case 3:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 6;
                var7 = var9[var7];
                var8 = var8.bind(var5)(var7);
                var7 = var8.getSafeAreaInsets;
                var7 = var7.bind(var8)();
                var3 = var7.bottom;
case 17:
                var1 = var6 - var3;
case 15:
                _fun0003_ip = 18; continue _fun0003;
case 13:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 8;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.getImeInsets;
                var1 = var2.bind(var3)(var4);
case 18:
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
                        var10 = var2.keyboardDuration;
                        var12 = null;
                        if(!(var12 == var10)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                        var10 = var1.keyboardDuration;
case 19:
                        var4 = _closure1_slot11;
                        var3 = {};
                        var5 = _closure2_slot0;
                        var5 = var5.keyboardHeight;
                        if(!(var12 == var5)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                        var5 = var1.keyboardHeight;
case 21:
                        var3['keyboardHeight'] = var5;
                        var17 = false;
                        var3['excludeSafeAreaInsets'] = var17;
                        var13 = undefined;
                        var9 = var4.bind(var13)(var3);
                        var4 = _closure1_slot11;
                        var3 = {};
                        var5 = _closure2_slot0;
                        var5 = var5.keyboardHeight;
                        if(!(var12 == var5)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                        var5 = var1.keyboardHeight;
case 23:
                        var3['keyboardHeight'] = var5;
                        var11 = true;
                        var3['excludeSafeAreaInsets'] = var11;
                        var8 = var4.bind(var13)(var3);
                        var3 = _closure2_slot0;
                        var3 = var3.keyboardType;
                        var4 = var12 == var3;
                        var6 = undefined;
                        if(var4) { _fun0004_ip = 25; continue _fun0004 }
case 8:
                        var6 = var3.type;
case 25:
                        if(!(var12 == var6)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                        var6 = var1.keyboardType;
case 26:
                        var3 = var1.keyboardType;
                        if(!(var6 === var3)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                        var5 = var1.keyboardTypePrevious;
                        _fun0004_ip = 30; continue _fun0004;
case 28:
                        var5 = var1.keyboardType;
case 30:
                        var3 = _closure1_slot10;
                        var4 = var3.bind(var13)(var9, var6, var17);
                        var3 = var3.bind(var13)(var9, var6, var11);
                        var11 = var1.keyboardContexts;
                        var16 = var11[var6];
                        var11 = _closure2_slot0;
                        var14 = var11.keyboardType;
                        var15 = var12 == var14;
                        var11 = undefined;
                        if(var15) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                        var11 = var14.context;
case 31:
                        var14 = var16;
                        if(!(var12 != var11)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                        var14 = var11;
case 33:
                        var15 = 'object';
                        var11 = typeof var16;
                        if(!(var15 === var11)) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                        var11 = typeof var14;
                        if(!(var15 !== var11)) { _fun0004_ip = 37; continue _fun0004 }
case 35:
                        var11 = var16 !== var14;
                        _fun0004_ip = 38; continue _fun0004;
case 37:
                        var18 = _closure1_slot1;
                        var19 = _closure1_slot2;
                        var15 = 10;
                        var15 = var19[var15];
                        var15 = var18.bind(var13)(var15);
                        var15 = var15.bind(var13)(var16, var14);
                        var11 = !var15;
case 38:
                        var7 = _closure2_slot0;
                        var7 = var7.systemKeyboardOpen;
                        if(!(var12 == var7)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                        var7 = var1.systemKeyboardOpen;
case 39:
                        if(!var7) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                        var15 = var1.keyboardContexts;
                        var16 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var20 = 5;
                        var12 = var12[var20];
                        var12 = var16.bind(var13)(var12);
                        var12 = var12.KeyboardTypes;
                        var12 = var12.SYSTEM;
                        var12 = var15[var12];
                        var12 = var12.keyboardWillOpen;
                        if(var12) { _fun0004_ip = 43; continue _fun0004 }
case 41:
                        var15 = var1.keyboardContexts;
                        if(var11) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                        var11 = var15;
                        _fun0004_ip = 46; continue _fun0004;
case 44:
                        var12 = {};
                        var23 = var12;
                        var22 = var15;
                        var15 = copyDataProperties(var23, var22);
                        var12[var6] = var14;
                        var11 = var12;
case 46:
                        _fun0004_ip = 47; continue _fun0004;
case 43:
                        var12 = {};
                        var22 = var1.keyboardContexts;
                        var23 = var12;
                        var14 = copyDataProperties(var23, var22);
                        var19 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var14 = var16[var20];
                        var14 = var19.bind(var13)(var14);
                        var14 = var14.KeyboardTypes;
                        var15 = var14.SYSTEM;
                        var14 = {};
                        var18 = var1.keyboardContexts;
                        var16 = var16[var20];
                        var16 = var19.bind(var13)(var16);
                        var16 = var16.KeyboardTypes;
                        var16 = var16.SYSTEM;
                        var22 = var18[var16];
                        var23 = var14;
                        var16 = copyDataProperties(var23, var22);
                        var16 = 'keyboardWillOpen';
                        var14[var16] = var17;
                        var12[var15] = var14;
                        var11 = var12;
case 47:
                        var12 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var2 = 10;
                        var2 = var14[var2];
                        var12 = var12.bind(var13)(var2);
                        var2 = var1.keyboardContexts;
                        var2 = var12.bind(var13)(var2, var11);
                        var2 = !var2;
                        var12 = var1.keyboardDuration;
                        if(!(var12 === var10)) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                        if(var2) { _fun0004_ip = 48; continue _fun0004 }
case 50:
                        var2 = var1.keyboardHeight;
                        if(!(var2 === var9)) { _fun0004_ip = 48; continue _fun0004 }
case 51:
                        var2 = var1.keyboardHeightExcludingSafeAreaInsets;
                        if(!(var2 === var8)) { _fun0004_ip = 48; continue _fun0004 }
case 52:
                        var2 = var1.keyboardType;
                        if(!(var2 === var6)) { _fun0004_ip = 48; continue _fun0004 }
case 53:
                        var2 = var1.customKeyboardHeight;
                        if(!(var2 === var4)) { _fun0004_ip = 48; continue _fun0004 }
case 54:
                        var2 = var1.customKeyboardHeightExcludingSafeAreaInsets;
                        if(!(var2 === var3)) { _fun0004_ip = 48; continue _fun0004 }
case 55:
                        var2 = var1.systemKeyboardOpen;
                        if(!(var2 !== var7)) { _fun0004_ip = 56; continue _fun0004 }
case 48:
                        var2 = {};
                        var2['keyboardContexts'] = var11;
                        var2['keyboardDuration'] = var10;
                        var2['keyboardHeight'] = var9;
                        var2['keyboardHeightExcludingSafeAreaInsets'] = var8;
                        var2['systemKeyboardOpen'] = var7;
                        var2['keyboardType'] = var6;
                        var2['keyboardTypePrevious'] = var5;
                        var2['customKeyboardHeight'] = var4;
                        var2['customKeyboardHeightExcludingSafeAreaInsets'] = var3;
                        var1 = var2;
case 56:
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
        var4 = 7;
        var5 = var7[var4];
        var9 = var6.bind(var1)(var5);
        var5 = var9.isAndroid;
        var5 = var5.bind(var9)();
        var12 = 'keyboardWillShow';
        if(!var5) { _fun0001_ip = 57; continue _fun0001 }
case 58:
        var12 = 'keyboardDidShow';
case 57:
        var4 = var7[var4];
        var5 = var6.bind(var1)(var4);
        var4 = var5.isAndroid;
        var4 = var4.bind(var5)();
        var10 = 'keyboardWillHide';
        if(!var4) { _fun0001_ip = 59; continue _fun0001 }
case 60:
        var10 = 'keyboardDidHide';
case 59:
        var4 = 11;
        var4 = var7[var4];
        var9 = var6.bind(var1)(var4);
        var5 = var9.create;
        var4 = function() {
            var1 = {};
            var11 = _closure1_slot10;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 5;
            var6 = var5[var2];
            var3 = undefined;
            var6 = var4.bind(var3)(var6);
            var6 = var6.KeyboardTypes;
            var9 = var6.SYSTEM;
            var8 = 0;
            var6 = false;
            var9 = var11.bind(var3)(var8, var9, var6);
            var1['customKeyboardHeight'] = var9;
            var9 = var5[var2];
            var9 = var4.bind(var3)(var9);
            var9 = var9.KeyboardTypes;
            var10 = var9.SYSTEM;
            var9 = true;
            var9 = var11.bind(var3)(var8, var10, var9);
            var1['customKeyboardHeightExcludingSafeAreaInsets'] = var9;
            var9 = {};
            var10 = var5[var2];
            var10 = var4.bind(var3)(var10);
            var10 = var10.KeyboardTypes;
            var11 = var10.SYSTEM;
            var10 = {};
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
                    if(!var2) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                    var1 = _closure2_slot0;
                    var1 = var1.context;
                    var4 = null;
                    var5 = var4 == var1;
                    var4 = undefined;
                    if(var5) { _fun0005_ip = 63; continue _fun0005 }
case 64:
                    var4 = var1.keyboardWillOpen;
case 63:
                    var1 = true;
                    var2 = var1 === var4;
case 61:
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