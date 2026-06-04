// app/utils/web/KeyboardUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var10 = require;
        var16 = metroImportDefault;
        var3 = exports;
        var11 = dependencyMap;
        var1 = global;
        var _closure1_slot0 = var1;
        var _closure1_slot1 = var10;
        var _closure1_slot2 = var16;
        var _closure1_slot3 = var11;
        var1 = function maybePlusConversion(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var1 = 'plus';
                var3 = '+';
                if(!(var3 !== var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var _closure1_slot18 = var1;
        var8 = function getCodeToKeyLanguageCorrection(arg1, arg2, arg3) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var6 = arg1;
                var1 = arg2;
                var3 = arg3;
                var9 = null;
                if(!(var9 != var3)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                var2 = _closure1_slot9;
                var2 = var2.WINDOWS;
                if(!(var3 === var2)) { _fun0003_ip = 6; continue _fun0003 }
case 4:
                var5 = _closure1_slot1;
                var3 = _closure1_slot3;
                var7 = 5;
                var4 = var3[var7];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var5 = var4.BACKTICK_CODES;
                var4 = var5.has;
                var4 = var4.bind(var5)(var6);
                if(var4) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                return var1;
case 7:
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var4 = var4[var7];
                var5 = var5.bind(var3)(var4);
                var4 = var5.getLayoutMap;
                var5 = var4.bind(var5)();
                var4 = var5.get;
                var10 = 'Backquote';
                var8 = var4.bind(var5)(var10);
                if(!(var1 !== var8)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var4 = var4[var7];
                var7 = var5.bind(var3)(var4);
                var5 = var7.getExactKeyboardEventMatchFromAny;
                var4 = {};
                var4['key'] = var8;
                var4['code'] = var10;
                var4['keyCode'] = var6;
                var5 = var5.bind(var7)(var4);
                var4 = '\\';
                if(!(var4 !== var1)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var4 = "'";
                if(!(var4 === var1)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var4 = 192;
                if(!(var4 !== var6)) { _fun0003_ip = 13; continue _fun0003 }
case 11:
                var6 = '`';
                var4 = var1;
                if(!(var6 !== var8)) { _fun0003_ip = 15; continue _fun0003 }
case 13:
                var6 = _closure1_slot18;
                if(!(var9 != var5)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                var5 = var5.key;
                _fun0003_ip = 18; continue _fun0003;
case 16:
                var7 = var1;
                if(!(var9 != var8)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                var7 = var8;
case 19:
                var5 = var7;
case 18:
                var4 = var6.bind(var3)(var5);
case 15:
                return var4;
case 9:
                var2 = _closure1_slot18;
                var2 = var2.bind(var3)(var1);
                return var2;
case 6:
                return var1;
            }
        };
        var _closure1_slot19 = var8;
        var7 = function getEnv() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure1_slot1;
                var1 = _closure1_slot3;
                var5 = 2;
                var1 = var1[var5];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = var3.isLinux;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                var3 = _closure1_slot1;
                var1 = _closure1_slot3;
                var1 = var1[var5];
                var3 = var3.bind(var4)(var1);
                var1 = var3.isMac;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                var3 = _closure1_slot1;
                var1 = _closure1_slot3;
                var1 = var1[var5];
                var3 = var3.bind(var4)(var1);
                var1 = var3.isWindows;
                var1 = var1.bind(var3)();
                var3 = _closure1_slot9;
                if(var1) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                var1 = var3.BROWSER;
                _fun0004_ip = 27; continue _fun0004;
case 25:
                var1 = var3.WINDOWS;
case 27:
                _fun0004_ip = 10; continue _fun0004;
case 23:
                var3 = _closure1_slot9;
                var1 = var3.MACOS;
case 10:
                _fun0004_ip = 28; continue _fun0004;
case 21:
                var2 = _closure1_slot9;
                var1 = var2.LINUX;
case 28:
                return var1;
            }
        };
        var _closure1_slot20 = var7;
        var6 = function codeToKey(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arg1;
                var3 = _closure1_slot4;
                var8 = undefined;
                var2 = 3;
                var3 = var3.bind(var8)(var1, var2);
                var2 = 1;
                var7 = var3[var2];
                var2 = 2;
                var6 = var3[var2];
                var13 = var1;
                var2 = var13[Symbol.iterator];
                var13 = var2().next;
                var3 = undefined;
                var12 = undefined;
                var14 = var13().value;
                var15 = var2;
                var15 = var15 === var8;
                var3 = var15;
                if(var15) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                var12 = var14;
case 29:
                var12 = undefined;
                var14 = var3;
                if(var14) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                var14 = var13().value;
                var15 = var2;
                var15 = var15 === var8;
                var3 = var15;
                if(var15) { _fun0005_ip = 31; continue _fun0005 }
case 33:
                var12 = var14;
case 31:
                var9 = var12;
                var12 = undefined;
                var14 = var3;
                if(var14) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                var13 = var13().value;
                var14 = var2;
                var14 = var14 === var8;
                var3 = var14;
                if(var14) { _fun0005_ip = 34; continue _fun0005 }
case 36:
                var12 = var13;
case 34:
                var5 = var12;
                var12 = var3;
                if(var12) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                var2.return();
case 37:
                var10 = undefined;
                var11 = undefined;
                var12 = var5;
                var5 = _closure1_slot9;
                var5 = var5.LINUX;
                if(!(var5 !== var12)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var5 = _closure1_slot9;
                var5 = var5.MACOS;
                if(!(var5 !== var12)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                var5 = _closure1_slot9;
                var5 = var5.WINDOWS;
                if(!(var5 !== var12)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                var5 = _closure1_slot9;
                var5 = var5.BROWSER;
                if(!(var5 !== var12)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                var12 = _closure1_slot14;
                var5 = var9;
                var5 = '' + var5;
                var10 = var12[var5];
                _fun0005_ip = 47; continue _fun0005;
case 45:
                var12 = _closure1_slot2;
                var13 = _closure1_slot3;
                var5 = 4;
                var5 = var13[var5];
                var12 = var12.bind(var8)(var5);
                var5 = var9;
                var12 = var12.bind(var8)(var5);
                var11 = var12;
                var5 = null;
                var12 = var5 == var12;
                if(var12) { _fun0005_ip = 48; continue _fun0005 }
case 49:
                var12 = _closure1_slot23;
                var10 = var12.bind(var8)(var11);
                _fun0005_ip = 47; continue _fun0005;
case 43:
                var12 = _closure1_slot13;
                var11 = var9;
                var11 = '' + var11;
                var10 = var12[var11];
                _fun0005_ip = 47; continue _fun0005;
case 41:
                var12 = _closure1_slot12;
                var11 = var9;
                var11 = '' + var11;
                var10 = var12[var11];
                _fun0005_ip = 47; continue _fun0005;
case 39:
                var11 = _closure1_slot11;
                var9 = '' + var9;
                var10 = var11[var9];
case 47:
                var11 = var10;
                var9 = null;
                var11 = var9 != var11;
                if(!var11) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                var9 = var10;
case 50:
                var5 = var9;
case 48:
                var9 = null;
                if(!(var9 == var5)) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                var11 = _closure1_slot1;
                var12 = _closure1_slot3;
                var10 = 5;
                var10 = var12[var10];
                var11 = var11.bind(var8)(var10);
                var10 = var11.getKeyboardEventShapeFromKeycode;
                var10 = var10.bind(var11)(var7);
                var11 = var9 != var10;
                var9 = null;
                if(!var11) { _fun0005_ip = 54; continue _fun0005 }
case 55:
                var12 = _closure1_slot19;
                var11 = var10.keyCode;
                var10 = var10.key;
                var9 = var12.bind(var8)(var11, var10, var6);
case 54:
                return var9;
case 52:
                var4 = _closure1_slot19;
                var4 = var4.bind(var8)(var7, var5, var6);
                return var4;
case 56:
                CatchBlockStart(arg_register=0);
                if(var3) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                var2.return();
case 57:
                throw var1;
            }
        };
        var _closure1_slot21 = var6;
        var5 = function keyToCode(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg1;
                var11 = arguments[1];
                var10 = arguments[2];
                var6 = undefined;
                if(!(var11 === var6)) { _fun0006_ip = 59; continue _fun0006 }
case 5:
                var1 = _closure1_slot20;
                var11 = var1.bind(var6)();
case 59:
                if(!(var10 === var6)) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                var1 = _closure1_slot5;
                var10 = var1.KEYBOARD_KEY;
case 60:
                if(!(var11 === var6)) { _fun0006_ip = 62; continue _fun0006 }
case 63:
                var1 = _closure1_slot20;
                var11 = var1.bind(var6)();
case 62:
                if(!(var10 === var6)) { _fun0006_ip = 64; continue _fun0006 }
case 30:
                var1 = _closure1_slot5;
                var10 = var1.KEYBOARD_KEY;
case 64:
                var2 = null;
                var3 = var2 == var5;
                var1 = null;
                if(var3) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                var3 = _closure1_slot5;
                var3 = var3.KEYBOARD_KEY;
                var3 = var10 === var3;
                if(var3) { _fun0006_ip = 67; continue _fun0006 }
case 68:
                var7 = _closure1_slot5;
                var7 = var7.KEYBOARD_MODIFIER_KEY;
                var3 = var10 === var7;
case 67:
                var8 = var3;
                if(!var3) { _fun0006_ip = 69; continue _fun0006 }
case 70:
                var7 = _closure1_slot9;
                var7 = var7.LINUX;
                var8 = var11 === var7;
case 69:
                var7 = true;
                if(!(var8 !== var7)) { _fun0006_ip = 71; continue _fun0006 }
case 72:
                var8 = var3;
                if(!var3) { _fun0006_ip = 73; continue _fun0006 }
case 74:
                var9 = _closure1_slot9;
                var9 = var9.MACOS;
                var8 = var11 === var9;
case 73:
                if(!(var8 !== var7)) { _fun0006_ip = 75; continue _fun0006 }
case 12:
                var8 = var3;
                if(!var3) { _fun0006_ip = 76; continue _fun0006 }
case 77:
                var9 = _closure1_slot9;
                var9 = var9.WINDOWS;
                var8 = var11 === var9;
case 76:
                if(!(var8 !== var7)) { _fun0006_ip = 78; continue _fun0006 }
case 79:
                var8 = var3;
                if(!var8) { _fun0006_ip = 80; continue _fun0006 }
case 81:
                var9 = _closure1_slot9;
                var9 = var9.BROWSER;
                var8 = var11 === var9;
case 80:
                if(!(var8 !== var7)) { _fun0006_ip = 82; continue _fun0006 }
case 18:
                if(!(var3 !== var7)) { _fun0006_ip = 83; continue _fun0006 }
case 9:
                var3 = _closure1_slot5;
                var3 = var3.MOUSE_BUTTON;
                var3 = var10 === var3;
                if(!(var3 !== var7)) { _fun0006_ip = 55; continue _fun0006 }
case 49:
                var3 = _closure1_slot5;
                var3 = var3.GAMEPAD_BUTTON;
                var3 = var10 === var3;
                if(!(var3 !== var7)) { _fun0006_ip = 84; continue _fun0006 }
case 85:
                var3 = global;
                var8 = var3.Error;
                var3 = var3.HermesInternal;
                var9 = var3.concat;
                var7 = 'Unrecognized DeviceType ';
                var3 = '.';
                var13 = var9.bind(var7)(var10, var3);
                var7 = var8.prototype;
                var7 = Object.create(var7, {constructor: {value: var8}});
                var14 = var7;
                var3 = new var14[var8](var13, var12);
                var3 = var3 instanceof Object ? var3 : var7;
                throw var3;
case 84:
                var3 = global;
                var8 = var3.parseInt;
                var9 = var5.replace;
                var7 = 'GAMEPAD';
                var3 = '';
                var7 = var9.bind(var5)(var7, var3);
                var3 = 10;
                var3 = var8.bind(var6)(var7, var3);
                _fun0006_ip = 86; continue _fun0006;
case 55:
                var7 = global;
                var9 = var7.parseInt;
                var10 = var5.replace;
                var8 = 'MOUSE';
                var7 = '';
                var8 = var10.bind(var5)(var8, var7);
                var7 = 10;
                var3 = var9.bind(var6)(var8, var7);
                _fun0006_ip = 86; continue _fun0006;
case 83:
                var7 = _closure1_slot10;
                var3 = var7[var5];
                _fun0006_ip = 86; continue _fun0006;
case 82:
                var8 = _closure1_slot2;
                var9 = _closure1_slot3;
                var7 = 4;
                var7 = var9[var7];
                var8 = var8.bind(var6)(var7);
                var7 = _closure1_slot23;
                var7 = var7.bind(var6)(var5);
                var3 = var8.bind(var6)(var7);
                _fun0006_ip = 86; continue _fun0006;
case 78:
                var7 = '+';
                if(!(var7 !== var5)) { _fun0006_ip = 87; continue _fun0006 }
case 88:
                var7 = _closure1_slot8;
                var7 = var7[var5];
                _fun0006_ip = 89; continue _fun0006;
case 87:
                var8 = _closure1_slot8;
                var7 = var8.plus;
case 89:
                var3 = var7;
                _fun0006_ip = 86; continue _fun0006;
case 75:
                var7 = _closure1_slot7;
                var3 = var7[var5];
                _fun0006_ip = 86; continue _fun0006;
case 71:
                var4 = _closure1_slot6;
                var3 = var4[var5];
case 86:
                var4 = var2 != var3;
                var1 = null;
                if(!var4) { _fun0006_ip = 65; continue _fun0006 }
case 90:
                var1 = var3;
case 65:
                if(!(var2 == var1)) { _fun0006_ip = 91; continue _fun0006 }
case 92:
                var4 = _closure1_slot1;
                var7 = _closure1_slot3;
                var3 = 5;
                var3 = var7[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.getKeyboardEventShapeFromKey;
                var3 = var3.bind(var4)(var5);
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0006_ip = 93; continue _fun0006 }
case 94:
                var2 = var3.keyCode;
case 93:
                return var2;
case 91:
                return var1;
            }
        };
        var _closure1_slot22 = var5;
        var4 = function getKeyConversionForBrowser(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = arg1;
                var3 = var4.replace;
                var2 = /^(right|left) (shift|meta|ctrl|alt)$/;
                var1 = '$2';
                var4 = var3.bind(var4)(var2, var1);
                var3 = var4.replace;
                var2 = 'meta';
                var1 = 'command';
                var2 = var3.bind(var4)(var2, var1);
                var4 = 'pause/break';
                var3 = 'pause';
                var1 = var4;
                if(!(var3 !== var2)) { _fun0007_ip = 95; continue _fun0007 }
case 96:
                var3 = 'break';
                var1 = var4;
                if(!(var3 !== var2)) { _fun0007_ip = 95; continue _fun0007 }
case 7:
                var1 = var2;
case 95:
                return var1;
            }
        };
        var _closure1_slot23 = var4;
        var1 = function toMetaKeyIndexKey(arg1) {
            var2 = arg1;
            var1 = 'Key';
            var1 = var2 + var1;
            return var1;
        };
        var _closure1_slot24 = var1;
        var9 = global;
        var14 = var9.Object;
        var13 = var14.defineProperty;
        var12 = {};
        var1 = true;
        var12['value'] = var1;
        var1 = '__esModule';
        var1 = var13.bind(var14)(var3, var1, var12);
        var1 = 0;
        var12 = var11[var1];
        var1 = undefined;
        var12 = var16.bind(var1)(var12);
        var _closure1_slot4 = var12;
        var12 = 1;
        var12 = var11[var12];
        var12 = var10.bind(var1)(var12);
        var13 = var12.KeyboardDeviceTypes;
        var _closure1_slot5 = var13;
        var18 = var12.LinuxKeyToCode;
        var _closure1_slot6 = var18;
        var23 = var12.MacosKeyToCode;
        var _closure1_slot7 = var23;
        var20 = var12.WindowsKeyToCode;
        var _closure1_slot8 = var20;
        var12 = var12.KeyboardEnvs;
        var _closure1_slot9 = var12;
        var15 = 2;
        var12 = var11[var15];
        var13 = var10.bind(var1)(var12);
        var12 = var13.isLinux;
        var12 = var12.bind(var13)();
        var17 = var18;
        if(var12) { _fun0001_ip = 97; continue _fun0001 }
case 98:
        var12 = var11[var15];
        var13 = var10.bind(var1)(var12);
        var12 = var13.isMac;
        var13 = var12.bind(var13)();
        var12 = var23;
        if(var13) { _fun0001_ip = 99; continue _fun0001 }
case 100:
        var13 = var11[var15];
        var14 = var10.bind(var1)(var13);
        var13 = var14.isWindows;
        var14 = var13.bind(var14)();
        var13 = var20;
        if(var14) { _fun0001_ip = 39; continue _fun0001 }
case 101:
        var13 = {};
case 39:
        var12 = var13;
case 99:
        var17 = var12;
case 97:
        var _closure1_slot10 = var17;
        var13 = 3;
        var12 = var11[var13];
        var14 = var16.bind(var1)(var12);
        var12 = var14.invert;
        var21 = var12.bind(var14)(var18);
        var _closure1_slot11 = var21;
        var14 = '`';
        var12 = 223;
        var21[var12] = var14;
        var19 = var9.Object;
        var18 = var19.freeze;
        var18 = var18.bind(var19)(var21);
        var21 = var9.Object;
        var19 = var21.freeze;
        var18 = var11[var13];
        var22 = var16.bind(var1)(var18);
        var18 = var22.invert;
        var18 = var18.bind(var22)(var23);
        var18 = var19.bind(var21)(var18);
        var _closure1_slot12 = var18;
        var18 = var11[var13];
        var19 = var16.bind(var1)(var18);
        var18 = var19.invert;
        var20 = var18.bind(var19)(var20);
        var _closure1_slot13 = var20;
        var20[var12] = var14;
        var19 = var9.Object;
        var18 = var19.freeze;
        var18 = var18.bind(var19)(var20);
        var13 = var11[var13];
        var16 = var16.bind(var1)(var13);
        var13 = var16.invert;
        var18 = null;
        if(!(var18 == var17)) { _fun0001_ip = 102; continue _fun0001 }
case 103:
        var17 = {};
case 102:
        var13 = var13.bind(var16)(var17);
        var _closure1_slot14 = var13;
        var15 = var11[var15];
        var16 = var10.bind(var1)(var15);
        var15 = var16.isMac;
        var15 = var15.bind(var16)();
        if(var15) { _fun0001_ip = 104; continue _fun0001 }
case 105:
        var13[var12] = var14;
case 104:
        var12 = var9.Object;
        var9 = var12.freeze;
        var9 = var9.bind(var12)(var13);
        var9 = new Array(24);
        var12 = ['META', '⌘'];
        var9[0] = var12;
        var12 = ['CMD', '⌘'];
        var9[1] = var12;
        var12 = ['RIGHT META', 'RIGHT ⌘'];
        var9[2] = var12;
        var12 = ['RIGHT CMD', 'RIGHT ⌘'];
        var9[3] = var12;
        var12 = ['SHIFT', '⇧'];
        var9[4] = var12;
        var12 = ['RIGHT SHIFT', 'RIGHT ⇧'];
        var9[5] = var12;
        var12 = ['ALT', '⌥'];
        var9[6] = var12;
        var12 = ['RIGHT ALT', 'RIGHT ⌥'];
        var9[7] = var12;
        var12 = ['CTRL', '⌃'];
        var9[8] = var12;
        var12 = ['RIGHT CTRL', 'RIGHT ⌃'];
        var9[9] = var12;
        var12 = ['ENTER', '↵'];
        var9[10] = var12;
        var12 = ['BACKSPACE', '⌫'];
        var9[11] = var12;
        var12 = ['DEL', '⌦'];
        var9[12] = var12;
        var12 = ['ESC', '⎋'];
        var9[13] = var12;
        var12 = ['PAGEUP', '⇞'];
        var9[14] = var12;
        var12 = ['PAGEDOWN', '⇟'];
        var9[15] = var12;
        var12 = ['UP', '↑'];
        var9[16] = var12;
        var12 = ['DOWN', '↓'];
        var9[17] = var12;
        var12 = ['LEFT', '←'];
        var9[18] = var12;
        var12 = ['RIGHT', '→'];
        var9[19] = var12;
        var12 = ['HOME', '↖'];
        var9[20] = var12;
        var12 = ['END', '↘'];
        var9[21] = var12;
        var12 = ['TAB', '⇥'];
        var9[22] = var12;
        var12 = ['SPACE', '␣'];
        var9[23] = var12;
        var _closure1_slot15 = var9;
        var9 = function toPrettyKey(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var9 = _closure1_slot15;
                var1 = var9.length;
                var8 = 0;
                var1 = var8 < var1;
                var7 = undefined;
                var6 = 2;
                var5 = 1;
                var4 = 0;
                if(!var1) { _fun0008_ip = 106; continue _fun0008 }
case 107:
                var3 = _closure1_slot4;
                var1 = var9[var4];
                var1 = var3.bind(var7)(var1, var6);
                var11 = var1[var8];
                var1 = var1[var5];
                var3 = var2.toUpperCase;
                var3 = var3.bind(var2)();
                if(!(var11 !== var3)) { _fun0008_ip = 95; continue _fun0008 }
case 96:
                var4 = var4 + 1;
                var3 = var9.length;
                if(var4 < var3) { _fun0008_ip = 107; continue _fun0008 }
case 106:
                return var2;
case 95:
                return var1;
            }
        };
        var _closure1_slot16 = var9;
        var9 = /shift|meta|ctrl|alt$/;
        var _closure1_slot17 = var9;
        var9 = 8;
        var9 = var11[var9];
        var11 = var10.bind(var1)(var9);
        var10 = var11.fileFinishedImporting;
        var9 = 'utils/web/KeyboardUtils.tsx';
        var9 = var10.bind(var11)(var9);
        var9 = function getRawCodeFromKey(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = arg1;
                var5 = arguments[1];
                var3 = undefined;
                if(!(var5 === var3)) { _fun0009_ip = 108; continue _fun0009 }
case 109:
                var1 = _closure1_slot20;
                var5 = var1.bind(var3)();
case 108:
                var1 = _closure1_slot9;
                var1 = var1.BROWSER;
                if(!(var5 !== var1)) { _fun0009_ip = 110; continue _fun0009 }
case 111:
                var1 = _closure1_slot10;
                var1 = var1[var4];
                _fun0009_ip = 64; continue _fun0009;
case 110:
                var5 = _closure1_slot2;
                var6 = _closure1_slot3;
                var2 = 4;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var1 = var2.bind(var3)(var4);
case 64:
                return var1;
            }
        };
        var3['getRawCodeFromKey'] = var9;
        var3['getCodeToKeyLanguageCorrection'] = var8;
        var3['getEnv'] = var7;
        var3['codeToKey'] = var6;
        var3['keyToCode'] = var5;
        var3['getKeyConversionForBrowser'] = var4;
        var4 = function toBrowserEvents(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = arg1;
                var2 = {'keyCode': 0, 'key': '', 'code': '', 'metaKey': false, 'shiftKey': false, 'altKey': false, 'ctrlKey': false};
                var _closure2_slot0 = var2;
                var2 = null;
                if(!(var2 != var4)) { _fun0010_ip = 112; continue _fun0010 }
case 113:
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var1 = arg1;
                        var5 = arg2;
                        var4 = _closure1_slot21;
                        var8 = undefined;
                        var6 = var4.bind(var8)(var5);
                        var _closure3_slot0 = var6;
                        var4 = {};
                        var12 = _closure2_slot0;
                        var13 = var4;
                        var9 = copyDataProperties(var13, var12);
                        var10 = null;
                        if(!(var10 != var6)) { _fun0011_ip = 114; continue _fun0011 }
case 115:
                        var11 = _closure1_slot17;
                        var9 = var11.test;
                        var9 = var9.bind(var11)(var6);
                        if(!var9) { _fun0011_ip = 116; continue _fun0011 }
case 24:
                        var9 = 'meta';
                        var9 = var9 === var6;
                        if(var9) { _fun0011_ip = 117; continue _fun0011 }
case 8:
                        var11 = 'shift';
                        var9 = var11 === var6;
case 117:
                        if(var9) { _fun0011_ip = 118; continue _fun0011 }
case 33:
                        var11 = 'alt';
                        var9 = var11 === var6;
case 118:
                        if(var9) { _fun0011_ip = 68; continue _fun0011 }
case 119:
                        var11 = 'ctrl';
                        var9 = var11 === var6;
case 68:
                        if(var9) { _fun0011_ip = 120; continue _fun0011 }
case 116:
                        var11 = _closure1_slot22;
                        var9 = _closure1_slot9;
                        var9 = var9.BROWSER;
                        var9 = var11.bind(var8)(var6, var9);
                        if(!(var10 != var9)) { _fun0011_ip = 121; continue _fun0011 }
case 37:
                        var4['keyCode'] = var9;
case 121:
                        var9 = var1.push;
                        var9 = var9.bind(var1)(var4);
                        return var1;
case 120:
                        var7 = _closure2_slot0;
                        var3 = _closure1_slot24;
                        var6 = var3.bind(var8)(var6);
                        var3 = true;
                        var7[var6] = var3;
                        var3 = var1.map;
                        var2 = function(arg1) {
                            var1 = arg1;
                            var4 = _closure1_slot24;
                            var3 = _closure3_slot0;
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = true;
                            var1[var3] = var2;
                            return var1;
                        };
                        var2 = var3.bind(var1)(var2);
                        return var2;
case 114:
                        var3 = var1.push;
                        var2 = {};
                        var13 = var2;
                        var12 = var4;
                        var4 = copyDataProperties(var13, var12);
                        var4 = 'combo';
                        var2[3] = var5;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    }
                };
                var1 = new Array(0);
                var1 = var3.bind(var4)(var2, var1);
                _fun0010_ip = 62; continue _fun0010;
case 112:
                var1 = new Array(0);
case 62:
                return var1;
            }
        };
        var3['toBrowserEvents'] = var4;
        var4 = function toCombo(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var5 = arg1;
                var3 = arguments[1];
                var2 = arguments[2];
                var6 = undefined;
                if(!(var3 === var6)) { _fun0012_ip = 122; continue _fun0012 }
case 3:
                var4 = _closure1_slot20;
                var3 = var4.bind(var6)();
case 122:
                var _closure2_slot0 = var3;
                if(!(var2 === var6)) { _fun0012_ip = 123; continue _fun0012 }
case 124:
                var3 = _closure1_slot5;
                var2 = var3.KEYBOARD_KEY;
case 123:
                var _closure2_slot1 = var2;
                var4 = var5.replace;
                var3 = /numpad plus/i;
                var2 = '';
                var5 = var4.bind(var5)(var3, var2);
                var4 = var5.replace;
                var3 = /NUMPAD \+/i;
                var2 = 'numpad plus';
                var5 = var4.bind(var5)(var3, var2);
                var4 = var5.replace;
                var3 = _closure1_slot1;
                var7 = _closure1_slot3;
                var2 = 6;
                var2 = var7[var2];
                var2 = var3.bind(var6)(var2);
                var3 = var2.modKey;
                var2 = /mod/i;
                var4 = var4.bind(var5)(var2, var3);
                var3 = var4.split;
                var2 = '+';
                var4 = var3.bind(var4)(var2);
                var3 = var4.map;
                var2 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.trim;
                    var4 = var1.bind(var2)();
                    var3 = var4.replace;
                    var2 = 'plus';
                    var1 = '+';
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.reduce;
                var2 = function(arg1, arg2) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = arg1;
                        var12 = arg2;
                        var11 = _closure1_slot15;
                        var3 = var11.length;
                        var10 = 0;
                        var3 = var10 < var3;
                        var7 = undefined;
                        var9 = 2;
                        var8 = 1;
                        var5 = 0;
                        var6 = var12;
                        if(!var3) { _fun0013_ip = 125; continue _fun0013 }
case 111:
                        var4 = _closure1_slot4;
                        var3 = var11[var5];
                        var3 = var4.bind(var7)(var3, var9);
                        var4 = var3[var10];
                        var13 = var3[var8];
                        var3 = var12.toUpperCase;
                        var3 = var3.bind(var12)();
                        if(!(var13 !== var3)) { _fun0013_ip = 31; continue _fun0013 }
case 126:
                        var5 = var5 + 1;
                        var3 = var11.length;
                        var6 = var12;
                        if(var5 < var3) { _fun0013_ip = 111; continue _fun0013 }
case 127:
                        _fun0013_ip = 125; continue _fun0013;
case 31:
                        var3 = var4.toLowerCase;
                        var6 = var3.bind(var4)();
case 125:
                        var5 = _closure1_slot22;
                        var3 = _closure2_slot0;
                        var2 = _closure2_slot1;
                        var5 = var5.bind(var7)(var6, var3, var2);
                        var2 = null;
                        if(!(var2 != var5)) { _fun0013_ip = 128; continue _fun0013 }
case 129:
                        var3 = var1.push;
                        var6 = _closure2_slot1;
                        var2 = new Array(3);
                        var2[0] = var6;
                        var2[1] = var5;
                        var4 = _closure2_slot0;
                        var2[2] = var4;
                        var2 = var3.bind(var1)(var2);
case 128:
                        return var1;
                    }
                };
                var1 = new Array(0);
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['toCombo'] = var4;
        var4 = function toString(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var4 = arg1;
                var1 = arguments[1];
                var7 = undefined;
                if(!(var1 === var7)) { _fun0014_ip = 130; continue _fun0014 }
case 109:
                var1 = false;
case 130:
                var3 = var4.map;
                var2 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var3 = arg1;
                        var1 = var3[Symbol.iterator];
                        var3 = var1().next;
                        var4 = var3().value;
                        var2 = var1;
                        var6 = undefined;
                        var2 = var2 === var6;
                        var9 = undefined;
                        if(var2) { _fun0015_ip = 131; continue _fun0015 }
case 132:
                        var9 = var4;
case 131:
                        var5 = undefined;
                        if(var2) { _fun0015_ip = 133; continue _fun0015 }
case 134:
                        var7 = var3().value;
                        var4 = var1;
                        var4 = var4 === var6;
                        var5 = undefined;
                        var2 = var4;
                        if(var4) { _fun0015_ip = 133; continue _fun0015 }
case 115:
                        var5 = var7;
                        var2 = var4;
case 133:
                        var8 = undefined;
                        if(var2) { _fun0015_ip = 117; continue _fun0015 }
case 30:
                        var4 = var3().value;
                        var3 = var1;
                        var3 = var3 === var6;
                        var8 = undefined;
                        var2 = var3;
                        if(var3) { _fun0015_ip = 117; continue _fun0015 }
case 7:
                        var8 = var4;
                        var2 = var3;
case 117:
                        if(var2) { _fun0015_ip = 31; continue _fun0015 }
case 33:
                        var1.return();
case 31:
                        var2 = 'number';
                        var1 = typeof var8;
                        if(!(var2 !== var1)) { _fun0015_ip = 135; continue _fun0015 }
case 35:
                        var1 = _closure1_slot20;
                        var8 = var1.bind(var6)();
case 135:
                        var1 = _closure1_slot5;
                        var1 = var1.KEYBOARD_KEY;
                        if(!(var9 !== var1)) { _fun0015_ip = 136; continue _fun0015 }
case 137:
                        var1 = _closure1_slot5;
                        var1 = var1.KEYBOARD_MODIFIER_KEY;
                        if(!(var9 !== var1)) { _fun0015_ip = 136; continue _fun0015 }
case 138:
                        var1 = _closure1_slot5;
                        var1 = var1.MOUSE_BUTTON;
                        if(!(var9 !== var1)) { _fun0015_ip = 139; continue _fun0015 }
case 140:
                        var1 = _closure1_slot5;
                        var1 = var1.GAMEPAD_BUTTON;
                        if(!(var9 !== var1)) { _fun0015_ip = 141; continue _fun0015 }
case 142:
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var4 = var1.concat;
                        var3 = 'dev';
                        var1 = ',';
                        var1 = var4.bind(var3)(var9, var1, var5);
                        _fun0015_ip = 18; continue _fun0015;
case 141:
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var4 = var3.concat;
                        var3 = 'gamepad';
                        var1 = var4.bind(var3)(var5);
case 18:
                        _fun0015_ip = 143; continue _fun0015;
case 139:
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var4 = var3.concat;
                        var3 = 'mouse';
                        var1 = var4.bind(var3)(var5);
case 143:
                        _fun0015_ip = 144; continue _fun0015;
case 136:
                        var4 = _closure1_slot21;
                        var3 = null;
                        if(!(var3 == var8)) { _fun0015_ip = 145; continue _fun0015 }
case 43:
                        var2 = new Array(2);
                        var2[0] = var9;
                        var2[1] = var5;
                        _fun0015_ip = 146; continue _fun0015;
case 145:
                        var7 = new Array(3);
                        var7[0] = var9;
                        var7[1] = var5;
                        var7[2] = var8;
                        var2 = var7;
case 146:
                        var2 = var4.bind(var6)(var2);
                        if(!(var3 == var2)) { _fun0015_ip = 147; continue _fun0015 }
case 148:
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var4 = var3.concat;
                        var3 = 'UNK';
                        var2 = var4.bind(var3)(var5);
case 147:
                        var1 = var2;
case 144:
                        return var1;
                    }
                };
                var5 = var3.bind(var4)(var2);
                var4 = var5.filter;
                var6 = _closure1_slot1;
                var8 = _closure1_slot3;
                var3 = 7;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.isNotNullish;
                var5 = var4.bind(var5)(var3);
                if(var1) { _fun0014_ip = 31; continue _fun0014 }
