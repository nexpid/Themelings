// app/modules/keyboard/native/KeyboardUIStore.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var8 = require;
        var10 = metroImportDefault;
        var3 = exports;
        var9 = dependencyMap;
        var _closure1_slot0 = var8;
        var _closure1_slot1 = var10;
        var _closure1_slot2 = var9;
        var1 = function getCustomKeyboardHeight(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var8 = arg1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 6;
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
                if(!var4) { _fun0002_ip = 64; continue _fun0002 }
 61:
                var1 = var2;
 64:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var2 = var4.bind(var6)(var2);
                var2 = var2.KeyboardTypes;
                var4 = var2.SYSTEM;
                var2 = arg2;
                if(!(var2 === var4)) { _fun0002_ip = 175; continue _fun0002 }
 103:
                var2 = 0;
                if(!(var2 !== var8)) { _fun0002_ip = 175; continue _fun0002 }
 109:
                var2 = global;
                var5 = var2.Math;
                var4 = var5.max;
                var2 = 200;
                var2 = var4.bind(var5)(var8, var2);
                if(!(var2 !== var1)) { _fun0002_ip = 173; continue _fun0002 }
 135:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var5.bind(var6)(var4);
                var5 = var4.Storage;
                var4 = var5.set;
                var3 = _closure1_slot6;
                var3 = var4.bind(var5)(var3, var2);
 173:
                return var2;
 175:
                return var1;
            }
        };
        var _closure1_slot10 = var1;
        var1 = function getSystemKeyboardHeight(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
                if(var1) { _fun0003_ip = 104; continue _fun0003 }
 52:
                var1 = 0;
                if(!(var1 !== var6)) { _fun0003_ip = 102; continue _fun0003 }
 58:
                var3 = 0;
                if(var4) { _fun0003_ip = 98; continue _fun0003 }
 63:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 9;
                var7 = var9[var7];
                var8 = var8.bind(var5)(var7);
                var7 = var8.getSafeAreaInsets;
                var7 = var7.bind(var8)();
                var3 = var7.bottom;
 98:
                var1 = var6 + var3;
 102:
                _fun0003_ip = 135; continue _fun0003;
 104:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 8;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.getImeInsets;
                var1 = var2.bind(var3)(var4);
 135:
                return var1;
            }
        };
        var _closure1_slot11 = var1;
        var1 = function updateSystemKeyboardStoreState(arg1) {
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure1_slot9;
                var2 = var3.setState;
                var1 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = arg1;
                        var2 = _closure2_slot0;
                        var9 = var2.keyboardDuration;
                        var11 = null;
                        if(!(var11 == var9)) { _fun0004_ip = 28; continue _fun0004 }
 22:
                        var9 = var1.keyboardDuration;
 28:
                        var4 = _closure1_slot11;
                        var3 = {};
                        var5 = _closure2_slot0;
                        var5 = var5.keyboardHeight;
                        if(!(var11 == var5)) { _fun0004_ip = 57; continue _fun0004 }
 51:
                        var5 = var1.keyboardHeight;
 57:
                        var3['keyboardHeight'] = var5;
                        var16 = false;
                        var3['excludeSafeAreaInsets'] = var16;
                        var12 = undefined;
                        var8 = var4.bind(var12)(var3);
                        var4 = _closure1_slot11;
                        var3 = {};
                        var5 = _closure2_slot0;
                        var5 = var5.keyboardHeight;
                        if(!(var11 == var5)) { _fun0004_ip = 102; continue _fun0004 }
 96:
                        var5 = var1.keyboardHeight;
 102:
                        var3['keyboardHeight'] = var5;
                        var5 = true;
                        var3['excludeSafeAreaInsets'] = var5;
                        var7 = var4.bind(var12)(var3);
                        var3 = _closure2_slot0;
                        var3 = var3.keyboardType;
                        var4 = var11 == var3;
                        var5 = undefined;
                        if(var4) { _fun0004_ip = 143; continue _fun0004 }
 138:
                        var5 = var3.type;
 143:
                        if(!(var11 == var5)) { _fun0004_ip = 153; continue _fun0004 }
 147:
                        var5 = var1.keyboardType;
 153:
                        var3 = var1.keyboardType;
                        if(!(var5 === var3)) { _fun0004_ip = 171; continue _fun0004 }
 163:
                        var4 = var1.keyboardTypePrevious;
                        _fun0004_ip = 177; continue _fun0004;
 171:
                        var4 = var1.keyboardType;
 177:
                        var3 = _closure1_slot10;
                        var3 = var3.bind(var12)(var7, var5);
                        var10 = var1.keyboardContexts;
                        var15 = var10[var5];
                        var10 = _closure2_slot0;
                        var13 = var10.keyboardType;
                        var14 = var11 == var13;
                        var10 = undefined;
                        if(var14) { _fun0004_ip = 221; continue _fun0004 }
 216:
                        var10 = var13.context;
 221:
                        var13 = var15;
                        if(!(var11 != var10)) { _fun0004_ip = 231; continue _fun0004 }
 228:
                        var13 = var10;
 231:
                        var14 = 'object';
                        var10 = typeof var15;
                        if(!(var14 === var10)) { _fun0004_ip = 249; continue _fun0004 }
 242:
                        var10 = typeof var13;
                        if(!(var14 !== var10)) { _fun0004_ip = 255; continue _fun0004 }
 249:
                        var10 = var15 !== var13;
                        _fun0004_ip = 284; continue _fun0004;
 255:
                        var17 = _closure1_slot1;
                        var18 = _closure1_slot2;
                        var14 = 11;
                        var14 = var18[var14];
                        var14 = var17.bind(var12)(var14);
                        var14 = var14.bind(var12)(var15, var13);
                        var10 = !var14;
 284:
                        var6 = _closure2_slot0;
                        var6 = var6.keyboardOpen;
                        if(!(var11 == var6)) { _fun0004_ip = 304; continue _fun0004 }
 298:
                        var6 = var1.keyboardOpen;
 304:
                        if(!var6) { _fun0004_ip = 358; continue _fun0004 }
 307:
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
                        if(var11) { _fun0004_ip = 394; continue _fun0004 }
 358:
                        var14 = var1.keyboardContexts;
                        if(var10) { _fun0004_ip = 372; continue _fun0004 }
 367:
                        var10 = var14;
                        _fun0004_ip = 392; continue _fun0004;
 372:
                        var11 = {};
                        var21 = var11;
                        var20 = var14;
                        var14 = copyDataProperties(var21, var20);
                        var11[var5] = var13;
                        var10 = var11;
 392:
                        _fun0004_ip = 495; continue _fun0004;
 394:
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
 495:
                        var11 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var2 = 11;
                        var2 = var13[var2];
                        var11 = var11.bind(var12)(var2);
                        var2 = var1.keyboardContexts;
                        var2 = var11.bind(var12)(var2, var10);
                        var2 = !var2;
                        var11 = var1.keyboardDuration;
                        if(!(var11 === var9)) { _fun0004_ip = 593; continue _fun0004 }
 540:
                        if(var2) { _fun0004_ip = 593; continue _fun0004 }
 543:
                        var2 = var1.keyboardHeight;
                        if(!(var2 === var8)) { _fun0004_ip = 593; continue _fun0004 }
 553:
                        var2 = var1.keyboardHeightExcludingSafeAreaInsets;
                        if(!(var2 === var7)) { _fun0004_ip = 593; continue _fun0004 }
 563:
                        var2 = var1.keyboardType;
                        if(!(var2 === var5)) { _fun0004_ip = 593; continue _fun0004 }
 573:
                        var2 = var1.customKeyboardHeight;
                        if(!(var2 === var3)) { _fun0004_ip = 593; continue _fun0004 }
 583:
                        var2 = var1.keyboardOpen;
                        if(!(var2 !== var6)) { _fun0004_ip = 638; continue _fun0004 }
 593:
                        var2 = {};
                        var2['keyboardContexts'] = var10;
                        var2['keyboardDuration'] = var9;
                        var2['keyboardHeight'] = var8;
                        var2['keyboardHeightExcludingSafeAreaInsets'] = var7;
                        var2['keyboardOpen'] = var6;
                        var2['keyboardType'] = var5;
                        var2['keyboardTypePrevious'] = var4;
                        var2['customKeyboardHeight'] = var3;
                        var1 = var2;
 638:
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
        var1 = global;
        var6 = var1.Object;
        var5 = var6.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var5.bind(var6)(var3, var1, var4);
        var1 = 0;
        var4 = var9[var1];
        var1 = undefined;
        var4 = var8.bind(var1)(var4);
        var13 = var4.Keyboard;
        var4 = 1;
        var4 = var9[var4];
        var4 = var8.bind(var1)(var4);
        var4 = var4.AppLauncherRouteName;
        var _closure1_slot3 = var4;
        var4 = 2;
        var4 = var9[var4];
        var4 = var8.bind(var1)(var4);
        var4 = var4.ExpressionPickerViewType;
        var _closure1_slot4 = var4;
        var4 = 3;
        var4 = var9[var4];
        var4 = var8.bind(var1)(var4);
        var4 = var4.MediaKeyboardTarget;
        var _closure1_slot5 = var4;
        var4 = 'customKeyboardHeight';
        var _closure1_slot6 = var4;
        var4 = 4;
        var5 = var9[var4];
        var7 = var8.bind(var1)(var5);
        var6 = var7.makeMutable;
        var5 = 5;
        var5 = var9[var5];
        var5 = var8.bind(var1)(var5);
        var5 = var5.KeyboardTypes;
        var5 = var5.SYSTEM;
        var5 = var6.bind(var7)(var5);
        var _closure1_slot7 = var5;
        var4 = var9[var4];
        var7 = var8.bind(var1)(var4);
        var6 = var7.makeMutable;
        var4 = false;
        var4 = var6.bind(var7)(var4);
        var _closure1_slot8 = var4;
        var6 = 7;
        var7 = var9[var6];
        var11 = var8.bind(var1)(var7);
        var7 = var11.isAndroid;
        var7 = var7.bind(var11)();
        var14 = 'keyboardWillShow';
        if(!var7) { _fun0001_ip = 291; continue _fun0001 }
 285:
        var14 = 'keyboardDidShow';
 291:
        var6 = var9[var6];
        var7 = var8.bind(var1)(var6);
        var6 = var7.isAndroid;
        var6 = var6.bind(var7)();
        var12 = 'keyboardWillHide';
        if(!var6) { _fun0001_ip = 324; continue _fun0001 }
 318:
        var12 = 'keyboardDidHide';
 324:
        var6 = 12;
        var6 = var9[var6];
        var11 = var8.bind(var1)(var6);
        var7 = var11.create;
        var6 = function() {
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
            var1['keyboardOpen'] = var6;
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
        var6 = var7.bind(var11)(var6);
        var _closure1_slot9 = var6;
        var11 = var13.addListener;
        var7 = function(arg1) {
            var2 = arg1;
            var1 = var2.duration;
            var2 = var2.endCoordinates;
            var5 = var2.height;
            var4 = _closure1_slot12;
            var3 = {};
            var3['keyboardHeight'] = var5;
            var3['keyboardDuration'] = var1;
            var5 = true;
            var3['keyboardOpen'] = var5;
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 13;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.onKeyboardChanged;
            var3 = var3.bind(var4)(var5);
            var4 = _closure1_slot8;
            var3 = var4.set;
            var2 = false;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var7 = var11.bind(var13)(var14, var7);
        var11 = var13.addListener;
        var7 = function() {
            var5 = _closure1_slot12;
            var4 = false;
            var1 = undefined;
            var3 = {'keyboardHeight': 0, 'keyboardOpen': false};
            var3 = var5.bind(var1)(var3);
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 13;
            var3 = var6[var3];
            var5 = var5.bind(var1)(var3);
            var3 = var5.onKeyboardChanged;
            var3 = var3.bind(var5)(var4);
            var3 = _closure1_slot8;
            var2 = var3.set;
            var2 = var2.bind(var3)(var4);
            return var1;
        };
        var7 = var11.bind(var13)(var12, var7);
        var7 = 14;
        var7 = var9[var7];
        var10 = var10.bind(var1)(var7);
        var7 = function(arg1) {
            var1 = arg1;
            var1 = var1.bottom;
            var3 = _closure1_slot12;
            var2 = {};
            var2['keyboardImeInsetBottom'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var7 = var10.bind(var1)(var7);
        var7 = 15;
        var7 = var9[var7];
        var9 = var8.bind(var1)(var7);
        var8 = var9.fileFinishedImporting;
        var7 = 'modules/keyboard/native/KeyboardUIStore.native.tsx';
        var7 = var8.bind(var9)(var7);
        var3['default'] = var6;
        var3['keyboardTypeSharedValue'] = var5;
        var3['keyboardWillOpenSharedValue'] = var4;
        var2 = function setKeyboardType(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg1;
                var5 = _closure1_slot7;
                var3 = var5.set;
                var1 = var4.type;
                var1 = var3.bind(var5)(var1);
                var6 = _closure1_slot8;
                var5 = var6.set;
                var7 = var4.type;
                var8 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var8.bind(var1)(var3);
                var3 = var3.KeyboardTypes;
                var3 = var3.SYSTEM;
                var3 = var7 === var3;
                if(!var3) { _fun0005_ip = 108; continue _fun0005 }
 80:
                var7 = var4.context;
                var8 = null;
                var9 = var8 == var7;
                var8 = undefined;
                if(var9) { _fun0005_ip = 102; continue _fun0005 }
 96:
                var8 = var7.keyboardWillOpen;
 102:
                var7 = true;
                var3 = var7 === var8;
 108:
                var3 = var5.bind(var6)(var3);
                var3 = _closure1_slot12;
                var2 = {};
                var2['keyboardType'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var3['setKeyboardType'] = var2;
        return var1;
    }
})();