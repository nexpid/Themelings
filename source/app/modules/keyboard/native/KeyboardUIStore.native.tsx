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
        var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = global;
                var2 = var5.Symbol;
                var4 = 'undefined';
                var2 = typeof var2;
                var2 = var4 !== var2;
                if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
case 2:
                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = var3["@@iterator"];
case 4:
                if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var7 = {};
                var9 = var7.toString;
                var7 = var9.call;
                var11 = var7.bind(var9)(var3);
                var10 = var11.slice;
                var9 = 8;
                var7 = -1;
                var9 = var10.bind(var11)(var9, var7);
                var7 = 'Object';
                var7 = var7 === var9;
                if(!var7) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var7 = var3.constructor;
case 14:
                var10 = var9;
                if(!var7) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var7 = var3.constructor;
                var10 = var7.name;
case 16:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0002_ip = 18; continue _fun0002 }
case 20:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0002_ip = 23; continue _fun0002 }
case 21:
                var9 = _closure1_slot11;
                var7 = var9.bind(var8)(var3, var8);
case 23:
                _fun0002_ip = 24; continue _fun0002;
case 18:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
case 24:
                var6 = var7;
                _fun0002_ip = 10; continue _fun0002;
case 12:
                var7 = _closure1_slot11;
                var6 = var7.bind(var8)(var3, var8);
case 10:
                var4 = var6;
                if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 25:
                var7 = var5.TypeError;
                var5 = var7.prototype;
                var6 = Object.create(var5, {constructor: {value: var7}});
                var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var14 = var6;
                var5 = new var14[var7](var13, var12);
                var5 = var5 instanceof Object ? var5 : var6;
                throw var5;
case 8:
                if(!var4) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                _closure2_slot0 = var4;
case 26:
                var4 = 0;
                var _closure2_slot1 = var4;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var1 = var1.length;
                        if(!(!(var2 >= var1))) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                        var1 = {};
                        var2 = false;
                        var1['done'] = var2;
                        var3 = _closure2_slot0;
                        var2 = _closure2_slot1;
                        var2 = parseFloat(var2);
                        var4 = var2 + 1;
                        _closure2_slot1 = var4;
                        var2 = var3[var2];
                        var1['value'] = var2;
                        _fun0003_ip = 30; continue _fun0003;
case 28:
                        var2 = {};
                        var3 = true;
                        var2['done'] = var3;
                        var1 = var2;
case 30:
                        return var1;
                    }
                };
                return var1;
case 6:
                var1 = var2.call;
                var3 = var1.bind(var2)(var3);
                var2 = var3.next;
                var1 = var2.bind;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var _closure1_slot10 = var1;
        var1 = function _arrayLikeToArray(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var3 = undefined;
                var1 = var1 == var3;
                if(var1) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                var2 = var4.length;
                var1 = var3 > var2;
case 31:
                var2 = undefined;
                if(!var1) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                var2 = var4.length;
case 33:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.bind(var3)(var2);
                var3 = 0;
                var5 = var3 < var2;
                if(!var5) { _fun0004_ip = 35; continue _fun0004 }
case 4:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0004_ip = 4; continue _fun0004 }
case 35:
                return var1;
            }
        };
        var _closure1_slot11 = var1;
        var1 = function getCustomKeyboardHeight(arg1, arg2, arg3, arg4) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var11 = arg1;
                var4 = arg3;
                var5 = arg4;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var10 = 3;
                var1 = var1[var10];
                var6 = undefined;
                var1 = var2.bind(var6)(var1);
                var8 = var1.Storage;
                var7 = var8.get;
                var1 = _closure1_slot6;
                var2 = 253;
                var1 = var7.bind(var8)(var1, var2);
                var7 = null;
                var7 = var7 != var1;
                if(!var7) { _fun0005_ip = 35; continue _fun0005 }
case 30:
                var2 = var1;