case 64:
                var3 = var5.join;
                var1 = '+';
                var1 = var3.bind(var5)(var1);
                _fun0014_ip = 12; continue _fun0014;
case 31:
                var3 = _closure1_slot0;
                var3 = var3.navigator;
                var6 = var3.appVersion;
                var4 = var6.indexOf;
                var3 = 'Mac OS X';
                var6 = var4.bind(var6)(var3);
                var3 = -1;
                var4 = var5;
                if(!(var3 !== var6)) { _fun0014_ip = 149; continue _fun0014 }
case 150:
                var3 = var5.map;
                var2 = _closure1_slot16;
                var4 = var3.bind(var5)(var2);
case 149:
                var3 = var4.join;
                var2 = ' + ';
                var3 = var3.bind(var4)(var2);
                var2 = var3.toUpperCase;
                var1 = var2.bind(var3)();
case 12:
                return var1;
            }
        };
        var3['toString'] = var4;
        var4 = function areKeyCombosEqual(arg1, arg2) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var4 = arg1;
                var1 = arg2;
                var3 = arguments[2];
                var _closure2_slot0 = var1;
                var5 = undefined;
                if(!(var3 === var5)) { _fun0016_ip = 108; continue _fun0016 }
case 151:
                var3 = false;
case 108:
                var _closure2_slot1 = var3;
                var3 = var4.length;
                var1 = var1.length;
                var1 = var3 === var1;
                if(!var1) { _fun0016_ip = 30; continue _fun0016 }