case 35:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 4;
                var1 = var8[var1];
                var1 = var7.bind(var6)(var1);
                var1 = var1.KeyboardTypes;
                var7 = var1.SYSTEM;
                var1 = arg2;
                if(!(var1 === var7)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                var7 = 0;
                if(!(var7 !== var11)) { _fun0005_ip = 36; continue _fun0005 }
case 38:
                var1 = global;
                var9 = var1.Math;
                var8 = var9.max;
                var1 = 200;
                var1 = var8.bind(var9)(var11, var1);
                if(!(var1 !== var2)) { _fun0005_ip = 16; continue _fun0005 }
case 39:
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var10];
                var8 = var9.bind(var6)(var8);
                var10 = var8.Storage;
                var9 = var10.set;
                var8 = _closure1_slot6;
                var8 = var9.bind(var10)(var8, var1);
case 16:
                var7 = 0;
                if(!var4) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 5;
                var8 = var10[var8];
                var9 = var9.bind(var6)(var8);
                var8 = var9.getSafeAreaInsets;
                var8 = var8.bind(var9)(var5);
                var7 = var8.bottom;
case 40:
                var1 = var1 - var7;
                return var1;
case 36:
                var1 = 0;
                if(!var4) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 5;
                var3 = var7[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.getSafeAreaInsets;
                var3 = var3.bind(var4)(var5);
                var1 = var3.bottom;
case 42:
                var1 = var2 - var1;
                return var1;
            }
        };
        var _closure1_slot12 = var1;
        var1 = function getSystemKeyboardHeight(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arg1;
                var7 = var1.keyboardHeight;
                var5 = var1.excludeSafeAreaInsets;
                var4 = var1.appEntryKey;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 6;
                var1 = var6[var1];
                var6 = undefined;
                var3 = var3.bind(var6)(var1);
                var1 = var3.isAndroid;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                var1 = 0;
                if(!(var1 !== var7)) { _fun0006_ip = 13; continue _fun0006 }
case 46:
                var3 = 0;
                if(!var5) { _fun0006_ip = 47; continue _fun0006 }
case 35:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 5;
                var8 = var10[var8];
                var9 = var9.bind(var6)(var8);
                var8 = var9.getSafeAreaInsets;
                var8 = var8.bind(var9)(var4);
                var3 = var8.bottom;
case 47:
                var1 = var7 - var3;
case 13:
                _fun0006_ip = 48; continue _fun0006;
case 44:
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 7;
                var2 = var7[var2];
                var3 = var3.bind(var6)(var2);
                var2 = var3.getImeInsets;
                var1 = var2.bind(var3)(var5, var4);
case 48:
                return var1;
            }
        };
        var _closure1_slot13 = var1;
        var1 = function computeEntryState(arg1, arg2, arg3) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var12 = arg2;
                var11 = arg3;
                var10 = var12.keyboardDuration;
                var15 = null;
                if(!(var15 == var10)) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                var10 = var1.keyboardDuration;
case 49:
                var4 = _closure1_slot13;
                var3 = {};
                var5 = var12.keyboardHeight;
                if(!(var15 == var5)) { _fun0007_ip = 51; continue _fun0007 }
case 2:
                var5 = var1.keyboardHeight;