case 152:
                var3 = var4.every;
                var2 = function(arg1, arg2) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var3 = arg1;
                        var1 = var3[Symbol.iterator];
                        var3 = var1().next;
                        var4 = var3().value;
                        var2 = var1;
                        var8 = undefined;
                        var2 = var2 === var8;
                        var7 = undefined;
                        if(var2) { _fun0017_ip = 131; continue _fun0017 }
case 132:
                        var7 = var4;
case 131:
                        var6 = undefined;
                        if(var2) { _fun0017_ip = 133; continue _fun0017 }
case 134:
                        var5 = var3().value;
                        var4 = var1;
                        var4 = var4 === var8;
                        var6 = undefined;
                        var2 = var4;
                        if(var4) { _fun0017_ip = 133; continue _fun0017 }
case 115:
                        var6 = var5;
                        var2 = var4;
case 133:
                        var4 = undefined;
                        if(var2) { _fun0017_ip = 117; continue _fun0017 }
case 30:
                        var5 = var3().value;
                        var3 = var1;
                        var3 = var3 === var8;
                        var4 = undefined;
                        var2 = var3;
                        if(var3) { _fun0017_ip = 117; continue _fun0017 }
case 7:
                        var4 = var5;
                        var2 = var3;
case 117:
                        if(var2) { _fun0017_ip = 31; continue _fun0017 }
case 33:
                        var1.return();
case 31:
                        var5 = _closure1_slot4;
                        var3 = _closure2_slot0;
                        var1 = arg2;
                        var3 = var3[var1];
                        var1 = 3;
                        var8 = var5.bind(var8)(var3, var1);
                        var1 = 0;
                        var1 = var8[var1];
                        var3 = 1;
                        var5 = var8[var3];
                        var3 = 2;
                        var3 = var8[var3];
                        var1 = var7 === var1;
                        if(!var1) { _fun0017_ip = 120; continue _fun0017 }
case 153:
                        var1 = var6 === var5;
case 120:
                        if(!var1) { _fun0017_ip = 42; continue _fun0017 }
case 154:
                        var2 = _closure2_slot1;
                        var2 = !var2;
                        if(var2) { _fun0017_ip = 155; continue _fun0017 }
case 156:
                        var2 = var4 === var3;
case 155:
                        var1 = var2;
case 42:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
case 30:
                return var1;
            }
        };
        var3['areKeyCombosEqual'] = var4;
        var2 = function isKeyboardActivatedMouseEvent(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var2 = arg1;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0018_ip = 108; continue _fun0018 }
case 109:
                var4 = 'object';
                var3 = typeof var2;
                var1 = var4 === var3;
case 108:
                if(!var1) { _fun0018_ip = 107; continue _fun0018 }
case 59:
                var3 = 'nativeEvent';
                var1 = var3 in var2;
case 107:
                if(!var1) { _fun0018_ip = 157; continue _fun0018 }
case 158:
                var3 = var2.nativeEvent;
                var4 = var3.clientX;
                var3 = 0;
                var1 = var3 === var4;
case 157:
                if(!var1) { _fun0018_ip = 126; continue _fun0018 }
case 62:
                var2 = var2.nativeEvent;
                var3 = var2.clientY;
                var2 = 0;
                var1 = var2 === var3;
case 126:
                return var1;
            }
        };
        var3['isKeyboardActivatedMouseEvent'] = var2;
        return var1;
    }
})();