case 51:
                var3['keyboardHeight'] = var5;
                var17 = false;
                var3['excludeSafeAreaInsets'] = var17;
                var3['appEntryKey'] = var11;
                var13 = undefined;
                var9 = var4.bind(var13)(var3);
                var4 = _closure1_slot13;
                var3 = {};
                var5 = var12.keyboardHeight;
                if(!(var15 == var5)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                var5 = var1.keyboardHeight;
case 52:
                var3['keyboardHeight'] = var5;
                var7 = true;
                var3['excludeSafeAreaInsets'] = var7;
                var3['appEntryKey'] = var11;
                var8 = var4.bind(var13)(var3);
                var3 = var12.keyboardType;
                var4 = var15 == var3;
                var6 = undefined;
                if(var4) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                var6 = var3.type;
case 54:
                if(!(var15 == var6)) { _fun0007_ip = 56; continue _fun0007 }
case 48:
                var6 = var1.keyboardType;
case 56:
                var3 = var1.keyboardType;
                if(!(var6 === var3)) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                var5 = var1.keyboardTypePrevious;
                _fun0007_ip = 59; continue _fun0007;
case 57:
                var5 = var1.keyboardType;
case 59:
                var3 = _closure1_slot12;
                var25 = undefined;
                var24 = var9;
                var23 = var6;
                var22 = false;
                var21 = var11;
                var4 = var25[var3](var24, var23, var22, var21, var20);
                var24 = var9;
                var23 = var6;
                var22 = true;
                var21 = var11;
                var3 = var25[var3](var24, var23, var22, var21, var20);
                var7 = var1.keyboardContexts;
                var16 = var7[var6];
                var11 = var12.keyboardType;
                var14 = var15 == var11;
                var7 = undefined;
                if(var14) { _fun0007_ip = 60; continue _fun0007 }
case 61:
                var7 = var11.context;
case 60:
                var14 = var16;
                if(!(var15 != var7)) { _fun0007_ip = 62; continue _fun0007 }
case 23:
                var14 = var7;
case 62:
                var11 = 'object';
                var7 = typeof var16;
                if(!(var11 === var7)) { _fun0007_ip = 63; continue _fun0007 }
case 64:
                var7 = typeof var14;
                if(!(var11 !== var7)) { _fun0007_ip = 65; continue _fun0007 }
case 63:
                var11 = var16 !== var14;
                _fun0007_ip = 66; continue _fun0007;
case 65:
                var18 = _closure1_slot1;
                var19 = _closure1_slot2;
                var7 = 8;
                var7 = var19[var7];
                var7 = var18.bind(var13)(var7);
                var7 = var7.bind(var13)(var16, var14);
                var11 = !var7;
case 66:
                var16 = _closure1_slot0;
                var18 = _closure1_slot2;
                var7 = 6;
                var7 = var18[var7];
                var16 = var16.bind(var13)(var7);
                var7 = var16.isAndroid;
                var7 = var7.bind(var16)();
                if(var7) { _fun0007_ip = 67; continue _fun0007 }
case 68:
                var7 = var12.systemKeyboardOpen;
                if(!(var15 == var7)) { _fun0007_ip = 69; continue _fun0007 }
case 70:
                var7 = var1.systemKeyboardOpen;
case 69:
                _fun0007_ip = 71; continue _fun0007;
case 67:
                var16 = 0;
                var7 = var9 > var16;
case 71:
                var18 = var1.keyboardContexts;
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var20 = 4;
                var16 = var16[var20];
                var16 = var19.bind(var13)(var16);
                var16 = var16.KeyboardTypes;
                var16 = var16.SYSTEM;
                var16 = var18[var16];
                var16 = var16.keyboardWillOpen;
                if(!var16) { _fun0007_ip = 72; continue _fun0007 }
case 73:
                var12 = var12.systemKeyboardOpen;
                if(!(var15 == var12)) { _fun0007_ip = 74; continue _fun0007 }
case 72:
                var15 = var1.keyboardContexts;
                if(var11) { _fun0007_ip = 75; continue _fun0007 }
case 76:
                var11 = var15;
                _fun0007_ip = 77; continue _fun0007;
case 75:
                var12 = {};
                var24 = var12;
                var23 = var15;
                var15 = copyDataProperties(var24, var23);
                var12[5] = var14;
                var11 = var12;
case 77:
                _fun0007_ip = 78; continue _fun0007;
case 74:
                var12 = {};
                var23 = var1.keyboardContexts;
                var24 = var12;
                var14 = copyDataProperties(var24, var23);
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
                var23 = var18[var16];
                var24 = var14;
                var16 = copyDataProperties(var24, var23);
                var16 = 'keyboardWillOpen';
                var14[15] = var17;
                var12[14] = var14;
                var11 = var12;
case 78:
                var12 = _closure1_slot1;
                var14 = _closure1_slot2;
                var2 = 8;
                var2 = var14[var2];
                var12 = var12.bind(var13)(var2);
                var2 = var1.keyboardContexts;
                var2 = var12.bind(var13)(var2, var11);
                var2 = !var2;
                var12 = var1.keyboardDuration;
                if(!(var12 === var10)) { _fun0007_ip = 79; continue _fun0007 }
case 80:
                if(var2) { _fun0007_ip = 79; continue _fun0007 }
case 81:
                var2 = var1.keyboardHeight;
                if(!(var2 === var9)) { _fun0007_ip = 79; continue _fun0007 }
case 82:
                var2 = var1.keyboardHeightExcludingSafeAreaInsets;
                if(!(var2 === var8)) { _fun0007_ip = 79; continue _fun0007 }
case 83:
                var2 = var1.keyboardType;
                if(!(var2 === var6)) { _fun0007_ip = 79; continue _fun0007 }
case 84:
                var2 = var1.customKeyboardHeight;
                if(!(var2 === var4)) { _fun0007_ip = 79; continue _fun0007 }
case 85:
                var2 = var1.customKeyboardHeightExcludingSafeAreaInsets;
                if(!(var2 === var3)) { _fun0007_ip = 79; continue _fun0007 }
case 86:
                var2 = var1.systemKeyboardOpen;
                if(!(var2 !== var7)) { _fun0007_ip = 87; continue _fun0007 }
case 79:
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
case 87:
                return var1;
            }
        };
        var _closure1_slot14 = var1;
        var1 = function updateKeyboardStoreState(arg1, arg2) {
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = arg2;
            var _closure2_slot1 = var1;
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
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = arg1;
                        var3 = _closure2_slot1;
                        var2 = null;
                        if(!(var2 == var3)) { _fun0008_ip = 5; continue _fun0008 }
case 88:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 10;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var4 = var2.APP_ENTRY_KEYS;
                        _fun0008_ip = 89; continue _fun0008;
case 5:
                        var3 = _closure2_slot1;
                        var2 = new Array(1);
                        var2[0] = var3;
                        var4 = var2;
case 89:
                        var3 = var1.byAppEntry;
                        var2 = _closure1_slot10;
                        var7 = undefined;
                        var6 = var2.bind(var7)(var4);
                        var4 = var6.bind(var7)();
                        var2 = var4.done;
                        var5 = var4;
                        var4 = var3;
                        var3 = var4;
                        if(var2) { _fun0008_ip = 90; continue _fun0008 }
case 91:
                        var12 = var5.value;
                        var2 = var4[var12];
                        var11 = _closure1_slot14;
                        var10 = _closure2_slot0;
                        var11 = var11.bind(var7)(var2, var10, var12);
                        var10 = var4;
                        if(!(var2 !== var11)) { _fun0008_ip = 92; continue _fun0008 }
case 93:
                        var2 = {};
                        var16 = var2;
                        var15 = var4;
                        var13 = copyDataProperties(var16, var15);
                        var2[11] = var11;
                        var10 = var2;
case 92:
                        var11 = var6.bind(var7)();
                        var2 = var11.done;
                        var4 = var10;
                        var5 = var11;
                        var3 = var4;
                        if(!var2) { _fun0008_ip = 91; continue _fun0008 }
case 90:
                        var2 = var1.byAppEntry;
                        if(!(var3 !== var2)) { _fun0008_ip = 94; continue _fun0008 }
case 19:
                        var2 = {};
                        var2['byAppEntry'] = var3;
                        var1 = var2;
case 94:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var _closure1_slot15 = var1;
        var1 = function createInitialEntryState(arg1) {
            var9 = arg1;
            var1 = {};
            var12 = _closure1_slot12;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 4;
            var6 = var5[var2];
            var3 = undefined;
            var6 = var4.bind(var3)(var6);
            var6 = var6.KeyboardTypes;
            var16 = var6.SYSTEM;
            var8 = 0;
            var6 = false;
            var18 = undefined;
            var17 = 0;
            var15 = false;
            var14 = var9;
            var10 = var18[var12](var17, var16, var15, var14, var13);
            var1['customKeyboardHeight'] = var10;
            var10 = var5[var2];
            var10 = var4.bind(var3)(var10);
            var10 = var10.KeyboardTypes;
            var16 = var10.SYSTEM;
            var15 = true;
            var18 = undefined;
            var17 = 0;
            var14 = var9;
            var10 = var18[var12](var17, var16, var15, var14, var13);
            var1['customKeyboardHeightExcludingSafeAreaInsets'] = var10;
            var10 = {};
            var11 = var5[var2];
            var11 = var4.bind(var3)(var11);
            var11 = var11.KeyboardTypes;
            var12 = var11.SYSTEM;
            var11 = {};
            var11['keyboardWillOpen'] = var6;
            var10[11] = var11;
            var11 = var5[var2];
            var11 = var4.bind(var3)(var11);
            var11 = var11.KeyboardTypes;
            var12 = var11.EXPRESSION;
            var11 = _closure1_slot4;
            var11 = var11.EMOJI;
            var10[11] = var11;
            var11 = var5[var2];
            var11 = var4.bind(var3)(var11);
            var11 = var11.KeyboardTypes;
            var12 = var11.MEDIA;
            var11 = {};
            var13 = _closure1_slot5;
            var13 = var13.CHAT;
            var11['target'] = var13;
            var10[11] = var11;
            var11 = var5[var2];
            var11 = var4.bind(var3)(var11);
            var11 = var11.KeyboardTypes;
            var12 = var11.APP_LAUNCHER;
            var11 = {};
            var13 = _closure1_slot3;
            var13 = var13.HOME;
            var11['initialRouteName'] = var13;
            var10[11] = var11;
            var1['keyboardContexts'] = var10;
            var1['keyboardDuration'] = var8;
            var8 = _closure1_slot13;
            var7 = {'keyboardHeight': 0, 'excludeSafeAreaInsets': false};
            var7['appEntryKey'] = var9;
            var7 = var8.bind(var3)(var7);
            var1['keyboardHeight'] = var7;
            var7 = {'keyboardHeight': 0, 'excludeSafeAreaInsets': true};
            var7['appEntryKey'] = var9;
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
        var _closure1_slot16 = var1;
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
        var5 = var5.AppLauncherRouteName;
        var _closure1_slot3 = var5;
        var5 = 1;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.ExpressionPickerViewType;
        var _closure1_slot4 = var5;
        var5 = 2;
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var5 = var5.MediaKeyboardTarget;
        var _closure1_slot5 = var5;
        var5 = 'customKeyboardHeight';
        var _closure1_slot6 = var5;
        var5 = var4.Set;
        var9 = var5.prototype;
        var9 = Object.create(var9, {constructor: {value: var5}});
        var17 = var9;
        var5 = new var17[var5](var16);
        var5 = var5 instanceof Object ? var5 : var9;
        var _closure1_slot7 = var5;
        var4 = var4.Set;
        var5 = var4.prototype;
        var5 = Object.create(var5, {constructor: {value: var4}});
        var17 = var5;
        var4 = new var17[var4](var16);
        var4 = var4 instanceof Object ? var4 : var5;
        var _closure1_slot8 = var4;
        var4 = 6;
        var5 = var7[var4];
        var9 = var6.bind(var1)(var5);
        var5 = var9.isAndroid;
        var5 = var5.bind(var9)();
        var13 = 'keyboardWillShow';
        if(!var5) { _fun0001_ip = 95; continue _fun0001 }
case 96:
        var13 = 'keyboardDidShow';
case 95:
        var4 = var7[var4];
        var5 = var6.bind(var1)(var4);
        var4 = var5.isAndroid;
        var4 = var4.bind(var5)();
        var11 = 'keyboardWillHide';
        if(!var4) { _fun0001_ip = 97; continue _fun0001 }
case 98:
        var11 = 'keyboardDidHide';
case 97:
        var4 = 11;
        var4 = var7[var4];
        var9 = var6.bind(var1)(var4);
        var5 = var9.create;
        var4 = function() {
            var1 = {};
            var2 = {};
            var5 = _closure1_slot16;
            var4 = undefined;
            var3 = 'main';
            var3 = var5.bind(var4)(var3);
            var2['main'] = var3;
            var3 = 'share';
            var3 = var5.bind(var4)(var3);
            var2['share'] = var3;
            var1['byAppEntry'] = var2;
            return var1;
        };
        var4 = var5.bind(var9)(var4);
        var _closure1_slot9 = var4;
        var5 = 12;
        var9 = var7[var5];
        var9 = var6.bind(var1)(var9);
        var12 = var9.KeyboardEvents;
        var10 = var12.addListener;
        var9 = function(arg1) {
            var1 = arg1;
            var5 = var1.duration;
            var7 = var1.height;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 13;
            var3 = var6[var1];
            var1 = undefined;
            var8 = var4.bind(var1)(var3);
            var4 = var8.reactNativeKeyboardDidShow;
            var3 = 'KeyboardUIStore';
            var3 = var4.bind(var8)(var7, var3);
            var4 = _closure1_slot15;
            var3 = {};
            var3['keyboardHeight'] = var7;
            var3['keyboardDuration'] = var5;
            var5 = true;
            var3['systemKeyboardOpen'] = var5;
            var3 = var4.bind(var1)(var3);
            var4 = _closure1_slot0;
            var3 = 14;
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
        var9 = var10.bind(var12)(var13, var9);
        var5 = var7[var5];
        var5 = var6.bind(var1)(var5);
        var10 = var5.KeyboardEvents;
        var9 = var10.addListener;
        var5 = function() {
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 13;
            var3 = var6[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.reactNativeKeyboardDidHide;
            var3 = 'KeyboardUIStore';
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot15;
            var5 = false;
            var3 = {'keyboardHeight': 0, 'systemKeyboardOpen': false};
            var3 = var4.bind(var1)(var3);
            var4 = _closure1_slot0;
            var3 = 14;
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
        var5 = var9.bind(var10)(var11, var5);
        var5 = 15;
        var5 = var7[var5];
        var9 = var8.bind(var1)(var5);
        var8 = var9.subscribe;
        var5 = function() {
            var3 = _closure1_slot15;
            var1 = undefined;
            var2 = {};
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var5 = var8.bind(var9)(var5);
        var5 = 17;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'modules/keyboard/native/KeyboardUIStore.native.tsx';
        var5 = var6.bind(var7)(var5);
        var3['default'] = var4;
        var4 = function setKeyboardType(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var5 = arg1;
                var4 = arguments[1];
                var _closure2_slot0 = var5;
                var1 = undefined;
                if(!(var4 === var1)) { _fun0009_ip = 99; continue _fun0009 }
case 100:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 16;
                var2 = var7[var2];
                var2 = var6.bind(var1)(var2);
                var4 = var2.DEFAULT_APP_ENTRY_KEY;
case 99:
                var _closure2_slot1 = var4;
                var8 = _closure1_slot7;
                var7 = var8.forEach;
                var6 = function(arg1) {
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var2 = arg1;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var4, var3);
                    return var1;
                };
                var6 = var7.bind(var8)(var6);
                var7 = _closure1_slot8;
                var6 = var7.forEach;
                var3 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var3 = var2.type;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 4;
                        var2 = var4[var2];
                        var4 = undefined;
                        var2 = var5.bind(var4)(var2);
                        var2 = var2.KeyboardTypes;
                        var2 = var2.SYSTEM;
                        var3 = var3 === var2;
                        if(!var3) { _fun0010_ip = 101; continue _fun0010 }
case 28:
                        var2 = _closure2_slot0;
                        var2 = var2.context;
                        var5 = null;
                        var6 = var5 == var2;
                        var5 = undefined;
                        if(var6) { _fun0010_ip = 102; continue _fun0010 }
case 103:
                        var5 = var2.keyboardWillOpen;
case 102:
                        var2 = true;
                        var3 = var2 === var5;
case 101:
                        var2 = _closure2_slot1;
                        var1 = arg1;
                        var1 = var1.bind(var4)(var3, var2);
                        return var1;
                    }
                };
                var3 = var6.bind(var7)(var3);
                var3 = _closure1_slot15;
                var2 = {};
                var2['keyboardType'] = var5;
                var2 = var3.bind(var1)(var2, var4);
                return var1;
            }
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